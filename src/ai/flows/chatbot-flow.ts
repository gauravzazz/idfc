'use server';
/**
 * @fileOverview A chatbot flow for interacting with users, collecting leads, and providing product information.
 *
 * - chatbotInteraction - A function that handles the chatbot conversation logic.
 * - ChatbotInput - The input type for the chatbotInteraction function.
 * - ChatbotOutput - The return type for the chatbotInteraction function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatbotInputSchema = z.object({
  userInput: z.string(),
  currentState: z.enum([
    "GREETING",
    "ASK_MOBILE_PERMISSION",
    "COLLECTING_MOBILE",
    "MOBILE_COLLECTED_ASK_PRODUCT",
    "PRODUCT_QUERY",
    "GENERAL_CONVERSATION",
  ]),
  languageCode: z.string().default('en'),
  collectedMobile: z.string().optional().describe("The mobile number if already collected."),
});
export type ChatbotInput = z.infer<typeof ChatbotInputSchema>;

const ChatbotOutputSchema = z.object({
  botResponse: z.string(),
  nextState: z.enum([
    "GREETING",
    "ASK_MOBILE_PERMISSION",
    "COLLECTING_MOBILE",
    "MOBILE_COLLECTED_ASK_PRODUCT",
    "PRODUCT_QUERY",
    "GENERAL_CONVERSATION",
  ]),
  leadCreated: z.boolean().optional().describe("Indicates if a lead was successfully created (simulated)."),
  collectedMobile: z.string().optional().describe("The validated and collected mobile number."),
});
export type ChatbotOutput = z.infer<typeof ChatbotOutputSchema>;

const productInfoPrompt = ai.definePrompt({
  name: 'chatbotProductInfoPrompt',
  input: { schema: z.object({ query: z.string(), language: z.string() }) },
  output: { schema: z.object({ answer: z.string() }) },
  prompt: `
      You are a helpful bank assistant for IDFC FIRST Bank. The user is asking about bank products.
      Your knowledge is limited to the following products:
      1. Classic Account: Average Monthly Balance (AMB) requirement is ₹10,000. Comes with a VISA Classic Debit card. Features include unlimited free ATM transactions and purchase protection up to ₹50,000.
      2. Platinum Account: Average Monthly Balance (AMB) requirement is ₹25,000. Comes with a VISA Platinum Debit Card. Features include airport lounge access (1 per quarter, domestic), unlimited free ATM transactions, and purchase protection up to ₹1 Lakh.

      The current language for your response should be: {{{language}}}.
      User's question: {{{query}}}
      
      Provide a concise and helpful answer based ONLY on the user's query and the product information above.
      If the query is not about these specific products or features, politely state that you can only help with Classic and Platinum savings accounts.
      Do not invent features or details not listed.
      Keep responses brief, ideally 1-2 sentences.
  `,
});

export async function chatbotInteraction(input: ChatbotInput): Promise<ChatbotOutput> {
  return chatbotFlow(input);
}

const chatbotFlow = ai.defineFlow(
  {
    name: 'chatbotFlow',
    inputSchema: ChatbotInputSchema,
    outputSchema: ChatbotOutputSchema,
  },
  async (input: ChatbotInput) => {
    let botResponse = "";
    let nextState = input.currentState;
    let leadCreated = false;
    let collectedMobile = input.collectedMobile;

    const t = (translations: Record<string, string>) => translations[input.languageCode] || translations.en;

    const responses = {
      greeting: {
        en: "Hello! I'm your IDFC FIRST Bank assistant. How can I help you today? If you'd like a callback, I can take your mobile number.",
        mr: "नमस्कार! मी तुमचा IDFC FIRST बँक सहाय्यक आहे. आज मी तुमची कशी मदत करू शकेन? तुम्हाला आमच्या प्रतिनिधीकडून कॉल हवा असल्यास, मी तुमचा मोबाईल नंबर घेऊ शकेन.",
        hi: "नमस्ते! मैं आपका आईडीएफसी फर्स्ट बैंक सहायक हूँ। आज मैं आपकी कैसे सहायता कर सकता हूँ? यदि आप कॉलबैक चाहते हैं, तो मैं आपका मोबाइल नंबर ले सकता हूँ।",
        kn: "ನಮಸ್ಕಾರ! ನಾನು ನಿಮ್ಮ IDFC FIRST ಬ್ಯಾಂಕ್ ಸಹಾಯಕ. ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಲಿ? ನೀವು ಕಾಲ್‌ಬ್ಯಾಕ್ ಬಯಸಿದರೆ, ನಾನು ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ತೆಗೆದುಕೊಳ್ಳಬಹುದು.",
        ta: "வணக்கம்! நான் உங்கள் IDFC FIRST வங்கி உதவியாளர். இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்? நீங்கள் ஒரு அழைப்பை விரும்பினால், நான் உங்கள் மொபைಲ್ எண்ணைப் பெறலாம்.",
        bn: "নমস্কার! আমি আপনার IDFC FIRST ব্যাংকের সহকারী। আজ আমি আপনাকে কিভাবে সাহায্য করতে পারি? আপনি যদি একটি কলব্যাক চান, আমি আপনার মোবাইল নম্বর নিতে পারি।",
        gu: "નમસ્તે! હું તમારો IDFC FIRST બેંક સહાયક છું. આજે હું તમને કેવી રીતે મદદ કરી શકું? જો તમે કૉલબેક ઈચ્છો, તો હું તમારો મોબાઇલ નંબર લઈ શકું છું.",
      },
      askMobilePermissionAffirmative: {
        en: "Great! Please provide your 10-digit mobile number.",
        mr: "उत्तम! कृपया तुमचा १० अंकी मोबाईल नंबर सांगा.",
        hi: "बहुत बढ़िया! कृपया अपना 10 अंकों का मोबाइल नंबर प्रदान करें।",
        kn: "ಚೆನ್ನಾಗಿದೆ! ದಯವಿಟ್ಟು ನಿಮ್ಮ 10-ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನೀಡಿ.",
        ta: "அருமை! உங்கள் 10 இலக்க மொபைல் எண்ணை வழங்கவும்.",
        bn: "খুব ভালো! আপনার ১০ সংখ্যার মোবাইল নম্বর দিন।",
        gu: "સરસ! કૃપા કરીને તમારો ૧૦-અંકનો મોબાઇલ નંબર આપો.",
      },
      askMobilePermissionNegative: {
        en: "Alright. Can I help you with any information about our Classic or Platinum savings accounts?",
        mr: "ठीक आहे. मी तुम्हाला आमच्या क्लासिक किंवा प्लॅटिनम बचत खात्यांबद्दल काही माहिती देऊ शकेन का?",
        hi: "ठीक है। क्या मैं आपको हमारे क्लासिक या प्लेटिनम बचत खातों के बारे में कोई जानकारी दे सकता हूँ?",
        kn: "ಸರಿ. ನಮ್ಮ ಕ್ಲಾಸಿಕ್ ಅಥವಾ ಪ್ಲಾಟಿನಂ ಉಳಿತಾಯ ಖಾತೆಗಳ ಬಗ್ಗೆ ನಾನು ನಿಮಗೆ ಯಾವುದೇ ಮಾಹಿತಿಯೊಂದಿಗೆ ಸಹಾಯ ಮಾಡಬಹುದೇ?",
        ta: "சரி. எங்கள் கிளாசிக் அல்லது பிளாட்டினம் சேமிப்புக் கணக்குகள் பற்றிய எந்த தகவலுடனும் நான் உங்களுக்கு உதவ முடியுமா?",
        bn: "ঠিক আছে। আমি কি আমাদের ক্লাসিক বা প্ল্যাটিনাম সেভিংস অ্যাকাউন্ট সম্পর্কে কোনো তথ্য দিয়ে আপনাকে সাহায্য করতে পারি?",
        gu: "ઠીક છે. શું હું તમને અમારા ક્લાસિક અથવા પ્લેટિનમ બચત ખાતાઓ વિશે કોઈ માહિતી આપી શકું?",
      },
      askMobilePermissionUnclear: {
        en: "I'm sorry, I didn't quite catch that. Would you like to provide a mobile number for a callback, or ask about our products?",
        mr: "मला माफ करा, मला ते नीट समजले नाही. तुम्हाला आमच्या प्रतिनिधीकडून कॉलसाठी मोबाईल नंबर द्यायचा आहे की आमच्या उत्पादनांबद्दल विचारायचे आहे?",
        hi: "मुझे क्षमा करें, मैं पूरी तरह समझ नहीं पाया। क्या आप कॉलबैक के लिए मोबाइल नंबर देना चाहेंगे, या हमारे उत्पादों के बारे में पूछना चाहेंगे?",
        kn: "ಕ್ಷಮಿಸಿ, ನನಗೆ ಸರಿಯಾಗಿ ಅರ್ಥವಾಗಲಿಲ್ಲ. ನೀವು ಕಾಲ್‌ಬ್ಯಾಕ್‌ಗಾಗಿ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನೀಡಲು ಬಯಸುತ್ತೀರಾ ಅಥವಾ ನಮ್ಮ ಉತ್ಪನ್ನಗಳ ಬಗ್ಗೆ ಕೇಳಲು ಬಯಸುತ್ತೀರಾ?",
        ta: "மன்னிக்கவும், எனக்கு அது சரியாகப் புரியவில்லை. நீங்கள் ஒரு அழைப்பிற்காக மொபைல் எண்ணை வழங்க விரும்புகிறீர்களா, அல்லது எங்கள் தயாரிப்புகளைப் பற்றி கேட்க விரும்புகிறீர்களா?",
        bn: "আমি দুঃখিত, আমি ঠিক বুঝতে পারিনি। আপনি কি কলব্যাকের জন্য একটি মোবাইল নম্বর দিতে চান, অথবা আমাদের পণ্য সম্পর্কে জিজ্ঞাসা করতে চান?",
        gu: "મને માફ કરશો, હું તે બરાબર સમજી શક્યો નથી. શું તમે કૉલબેક માટે મોબાઇલ નંબર આપવા માંગો છો, અથવા અમારા ઉત્પાદનો વિશે પૂછવા માંગો છો?",
      },
      mobileCollected: {
        en: "Thank you! Your mobile number {mobile} has been noted. Our team will contact you shortly. Do you have any questions about our Classic or Platinum accounts?",
        mr: "धन्यवाद! तुमचा मोबाईल नंबर {mobile} नोंदवला आहे. आमची टीम लवकरच तुमच्याशी संपर्क साधेल. तुम्हाला आमच्या क्लासिक किंवा प्लॅटिनम खात्यांबद्दल काही प्रश्न आहेत का?",
        hi: "धन्यवाद! आपका मोबाइल नंबर {mobile} नोट कर लिया गया है। हमारी टीम जल्द ही आपसे संपर्क करेगी। क्या आपके पास हमारे क्लासिक या प्लेटिनम खातों के बारे में कोई प्रश्न हैं?",
        kn: "ಧನ್ಯವಾದಗಳು! ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ {mobile} ಅನ್ನು નોંધಲಾಗಿದೆ. ನಮ್ಮ ತಂಡ ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತದೆ. ನಮ್ಮ ಕ್ಲಾಸಿಕ್ ಅಥವಾ ಪ್ಲಾಟಿನಂ ಖಾತೆಗಳ ಬಗ್ಗೆ ನಿಮಗೆ ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳಿವೆಯೇ?",
        ta: "நன்றி! உங்கள் மொபைல் எண் {mobile} குறிப்பிடப்பட்டுள்ளது. எங்கள் குழு விரைவில் உங்களைத் தொடர்பு கொள்ளும். எங்கள் கிளாசிக் அல்லது பிளாட்டினம் கணக்குகள் பற்றி உங்களுக்கு ஏதேனும் கேள்விகள் உள்ளதா?",
        bn: "ধন্যবাদ! আপনার মোবাইল নম্বর {mobile} নোট করা হয়েছে। আমাদের দল শীঘ্রই আপনার সাথে যোগাযোগ করবে। আমাদের ক্লাসিক বা প্ল্যাটিনাম অ্যাকাউন্ট সম্পর্কে আপনার কোন প্রশ্ন আছে?",
        gu: "આભાર! તમારો મોબાઇલ નંબર {mobile} નોંધી લેવામાં આવ્યો છે. અમારી ટીમ ટૂંક સમયમાં તમારો સંપર્ક કરશે. શું તમને અમારા ક્લાસિક અથવા પ્લેટિનમ ખાતાઓ વિશે કોઈ પ્રશ્નો છે?",
      },
      invalidMobile: {
        en: "Please provide a valid 10-digit mobile number.",
        mr: "कृपया वैध १० अंकी मोबाईल नंबर सांगा.",
        hi: "कृपया एक मान्य 10 अंकों का मोबाइल नंबर प्रदान करें।",
        kn: "ದಯವಿಟ್ಟು ಮಾನ್ಯವಾದ 10-ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನೀಡಿ.",
        ta: "சரியான 10 இலக்க மொபைல் எண்ணை வழங்கவும்.",
        bn: "অনুগ্রহ করে একটি বৈধ ১০ সংখ্যার মোবাইল নম্বর দিন।",
        gu: "કૃપા કરીને માન્ય ૧૦-અંકનો મોબાઇલ નંબર આપો.",
      },
      generalFallback: {
        en: "I'm not sure how to help with that. You can ask about our Classic or Platinum accounts, or provide a mobile number if you'd like a callback.",
        mr: "मला खात्री नाही की याबद्दल कशी मदत करावी. तुम्ही आमच्या क्लासिक किंवा प्लॅटिनम खात्यांबद्दल विचारू शकता, किंवा तुम्हाला आमच्या प्रतिनिधीकडून कॉल हवा असल्यास मोबाईल नंबर देऊ शकता.",
        hi: "मुझे यकीन नहीं है कि इसमें कैसे मदद की जाए। आप हमारे क्लासिक या प्लेटिनम खातों के बारे में पूछ सकते हैं, या यदि आप कॉलबैक चाहते हैं तो मोबाइल नंबर प्रदान कर सकते हैं।",
        kn: "ಅದಕ್ಕೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬೇಕೆಂದು ನನಗೆ ಖಚಿತವಿಲ್ಲ. ನೀವು ನಮ್ಮ ಕ್ಲಾಸಿಕ್ ಅಥವಾ ಪ್ಲಾಟಿನಂ ಖಾತೆಗಳ ಬಗ್ಗೆ ಕೇಳಬಹುದು, ಅಥವಾ ನೀವು ಕಾಲ್‌ಬ್ಯಾಕ್ ಬಯಸಿದರೆ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನೀಡಬಹುದು.",
        ta: "அதற்கு எப்படி உதவுவது என்று எனக்குத் தெரியவில்லை. எங்கள் கிளாசிக் அல்லது பிளாட்டினம் கணக்குகளைப் பற்றி நீங்கள் கேட்கலாம், அல்லது நீங்கள் ஒரு அழைப்பை விரும்பினால் மொபைல் எண்ணை வழங்கலாம்.",
        bn: "আমি নিশ্চিত নই কিভাবে এটি সাহায্য করতে পারি। আপনি আমাদের ক্লাসিক বা প্ল্যাটিনাম অ্যাকাউন্ট সম্পর্কে জিজ্ঞাসা করতে পারেন, অথবা যদি আপনি একটি কলব্যাক চান তবে একটি মোবাইল নম্বর দিতে পারেন।",
        gu: "મને ખાતરી નથી કે તેમાં કેવી રીતે મદદ કરવી. તમે અમારા ક્લાસિક અથવા પ્લેટિનમ ખાતાઓ વિશે પૂછી શકો છો, અથવા જો તમે કૉલબેક ઈચ્છો તો મોબાઇલ નંબર આપી શકો છો.",
      },
      productInfoError: {
        en: "I can only provide information on Classic and Platinum savings accounts at the moment. How else can I help?",
        mr: "मी सध्या फक्त क्लासिक आणि प्लॅटिनम बचत खात्यांबद्दल माहिती देऊ शकेन. मी अजून कशी मदत करू शकेन?",
        hi: "मैं वर्तमान में केवल क्लासिक और प्लेटिनम बचत खातों पर जानकारी प्रदान कर सकता हूँ। मैं और कैसे मदद कर सकता हूँ?",
        kn: "ನಾನು ಸದ್ಯಕ್ಕೆ ಕ್ಲಾಸಿಕ್ ಮತ್ತು ಪ್ಲಾಟಿನಂ ಉಳಿತಾಯ ಖಾತೆಗಳ ಬಗ್ಗೆ ಮಾತ್ರ ಮಾಹಿತಿ ನೀಡಬಲ್ಲೆ. ನಾನು ಬೇರೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಲಿ?",
        ta: "நான் தற்போது கிளாசிக் மற்றும் பிளாட்டினம் சேமிப்புக் கணக்குகள் பற்றிய தகவல்களை மட்டுமே வழங்க முடியும். நான் வேறு எப்படி உதவ முடியும்?",
        bn: "আমি এই মুহূর্তে শুধুমাত্র ক্লাসিক এবং প্ল্যাটিনাম সেভিংস অ্যাকাউন্ট সম্পর্কে তথ্য দিতে পারি। আমি আর কিভাবে সাহায্য করতে পারি?",
        gu: "હું હાલમાં ફક્ત ક્લાસિક અને પ્લેટિનમ બચત ખાતાઓ પર માહિતી આપી શકું છું. હું બીજી કેવી રીતે મદદ કરી શકું?",
      }
    };

    if (input.currentState === "GREETING") {
      botResponse = t(responses.greeting);
      nextState = "ASK_MOBILE_PERMISSION";
    } else if (input.currentState === "ASK_MOBILE_PERMISSION") {
      const userInputLower = input.userInput.toLowerCase();
      const positiveKeywords = ['yes', 'ok', 'sure', 'ho', 'haan', 'ठीक है', 'होय', 'ठीक', 'ಸರಿ', 'ಆಯಿತು', 'ஆம்', 'சரி', 'হ্যাঁ', 'ঠিক আছে', 'હા', 'બરાબર'];
      const negativeKeywords = ['no', 'not now', 'nahi', 'nahin', 'नंतर', 'अभी नहीं', 'नाही', 'ಬೇಡ', 'ಈಗ ಬೇಡ', 'இல்லை', 'வேண்டாம்', 'না', 'এখন না', 'ના', 'અત્યારે નહિ'];

      if (positiveKeywords.some(kw => userInputLower.includes(kw))) {
        botResponse = t(responses.askMobilePermissionAffirmative);
        nextState = "COLLECTING_MOBILE";
      } else if (negativeKeywords.some(kw => userInputLower.includes(kw))) {
        botResponse = t(responses.askMobilePermissionNegative);
        nextState = "PRODUCT_QUERY";
      } else {
        // Try to see if the input is a product query directly
        try {
            const { output } = await productInfoPrompt({ query: input.userInput, language: input.languageCode });
            if (output?.answer && !output.answer.toLowerCase().includes("can only help with classic and platinum")) {
                 botResponse = output.answer;
                 nextState = "PRODUCT_QUERY";
            } else {
                botResponse = t(responses.askMobilePermissionUnclear);
                nextState = "ASK_MOBILE_PERMISSION";
            }
        } catch (e) {
            console.error("Error in productInfoPrompt during ASK_MOBILE_PERMISSION:", e);
            botResponse = t(responses.askMobilePermissionUnclear);
            nextState = "ASK_MOBILE_PERMISSION";
        }
      }
    } else if (input.currentState === "COLLECTING_MOBILE") {
      const mobileRegex = /^\d{10}$/;
      const potentialMobile = input.userInput.replace(/\s+/g, '');
      if (mobileRegex.test(potentialMobile)) {
        collectedMobile = potentialMobile;
        leadCreated = true; 
        botResponse = t(responses.mobileCollected).replace('{mobile}', collectedMobile);
        nextState = "MOBILE_COLLECTED_ASK_PRODUCT";
      } else {
        botResponse = t(responses.invalidMobile);
        nextState = "COLLECTING_MOBILE";
      }
    } else if (input.currentState === "MOBILE_COLLECTED_ASK_PRODUCT" || input.currentState === "PRODUCT_QUERY") {
      try {
        const { output } = await productInfoPrompt({ query: input.userInput, language: input.languageCode });
        botResponse = output?.answer || t(responses.productInfoError);
      } catch (e) {
        console.error("Error in productInfoPrompt:", e);
        botResponse = t(responses.productInfoError);
      }
      nextState = "PRODUCT_QUERY"; 
    } else { 
      botResponse = t(responses.generalFallback);
      nextState = input.collectedMobile ? "PRODUCT_QUERY" : "ASK_MOBILE_PERMISSION";
    }

    return { botResponse, nextState, leadCreated, collectedMobile };
  }
);
