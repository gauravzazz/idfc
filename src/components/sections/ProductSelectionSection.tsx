
// @ts-nocheck
'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { VerifiedTickIcon } from '@/components/icons/VerifiedTickIcon';
import { LoungeIcon } from '@/components/icons/LoungeIcon';
import { CardIconSvg } from '@/components/icons/CardIconSvg';
import { OffersIconSvg } from '@/components/icons/OffersIconSvg';
import { PurchaseProtectionIcon } from '@/components/icons/PurchaseProtectionIcon';
import { Check, ChevronDown, X } from 'lucide-react';
// import { AccountBenefitSummary } from '@/components/AccountBenefitSummary'; // Removed import

const sectionTranslations = {
  en: {
    title: "Select your <strong class=\"font-bold\">product</strong>",
    eachProductGives: "Each product gives you:",
    commonBenefitInterest: { text: "Up to", value: "7%", subtext: "p.a. interest" },
    commonBenefitMonthly: { text: "Monthly", value: "", subtext: "interest credit" },
    commonBenefitZeroCharges: { text: "Zero Charges", value: "", subtext: "on all services" },
    ambLabel: "Average Monthly Balance",
    classicCard: "VISA Classic Debit card",
    platinumCard: "VISA Platinum Debit Card",
    popular: "Popular",
    selectButton: "Select",
    compareFeatures: "Compare Features",
    featureHeader: "Feature",
    classicHeader: "Classic",
    platinumHeader: "Platinum",
    airportLounge: "Airport Lounge Access",
    domestic1PerQuarter: "Domestic 1/Quarter",
    freeAtm: "Free ATM Transactions",
    unlimited: "Unlimited",
    lockerDiscount: "Locker Rental Discount",
    womenOnly: "Women Only",
    instantDiscounts: "Instant Online Discounts",
    instantDiscountsSubtext: "(TATA CliQ, Yatra, Lifestyle & more)",
    purchaseProtection: "Purchase Protection",
    moreLink: "Click here for More",
    allOffersLink: "All Offers",
    clickHereToView: "Click here to view"
  },
  mr: {
    title: "तुमचे <strong class=\"font-bold\">उत्पादन</strong> निवडा",
    eachProductGives: "प्रत्येक उत्पादन तुम्हाला देतो:",
    commonBenefitInterest: { text: "पर्यंत", value: "७%", subtext: " वार्षिक व्याज" },
    commonBenefitMonthly: { text: "मासिक", value: "", subtext: "व्याज क्रेडिट" },
    commonBenefitZeroCharges: { text: "शून्य शुल्क", value: "", subtext: "सर्व सेवांवर" },
    ambLabel: "सरासरी मासिक शिल्लक",
    classicCard: "व्हिसा क्लासिक डेबिट कार्ड",
    platinumCard: "व्हिसा प्लॅटिनम डेबिट कार्ड",
    popular: "लोकप्रिय",
    selectButton: "निवडा",
    compareFeatures: "वैशिष्ट्यांची तुलना करा",
    featureHeader: "वैशिष्ट्य",
    classicHeader: "क्लासिक",
    platinumHeader: "प्लॅटिनम",
    airportLounge: "विमानतळ लाउंज प्रवेश",
    domestic1PerQuarter: "देशांतर्गत १/तिमाही",
    freeAtm: "मोफत ATM व्यवहार",
    unlimited: "अमर्यादित",
    lockerDiscount: "लॉकर भाड्यावर सूट",
    womenOnly: "फक्त महिलांसाठी",
    instantDiscounts: "झटपट ऑनलाइन सवलत",
    instantDiscountsSubtext: "(टाटा क्लिक, यात्रा, लाइफस्टाइल आणि बरेच काही)",
    purchaseProtection: " खरेदी संरक्षण",
    moreLink: "अधिक माहितीसाठी येथे क्लिक करा",
    allOffersLink: "सर्व ऑफर्स",
    clickHereToView: "पाहण्यासाठी येथे क्लिक करा"
  },
  hi: {
    title: "अपना <strong class=\"font-bold\">उत्पाद</strong> चुनें",
    eachProductGives: "प्रत्येक उत्पाद आपको देता है:",
    commonBenefitInterest: { text: "तक", value: "7%", subtext: "प्रति वर्ष ब्याज" },
    commonBenefitMonthly: { text: "मासिक", value: "", subtext: "ब्याज क्रेडिट" },
    commonBenefitZeroCharges: { text: "शून्य शुल्क", value: "", subtext: "सभी सेवाओं पर" },
    ambLabel: "औसत मासिक शेष",
    classicCard: "वीज़ा क्लासिक डेबिट कार्ड",
    platinumCard: "वीज़ा प्लेटिनम डेबिट कार्ड",
    popular: "लोकप्रिय",
    selectButton: "चुनें",
    compareFeatures: "सुविधाओं की तुलना करें",
    featureHeader: "सुविधा",
    classicHeader: "क्लासिक",
    platinumHeader: "प्लेटिनम",
    airportLounge: "एयरपोर्ट लाउंज एक्सेस",
    domestic1PerQuarter: "घरेलू 1/तिमाही",
    freeAtm: "मुफ़्त एटीएम लेनदेन",
    unlimited: "असीमित",
    lockerDiscount: "लॉकर किराए पर छूट",
    womenOnly: "केवल महिलाओं के लिए",
    instantDiscounts: "तुरंत ऑनलाइन छूट",
    instantDiscountsSubtext: "(टाटा क्लिक, यात्रा, लाइफस्टाइल और अधिक)",
    purchaseProtection: "खरीद सुरक्षा",
    moreLink: "अधिक जानकारी के लिए यहां क्लिक करें",
    allOffersLink: "सभी ऑफ़र्स",
    clickHereToView: "देखने के लिए यहां क्लिक करें"
  },
  kn: {
    title: "ನಿಮ್ಮ <strong class=\"font-bold\">ಉತ್ಪನ್ನವನ್ನು</strong> ಆಯ್ಕೆಮಾಡಿ",
    eachProductGives: "ಪ್ರತಿ ಉತ್ಪನ್ನವು ನಿಮಗೆ ನೀಡುತ್ತದೆ:",
    commonBenefitInterest: { text: "ವರೆಗೆ", value: "7%", subtext: "ವಾರ್ಷಿಕ ಬಡ್ಡಿ" },
    commonBenefitMonthly: { text: "ಮಾಸಿಕ", value: "", subtext: "ಬಡ್ಡಿ ಕ್ರೆಡಿಟ್" },
    commonBenefitZeroCharges: { text: "ಶೂನ್ಯ ಶುಲ್ಕಗಳು", value: "", subtext: "ಎಲ್ಲಾ ಸೇವೆಗಳ ಮೇಲೆ" },
    ambLabel: "ಸರಾಸರಿ ಮಾಸಿಕ ಬಾಕಿ",
    classicCard: "ವೀಸಾ ಕ್ಲಾಸಿಕ್ ಡೆಬಿಟ್ ಕಾರ್ಡ್",
    platinumCard: "ವೀಸಾ ಪ್ಲಾಟಿನಂ ಡೆಬಿಟ್ ಕಾರ್ಡ್",
    popular: "ಜನಪ್ರಿಯ",
    selectButton: "ಆಯ್ಕೆಮಾಡಿ",
    compareFeatures: "ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ಹೋಲಿಕೆ ಮಾಡಿ",
    featureHeader: "ವೈಶಿಷ್ಟ್ಯ",
    classicHeader: "ಕ್ಲಾಸಿಕ್",
    platinumHeader: "ಪ್ಲಾಟಿನಂ",
    airportLounge: "ವಿಮಾನ ನಿಲ್ದಾಣದ ಲಾಂಜ್ ಪ್ರವೇಶ",
    domestic1PerQuarter: "ದೇಶೀಯ 1/ತ್ರೈಮಾಸಿಕ",
    freeAtm: "ಉಚಿತ ಎಟಿಎಂ ವಹಿವಾಟುಗಳು",
    unlimited: "ಅನಿಯಮಿತ",
    lockerDiscount: "ಲಾಕರ್ ಬಾಡಿಗೆ ರಿಯಾಯಿತಿ",
    womenOnly: "ಮಹಿಳೆಯರಿಗೆ ಮಾತ್ರ",
    instantDiscounts: "ತಕ್ಷಣದ ಆನ್‌ಲೈನ್ ರಿಯಾಯಿತಿಗಳು",
    instantDiscountsSubtext: "(ಟಾಟಾ ಕ್ಲಿಕ್, ಯಾತ್ರಾ, ಲೈಫ್‌ಸ್ಟೈಲ್ ಮತ್ತು ಇನ್ನಷ್ಟು)",
    purchaseProtection: "ಖರೀದಿ ರಕ್ಷಣೆ",
    moreLink: "ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ",
    allOffersLink: "ಎಲ್ಲಾ ಕೊಡುಗೆಗಳು",
    clickHereToView: "ವೀಕ್ಷಿಸಲು ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ"
  },
  ta: {
    title: "உங்கள் <strong class=\"font-bold\">தயாரிப்பைத்</strong> தேர்ந்தெடுக்கவும்",
    eachProductGives: "ஒவ்வொரு தயாரிப்பும் உங்களுக்கு வழங்குகிறது:",
    commonBenefitInterest: { text: "வரை", value: "7%", subtext: "ஆண்டுக்கு வட்டி" },
    commonBenefitMonthly: { text: "மாதாந்திரம்", value: "", subtext: "வட்டி வரவு" },
    commonBenefitZeroCharges: { text: "பூஜ்ஜிய கட்டணங்கள்", value: "", subtext: "அனைத்து சேவைகளிலும்" },
    ambLabel: "சராசரி மாதாந்திர இருப்பு",
    classicCard: "விசா கிளாசிக் டெபிட் கார்டு",
    platinumCard: "விசா பிளாட்டினம் டெபிட் கார்டு",
    popular: "பிரபலமானது",
    selectButton: "தேர்ந்தெடு",
    compareFeatures: "அம்சங்களை ஒப்பிடுக",
    featureHeader: "அம்சம்",
    classicHeader: "கிளாசிக்",
    platinumHeader: "பிளாட்டினம்",
    airportLounge: "விமான நிலைய ஓய்வறை அணுகல்",
    domestic1PerQuarter: "உள்நாட்டு 1/காலாண்டு",
    freeAtm: "இலவச ஏடிஎம் பரிவர்த்தனைகள்",
    unlimited: "வரம்பற்றவை",
    lockerDiscount: "லாக்கர் வாடகை தள்ளுபடி",
    womenOnly: "பெண்களுக்கு மட்டும்",
    instantDiscounts: "உடனடி ஆன்லைன் தள்ளுபடிகள்",
    instantDiscountsSubtext: "(டாடா கிளிக், யாத்ரா, லைஃப்ஸ்டைல் மற்றும் பல)",
    purchaseProtection: "கொள்முதல் பாதுகாப்பு",
    moreLink: "மேலும் அறிய இங்கே கிளிக் செய்யவும்",
    allOffersLink: "அனைத்து சலுகைகளும்",
    clickHereToView: "பார்க்க இங்கே கிளிக் செய்யவும்"
  },
  bn: {
    title: "আপনার <strong class=\"font-bold\">পণ্য</strong> নির্বাচন করুন",
    eachProductGives: "প্রতিটি পণ্য আপনাকে দেয়:",
    commonBenefitInterest: { text: "পর্যন্ত", value: "৭%", subtext: "বার্ষিক সুদ" },
    commonBenefitMonthly: { text: "মাসিক", value: "", subtext: "সুদ ক্রেডিট" },
    commonBenefitZeroCharges: { text: "শূন্য চার্জ", value: "", subtext: "সমস্ত পরিষেবাতে" },
    ambLabel: "গড় মাসিক ব্যালেন্স",
    classicCard: "ভিসা ক্লাসিক ডেবিট কার্ড",
    platinumCard: "ভিসা প্ল্যাটিনাম ডেবিট কার্ড",
    popular: "জনপ্রিয়",
    selectButton: "নির্বাচন করুন",
    compareFeatures: "বৈশিষ্ট্য তুলনা করুন",
    featureHeader: "বৈশিষ্ট্য",
    classicHeader: "ক্লাসিক",
    platinumHeader: "প্ল্যাটিনাম",
    airportLounge: "বিমানবন্দর লাউঞ্জ অ্যাক্সেস",
    domestic1PerQuarter: "দেশীয় ১/ত্রৈমাসিক",
    freeAtm: "বিনামূল্যে এটিএম লেনদেন",
    unlimited: "সীমাহীন",
    lockerDiscount: "লকার ভাড়া ছাড়",
    womenOnly: "শুধুমাত্র মহিলাদের জন্য",
    instantDiscounts: "তাত্ক্ষণিক অনলাইন ডিসকাউন্ট",
    instantDiscountsSubtext: "(টাটা ক্লিক, যাত্রা, লাইফস্টাইল এবং আরও অনেক)",
    purchaseProtection: "ক্রয় সুরক্ষা",
    moreLink: "আরও জানতে এখানে ক্লিক করুন",
    allOffersLink: "সব অফার",
    clickHereToView: "দেখতে এখানে ক্লিক করুন"
  },
  gu: {
    title: "તમારું <strong class=\"font-bold\">ઉત્પાદન</strong> પસંદ કરો",
    eachProductGives: "દરેક ઉત્પાદન તમને આપે છે:",
    commonBenefitInterest: { text: "સુધી", value: "7%", subtext: "વાર્ષિક વ્યાજ" },
    commonBenefitMonthly: { text: "માસિક", value: "", subtext: "વ્યાજ જમા" },
    commonBenefitZeroCharges: { text: "શૂન્ય શુલ્ક", value: "", subtext: "બધી સેવાઓ પર" },
    ambLabel: "સરેરાશ માસિક બેલેન્સ",
    classicCard: "વિઝા ક્લાસિક ડેબિટ કાર્ડ",
    platinumCard: "વિઝા પ્લેટિનમ ડેબિટ કાર્ડ",
    popular: "લોકપ્રિય",
    selectButton: "પસંદ કરો",
    compareFeatures: "સુવિધાઓની તુલના કરો",
    featureHeader: "સુવિધા",
    classicHeader: "ક્લાસિક",
    platinumHeader: "પ્લેટિનમ",
    airportLounge: "એરપોર્ટ લાઉન્જ એક્સેસ",
    domestic1PerQuarter: "ઘરેલું 1/ત્રિમાસિક",
    freeAtm: "મફત એટીએમ વ્યવહારો",
    unlimited: "અમર્યાદિત",
    lockerDiscount: "લોકર ભાડામાં છૂટ",
    womenOnly: "ફક્ત મહિલાઓ માટે",
    instantDiscounts: "ત્વરિત ઓનલાઈન ડિસ્કાઉન્ટ",
    instantDiscountsSubtext: "(ટાટા ક્લિક, યાત્રા, લાઈફસ્ટાઈલ અને વધુ)",
    purchaseProtection: "ખરીદી સુરક્ષા",
    moreLink: "વધુ માટે અહીં ક્લિક કરો",
    allOffersLink: "બધી ઓફરો",
    clickHereToView: "જોવા માટે અહીં ક્લિક કરો"
  }
};

const productsData = {
  en: [
    { id: "CLASSIC_F", name: "Classic", amb: "₹10,000", cardTypeKey: "classicCard", popular: false },
    { id: "PLATINUM_F", name: "Platinum", amb: "₹25,000", cardTypeKey: "platinumCard", popular: true },
  ],
   mr: [
    { id: "CLASSIC_F", name: "क्लासिक", amb: "₹१०,०००", cardTypeKey: "classicCard", popular: false },
    { id: "PLATINUM_F", name: "प्लॅटिनम", amb: "₹२५,०००", cardTypeKey: "platinumCard", popular: true },
  ],
  hi: [
    { id: "CLASSIC_F", name: "क्लासिक", amb: "₹10,000", cardTypeKey: "classicCard", popular: false },
    { id: "PLATINUM_F", name: "प्लेटिनम", amb: "₹25,000", cardTypeKey: "platinumCard", popular: true },
  ],
  kn: [
    { id: "CLASSIC_F", name: "ಕ್ಲಾಸಿಕ್", amb: "₹10,000", cardTypeKey: "classicCard", popular: false },
    { id: "PLATINUM_F", name: "ಪ್ಲಾಟಿನಂ", amb: "₹25,000", cardTypeKey: "platinumCard", popular: true },
  ],
  ta: [
    { id: "CLASSIC_F", name: "கிளாசிக்", amb: "₹10,000", cardTypeKey: "classicCard", popular: false },
    { id: "PLATINUM_F", name: "பிளாட்டினம்", amb: "₹25,000", cardTypeKey: "platinumCard", popular: true },
  ],
  bn: [
    { id: "CLASSIC_F", name: "ক্লাসিক", amb: "₹10,000", cardTypeKey: "classicCard", popular: false },
    { id: "PLATINUM_F", name: "প্ল্যাটিনাম", amb: "₹25,000", cardTypeKey: "platinumCard", popular: true },
  ],
  gu: [
    { id: "CLASSIC_F", name: "ક્લાસિક", amb: "₹10,000", cardTypeKey: "classicCard", popular: false },
    { id: "PLATINUM_F", name: "પ્લેટિનમ", amb: "₹25,000", cardTypeKey: "platinumCard", popular: true },
  ]
};


const featuresConfig = [
  { nameKey: "airportLounge", icon: LoungeIcon, classic: null, platinumKey: "domestic1PerQuarter" },
  { nameKey: "freeAtm", icon: CardIconSvg, classicKey: "unlimited", platinumKey: "unlimited" },
  { nameKey: "lockerDiscount", icon: OffersIconSvg, classicKey: "womenOnly", platinumKey: "womenOnly" },
  { nameKey: "instantDiscounts", subtextKey: "instantDiscountsSubtext", icon: OffersIconSvg, classic: true, platinum: true },
  { nameKey: "purchaseProtection", icon: PurchaseProtectionIcon, classic: "₹50k", platinum: "₹1 Lakh" },
];

interface ProductSelectionSectionProps {
  languageCode: string;
}

export function ProductSelectionSection({ languageCode = 'en' }: ProductSelectionSectionProps) {
  const [selectedProduct, setSelectedProduct] = React.useState<'CLASSIC' | 'PLATINUM' | null>('PLATINUM');
  
  const lang = languageCode && sectionTranslations[languageCode] ? languageCode : 'en';
  const t = sectionTranslations[lang];
  const currentProducts = productsData[lang] || productsData.en;

  const commonBenefits = [
    { text: t.commonBenefitInterest.text, value: t.commonBenefitInterest.value, subtext: t.commonBenefitInterest.subtext, icon: VerifiedTickIcon },
    { text: t.commonBenefitMonthly.text, value: t.commonBenefitMonthly.value, subtext: t.commonBenefitMonthly.subtext, icon: VerifiedTickIcon },
    { text: t.commonBenefitZeroCharges.text, value: t.commonBenefitZeroCharges.value, subtext: t.commonBenefitZeroCharges.subtext, icon: VerifiedTickIcon },
  ];

  const handleProductChange = (value: string) => {
    const productKey = value.split('_')[0] as 'CLASSIC' | 'PLATINUM';
    const validProductKey = (productKey === 'CLASSIC' || productKey === 'PLATINUM') ? productKey : null;
    setSelectedProduct(validProductKey);
  };
  
  const radioGroupValue = React.useMemo(() => {
    if (!selectedProduct) return currentProducts.find(p => p.popular)?.id || currentProducts[0]?.id;
    const targetProduct = currentProducts.find(p => p.id.startsWith(selectedProduct));
    return targetProduct ? targetProduct.id : (currentProducts.find(p => p.popular)?.id || currentProducts[0]?.id);
  }, [selectedProduct, currentProducts]);


  return (
    <div className="container mx-auto px-4 py-6">
      <Card className="shadow-lg overflow-hidden">
        <CardHeader className="bg-muted/30">
          <CardTitle className="text-2xl font-semibold text-primary" dangerouslySetInnerHTML={{ __html: t.title }} />
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-2">
            <p className="text-sm text-muted-foreground">{t.eachProductGives}</p>
            {commonBenefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <benefit.icon className="h-5 w-5 text-primary" />
                <div className="text-sm">
                  <span className="text-foreground">{benefit.text} </span>
                  {benefit.value && <span className="font-bold text-primary">{benefit.value}</span>}
                  <span className="text-muted-foreground"> {benefit.subtext}</span>
                </div>
              </div>
            ))}
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <RadioGroup
            value={radioGroupValue}
            onValueChange={(value) => handleProductChange(value)}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
          >
            {currentProducts.map(product => (
              <Label 
                htmlFor={product.id} 
                key={product.id} 
                className={`relative block rounded-lg border-2 p-4 cursor-pointer transition-all hover:shadow-xl 
                            ${radioGroupValue === product.id ? 'border-accent ring-2 ring-accent shadow-xl' : 'border-input'}`}
              >
                {product.popular && <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-md">{t.popular}</div>}
                <RadioGroupItem value={product.id} id={product.id} className="sr-only" />
                <div className="text-center">
                  <p className="text-xl font-bold text-primary">{product.amb}</p>
                  <p className="text-sm text-muted-foreground">{t.ambLabel}</p>
                  <p className="text-sm text-muted-foreground mt-1">{t[product.cardTypeKey]}</p>
                  <div className={`mt-4 py-2 px-4 rounded-md font-semibold text-lg transition-colors 
                                  ${radioGroupValue === product.id ? 'bg-accent text-accent-foreground' : 'bg-secondary text-secondary-foreground hover:bg-muted'}`}>
                    {t.selectButton}
                  </div>
                </div>
              </Label>
            ))}
          </RadioGroup>
          
          {/* AccountBenefitSummary component removed from here */}

          <Accordion type="single" collapsible className="w-full mt-8">
            <AccordionItem value="features">
              <AccordionTrigger className="text-primary hover:text-accent font-semibold">
                {t.compareFeatures} 
              </AccordionTrigger>
              <AccordionContent>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px] text-sm mt-4">
                    <thead>
                      <tr className="border-b">
                        <th className="py-3 px-4 text-left font-semibold text-muted-foreground">{t.featureHeader}</th>
                        <th className="py-3 px-4 text-center font-semibold text-muted-foreground">{t.classicHeader}</th>
                        <th className="py-3 px-4 text-center font-semibold text-muted-foreground">{t.platinumHeader}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {featuresConfig.map(featureConf => (
                        <tr key={featureConf.nameKey} className="border-b last:border-b-0 hover:bg-muted/50 transition-colors">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <featureConf.icon className="h-6 w-6 text-primary flex-shrink-0" />
                              <div>
                                {t[featureConf.nameKey]}
                                {featureConf.subtextKey && <span className="block text-xs text-muted-foreground">{t[featureConf.subtextKey]}</span>}
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-center">
                            {typeof featureConf.classic === 'boolean' && featureConf.classic ? <Check className="h-5 w-5 text-green-600 mx-auto" /> :
                             featureConf.classic === null ? <X className="h-5 w-5 text-red-500 mx-auto" /> :
                             featureConf.classicKey ? <span className="font-medium">{t[featureConf.classicKey] || featureConf.classic}</span> :
                             <span className="font-medium">{featureConf.classic}</span>
                            }
                          </td>
                          <td className="py-3 px-4 text-center">
                             {typeof featureConf.platinum === 'boolean' && featureConf.platinum ? <Check className="h-5 w-5 text-green-600 mx-auto" /> :
                             featureConf.platinum === null ? <X className="h-5 w-5 text-red-500 mx-auto" /> :
                             featureConf.platinumKey ? <span className="font-medium">{t[featureConf.platinumKey] || featureConf.platinum}</span> :
                             <span className="font-medium">{featureConf.platinum}</span>
                            }
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
        <CardFooter className="p-6 bg-muted/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Button variant="link" className="text-sm text-accent p-0 h-auto">
            {t.moreLink} <ChevronDown className="inline h-4 w-4 ml-1" />
          </Button>
          <div className="flex items-center gap-1">
            <p className="text-sm text-muted-foreground">{t.clickHereToView}</p>
            <Button variant="link" className="text-sm text-accent p-0 h-auto">{t.allOffersLink}</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
