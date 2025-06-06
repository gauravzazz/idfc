
// @ts-nocheck
'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Flag } from 'lucide-react';

const sectionTranslations = {
  en: {
    disclaimerTitle: "Disclaimer",
    kycConfirmation: "I confirm that <strong>I will complete full KYC within 30 days.</strong> In case of failure in doing so, bank reserves a right to initiate closure of my savings account.",
    termsConsentLabel: "I accept all <Button variant=\"link\" class=\"text-accent p-0 h-auto inline-block\">terms & conditions</Button> related to IDFC FIRST Bank and confirm that I am citizen of only India, born in India and a tax resident of India only.",
    proceedButton: "Proceed to open account",
    termsButtonText: "terms & conditions"
  },
  mr: {
    disclaimerTitle: "अस्वीकरण",
    kycConfirmation: "मी पुष्टी करतो की <strong>मी ३० दिवसांच्या आत संपूर्ण केवायसी पूर्ण करेन.</strong> असे करण्यात अयशस्वी झाल्यास, बँक माझे बचत खाते बंद करण्याचा अधिकार राखून ठेवते.",
    termsConsentLabel: "मी IDFC FIRST बँकेशी संबंधित सर्व <Button variant=\"link\" class=\"text-accent p-0 h-auto inline-block\">अटी आणि नियम</Button> स्वीकारतो आणि पुष्टी करतो की मी फक्त भारताचा नागरिक आहे, भारतात जन्मलो आहे आणि फक्त भारताचा कर रहिवासी आहे.",
    proceedButton: "खाते उघडण्यासाठी पुढे जा",
    termsButtonText: "अटी आणि नियम"
  },
  hi: {
    disclaimerTitle: "अस्वीकरण",
    kycConfirmation: "मैं पुष्टि करता हूं कि <strong>मैं 30 दिनों के भीतर पूर्ण केवाईसी पूरी करूंगा।</strong> ऐसा करने में विफल रहने पर, बैंक मेरे बचत खाते को बंद करने की प्रक्रिया शुरू करने का अधिकार सुरक्षित रखता है।",
    termsConsentLabel: "मैं आईडीएफसी फर्स्ट बैंक से संबंधित सभी <Button variant=\"link\" class=\"text-accent p-0 h-auto inline-block\">नियम और शर्तें</Button> स्वीकार करता हूं और पुष्टि करता हूं कि मैं केवल भारत का नागरिक हूं, भारत में पैदा हुआ हूं और केवल भारत का कर निवासी हूं।",
    proceedButton: "खाता खोलने के लिए आगे बढ़ें",
    termsButtonText: "नियम और शर्तें"
  },
  kn: {
    disclaimerTitle: "ಹಕ್ಕು ನಿರಾಕರಣೆ",
    kycConfirmation: "ನಾನು <strong>30 ದಿನಗಳಲ್ಲಿ ಪೂರ್ಣ KYC ಪೂರ್ಣಗೊಳಿಸುತ್ತೇನೆ ಎಂದು ಖಚಿತಪಡಿಸುತ್ತೇನೆ.</strong> ಹಾಗೆ ಮಾಡಲು ವಿಫಲವಾದರೆ, ನನ್ನ ಉಳಿತಾಯ ಖಾತೆಯನ್ನು ಮುಚ್ಚಲು ಬ್ಯಾಂಕ್ ಹಕ್ಕನ್ನು ಕಾಯ್ದಿರಿಸುತ್ತದೆ.",
    termsConsentLabel: "ನಾನು IDFC FIRST ಬ್ಯಾಂಕ್‌ಗೆ ಸಂಬಂಧಿಸಿದ ಎಲ್ಲಾ <Button variant=\"link\" class=\"text-accent p-0 h-auto inline-block\">ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳನ್ನು</Button> ಒಪ್ಪಿಕೊಳ್ಳುತ್ತೇನೆ ಮತ್ತು ನಾನು ಭಾರತದ ಪ್ರಜೆ ಮಾತ್ರ, ಭಾರತದಲ್ಲಿ ಜನಿಸಿದ್ದೇನೆ ಮತ್ತು ಭಾರತದ ತೆರಿಗೆ ನಿವಾಸಿ ಮಾತ್ರ ಎಂದು ಖಚಿತಪಡಿಸುತ್ತೇನೆ.",
    proceedButton: "ಖಾತೆ ತೆರೆಯಲು ಮುಂದುವರಿಯಿರಿ",
    termsButtonText: "ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳನ್ನು"
  },
  ta: {
    disclaimerTitle: "பொறுப்புத் துறப்பு",
    kycConfirmation: "நான் <strong>30 நாட்களுக்குள் முழுமையான KYC-ஐ முடிப்பேன் என்பதை உறுதிப்படுத்துகிறேன்.</strong> அவ்வாறு செய்யத் தவறினால், எனது சேமிப்புக் கணக்கை மூடுவதற்கு வங்கிக்கு உரிமை உண்டு.",
    termsConsentLabel: "ஐடிஎஃப்சி ஃபர்ஸ்ட் வங்கி தொடர்பான அனைத்து <Button variant=\"link\" class=\"text-accent p-0 h-auto inline-block\">விதிமுறைகள் மற்றும் நிபந்தனைகளை</Button> நான் ஏற்றுக்கொள்கிறேன், மேலும் நான் இந்தியாவின் குடிமகன் மட்டுமே, இந்தியாவில் பிறந்தவன் மற்றும் இந்தியாவின் வரி குடியுரிமை பெற்றவன் என்பதை உறுதிப்படுத்துகிறேன்.",
    proceedButton: "கணக்கைத் திறக்க தொடரவும்",
    termsButtonText: "விதிமுறைகள் மற்றும் நிபந்தனைகளை"
  },
  bn: {
    disclaimerTitle: "দাবিত্যাগ",
    kycConfirmation: "আমি নিশ্চিত করছি যে <strong>আমি ৩০ দিনের মধ্যে সম্পূর্ণ কেওয়াইসি সম্পন্ন করব।</strong> তা করতে ব্যর্থ হলে, ব্যাংক আমার সঞ্চয়ী অ্যাকাউন্ট বন্ধ করার অধিকার সংরক্ষণ করে।",
    termsConsentLabel: "আমি আইডিএফসি ফার্স্ট ব্যাংকের সাথে সম্পর্কিত সমস্ত <Button variant=\"link\" class=\"text-accent p-0 h-auto inline-block\">শর্তাবলী</Button> গ্রহণ করি এবং নিশ্চিত করি যে আমি শুধুমাত্র ভারতের নাগরিক, ভারতে জন্মগ্রহণ করেছি এবং শুধুমাত্র ভারতের কর বাসিন্দা।",
    proceedButton: "অ্যাকাউন্ট খুলতে এগিয়ে যান",
    termsButtonText: "শর্তাবলী"
  },
  gu: {
    disclaimerTitle: "અસ્વીકરણ",
    kycConfirmation: "હું પુષ્ટિ કરું છું કે <strong>હું 30 દિવસમાં સંપૂર્ણ KYC પૂર્ણ કરીશ.</strong> આમ કરવામાં નિષ્ફળતાના કિસ્સામાં, બેંક મારું બચત ખાતું બંધ કરવાનો અધિકાર અનામત રાખે છે.",
    termsConsentLabel: "હું IDFC FIRST બેંક સંબંધિત તમામ <Button variant=\"link\" class=\"text-accent p-0 h-auto inline-block\">નિયમો અને શરતો</Button> સ્વીકારું છું અને પુષ્ટિ કરું છું કે હું ફક્ત ભારતનો નાગરિક છું, ભારતમાં જન્મ્યો છું અને ફક્ત ભારતનો કર નિવાસી છું.",
    proceedButton: "ખાતું ખોલવા માટે આગળ વધો",
    termsButtonText: "નિયમો અને શરતો"
  },
};


interface DisclaimerAndConsentSectionProps {
  languageCode: string;
}

export function DisclaimerAndConsentSection({ languageCode = 'en' }: DisclaimerAndConsentSectionProps) {
  const lang = languageCode && sectionTranslations[languageCode] ? languageCode : 'en';
  const t = sectionTranslations[lang];

  const termsLabelParts = t.termsConsentLabel.split(/<Button.*?<\/Button>/);
  const termsButtonText = t.termsButtonText;


  return (
    <div className="container mx-auto px-4 py-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-primary">{t.disclaimerTitle}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg border border-input">
            <Flag className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <p className="text-sm text-foreground" dangerouslySetInnerHTML={{ __html: t.kycConfirmation }} />
          </div>
          <div className="flex items-start space-x-3 p-4 border border-input rounded-lg">
            <Checkbox id="termsConsent" className="mt-1 flex-shrink-0" />
            <Label htmlFor="termsConsent" className="text-sm font-normal text-foreground leading-relaxed">
              {termsLabelParts[0]}
              <Button variant="link" className="text-accent p-0 h-auto inline-block mx-1">{termsButtonText}</Button>
              {termsLabelParts[1]}
            </Label>
          </div>
          <Button type="button" disabled className="w-full bg-primary hover:bg-primary/90 text-lg py-3">
            {t.proceedButton}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
