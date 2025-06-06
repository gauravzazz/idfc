
// @ts-nocheck
'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import * as React from 'react';

const occupationsList = {
  en: ["Salaried", "Self-employed Professional", "Self-employed Business", "Student", "Homemaker", "Retired", "Other"],
  mr: ["पगारदार", "स्वयंरोजगार व्यावसायिक", "स्वयंरोजगार व्यवसाय", "विद्यार्थी", "गृहिणी", "निवृत्त", "इतर"],
  hi: ["वेतनभोगी", "स्व-नियोजित पेशेवर", "स्व-नियोजित व्यवसाय", "छात्र", "गृहिणी", "सेवानिवृत्त", "अन्य"],
  kn: ["ಸಂಬಳದಾರ", "ಸ್ವಯಂ ಉದ್ಯೋಗಿ ವೃತ್ತಿಪರ", "ಸ್ವಯಂ ಉದ್ಯೋಗಿ ವ್ಯಾಪಾರ", "ವಿದ್ಯಾರ್ಥಿ", "ಗೃಹಿಣಿ", "ನಿವೃತ್ತ", "ಇತರೆ"],
  ta: ["சம்பளதாரர்", "சுயதொழில் நிபுணர்", "சுயதொழில் வணிகம்", "மாணவர்", "இல்லத்தரசி", "ஓய்வு பெற்றவர்", "மற்றவை"],
  bn: ["বেতনভোগী", "স্ব-নিযুক্ত পেশাদার", "স্ব-নিযুক্ত ব্যবসা", "ছাত্র", "গৃহকর্ত্রী", "অবসরপ্রাপ্ত", "অন্যান্য"],
  gu: ["પગારદાર", "સ્વ-રોજગાર વ્યવસાયિક", "સ્વ-રોજગાર વેપાર", "વિદ્યાર્થી", "ગૃહિણી", "નિવૃત્ત", "અન્ય"],
};

const incomeSourcesList = {
  en: ["Salary", "Business Income", "Investments", "Rental Income", "Pension", "Other"],
  mr: ["पगार", "व्यवसाय उत्पन्न", "गुंतवणूक", "भाडे उत्पन्न", "पेन्शन", "इतर"],
  hi: ["वेतन", "व्यापार आय", "निवेश", "किराये की आय", "पेंशन", "अन्य"],
  kn: ["ಸಂಬಳ", "ವ್ಯಾಪಾರ ಆದಾಯ", "ಹೂಡಿಕೆಗಳು", "ಬಾಡಿಗೆ ಆದಾಯ", "ಪಿಂಚಣಿ", "ಇತರೆ"],
  ta: ["சம்பளம்", "வணிக வருமானம்", "முதலீடுகள்", "வாடகை வருமானம்", "ஓய்வூதியம்", "மற்றவை"],
  bn: ["বেতন", "ব্যবসার আয়", "বিনিয়োগ", "ভাড়া আয়", "পেনশন", "অন্যান্য"],
  gu: ["પગાર", "ધંધાકીય આવક", "રોકાણ", "ભાડાની આવક", "પેન્શન", "અન્ય"],
};

const sectionTranslations = {
  en: {
    title: "Please enter your <strong class=\"font-bold\">professional &amp; personal details</strong>",
    occupationLabel: "Occupation",
    occupationPlaceholder: "Select occupation",
    incomeSourceLabel: "Source of income",
    incomeSourcePlaceholder: "Select source of income",
    annualIncomeLabel: "Gross annual income in Rupees (₹)",
    annualIncomePlaceholder: "Enter annual income",
    motherNameLabel: "Mother’s full name (e.g. Lata Singh)",
    motherNamePlaceholder: "Enter mother's full name",
  },
  mr: {
    title: "कृपया तुमचे <strong class=\"font-bold\">व्यावसायिक आणि वैयक्तिक तपशील</strong> प्रविष्ट करा",
    occupationLabel: "व्यवसाय",
    occupationPlaceholder: "व्यवसाय निवडा",
    incomeSourceLabel: "उत्पन्नाचा स्रोत",
    incomeSourcePlaceholder: "उत्पन्नाचा स्रोत निवडा",
    annualIncomeLabel: "एकूण वार्षिक उत्पन्न रुपयांमध्ये (₹)",
    annualIncomePlaceholder: "वार्षिक उत्पन्न प्रविष्ट करा",
    motherNameLabel: "आईचे पूर्ण नाव (उदा. लता सिंग)",
    motherNamePlaceholder: "आईचे पूर्ण नाव प्रविष्ट करा",
  },
  hi: {
    title: "कृपया अपना <strong class=\"font-bold\">पेशेवर और व्यक्तिगत विवरण</strong> दर्ज करें",
    occupationLabel: "पेशा",
    occupationPlaceholder: "पेशा चुनें",
    incomeSourceLabel: "आय का स्रोत",
    incomeSourcePlaceholder: "आय का स्रोत चुनें",
    annualIncomeLabel: "सकल वार्षिक आय रुपये में (₹)",
    annualIncomePlaceholder: "वार्षिक आय दर्ज करें",
    motherNameLabel: "माँ का पूरा नाम (जैसे लता सिंह)",
    motherNamePlaceholder: "माँ का पूरा नाम दर्ज करें",
  },
  kn: {
    title: "ದಯವಿಟ್ಟು ನಿಮ್ಮ <strong class=\"font-bold\">ವೃತ್ತಿಪರ ಮತ್ತು ವೈಯಕ್ತಿಕ ವಿವರಗಳನ್ನು</strong> ನಮೂದಿಸಿ",
    occupationLabel: "ಉದ್ಯೋಗ",
    occupationPlaceholder: "ಉದ್ಯೋಗವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    incomeSourceLabel: "ಆದಾಯದ ಮೂಲ",
    incomeSourcePlaceholder: "ಆದಾಯದ ಮೂಲವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    annualIncomeLabel: "ಒಟ್ಟು ವಾರ್ಷಿಕ ಆದಾಯ ರೂಪಾಯಿಗಳಲ್ಲಿ (₹)",
    annualIncomePlaceholder: "ವಾರ್ಷಿಕ ಆದಾಯವನ್ನು ನಮೂದಿಸಿ",
    motherNameLabel: "ತಾಯಿಯ ಪೂರ್ಣ ಹೆಸರು (ಉದಾ. ಲತಾ ಸಿಂಗ್)",
    motherNamePlaceholder: "ತಾಯಿಯ ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",
  },
  ta: {
    title: "உங்கள் <strong class=\"font-bold\">தொழில்முறை மற்றும் தனிப்பட்ட விவரங்களை</strong> உள்ளிடவும்",
    occupationLabel: "தொழில்",
    occupationPlaceholder: "தொழிலைத் தேர்ந்தெடுக்கவும்",
    incomeSourceLabel: "வருமான ஆதாரம்",
    incomeSourcePlaceholder: "வருமான ஆதாரத்தைத் தேர்ந்தெடுக்கவும்",
    annualIncomeLabel: "மொத்த ஆண்டு வருமானம் ரூபாயில் (₹)",
    annualIncomePlaceholder: "ஆண்டு வருமானத்தை உள்ளிடவும்",
    motherNameLabel: "தாயின் முழுப்பெயர் (எ.கா. லதா சிங்)",
    motherNamePlaceholder: "தாயின் முழுப்பெயரை உள்ளிடவும்",
  },
  bn: {
    title: "অনুগ্রহ করে আপনার <strong class=\"font-bold\">পেশাগত ও ব্যক্তিগত বিবরণ</strong> লিখুন",
    occupationLabel: "পেশা",
    occupationPlaceholder: "পেশা নির্বাচন করুন",
    incomeSourceLabel: "আয়ের উৎস",
    incomeSourcePlaceholder: "আয়ের উৎস নির্বাচন করুন",
    annualIncomeLabel: "মোট বার্ষিক আয় রুপিতে (₹)",
    annualIncomePlaceholder: "বার্ষিক আয় লিখুন",
    motherNameLabel: "মায়ের পুরো নাম (যেমন লতা সিং)",
    motherNamePlaceholder: "মায়ের পুরো নাম লিখুন",
  },
  gu: {
    title: "કૃપા કરીને તમારી <strong class=\"font-bold\">વ્યવસાયિક અને વ્યક્તિગત વિગતો</strong> દાખલ કરો",
    occupationLabel: "વ્યવસાય",
    occupationPlaceholder: "વ્યવસાય પસંદ કરો",
    incomeSourceLabel: "આવકનો સ્ત્રોત",
    incomeSourcePlaceholder: "આવકનો સ્ત્રોત પસંદ કરો",
    annualIncomeLabel: "કુલ વાર્ષિક આવક રૂપિયામાં (₹)",
    annualIncomePlaceholder: "વાર્ષિક આવક દાખલ કરો",
    motherNameLabel: "માતાનું પૂરું નામ (દા.ત. લતા સિંહ)",
    motherNamePlaceholder: "માતાનું પૂરું નામ દાખલ કરો",
  },
};

interface ProfessionalDetailsFormSectionProps {
  languageCode: string;
}

export function ProfessionalDetailsFormSection({ languageCode = 'en' }: ProfessionalDetailsFormSectionProps) {
  const lang = languageCode && sectionTranslations[languageCode] ? languageCode : 'en';
  const t = sectionTranslations[lang];
  const currentOccupations = occupationsList[lang] || occupationsList.en;
  const currentIncomeSources = incomeSourcesList[lang] || incomeSourcesList.en;

  return (
    <div className="container mx-auto px-4 py-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-primary" dangerouslySetInnerHTML={{ __html: t.title }} />
        </CardHeader>
        <CardContent>
          <form id="professionalPersonalDetailsForm" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="occupation">{t.occupationLabel}</Label>
                <Select name="occupation" disabled>
                  <SelectTrigger id="occupation" aria-label={t.occupationLabel}>
                    <SelectValue placeholder={t.occupationPlaceholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {currentOccupations.map(opt => <SelectItem key={opt} value={opt.toLowerCase().replace(/\s+/g, '-')}>{opt}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="sourceOfIncome">{t.incomeSourceLabel}</Label>
                <Select name="sourceOfIncome" disabled>
                  <SelectTrigger id="sourceOfIncome" aria-label={t.incomeSourceLabel}>
                    <SelectValue placeholder={t.incomeSourcePlaceholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {currentIncomeSources.map(opt => <SelectItem key={opt} value={opt.toLowerCase().replace(/\s+/g, '-')}>{opt}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="grossAnualIncome">{t.annualIncomeLabel}</Label>
                <Input id="grossAnualIncome" name="grossAnualIncome" type="text" placeholder={t.annualIncomePlaceholder} disabled maxLength={15} />
              </div>
              <div>
                <Label htmlFor="motherFullName">{t.motherNameLabel}</Label>
                <Input id="motherFullName" name="motherFullName" type="text" placeholder={t.motherNamePlaceholder} disabled maxLength={41} />
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

// Minimal Card components
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props} />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props} />
));
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
));
CardContent.displayName = "CardContent";
