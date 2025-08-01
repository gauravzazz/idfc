
// @ts-nocheck
'use client';

import * as React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { IdfcLogo } from '@/components/icons/IdfcLogo';
import { Send, CreditCard, MessageCircleMore } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const indianStates = [
  { value: "default", label: "Select Your State", language: null, languageCode: "en" },
  { value: "MH", label: "Maharashtra", language: "Marathi", languageCode: "mr" },
  { value: "KA", label: "Karnataka", language: "Kannada", languageCode: "kn" },
  { value: "TN", label: "Tamil Nadu", language: "Tamil", languageCode: "ta" },
  { value: "WB", label: "West Bengal", language: "Bengali", languageCode: "bn" },
  { value: "UP", label: "Uttar Pradesh", language: "Hindi", languageCode: "hi" },
  { value: "GJ", label: "Gujarat", language: "Gujarati", languageCode: "gu" },
];

const headerTranslations = {
  en: {
    yourState: "Your State:",
    selectState: "Select State",
    headlinePart1: "Enjoy Zero Fee Banking",
    headlinePart2: "on your Savings Account",
    featureImps: "IMPS, NEFT, RTGS",
    featureAtm: "ATM Transactions, Debit Card",
    featureSms: "SMS Alerts & 30 more services",
    zeroFeeLink: "Click here to view Zero-Fee Banking Services",
  },
  mr: {
    yourState: "तुमचे राज्य:",
    selectState: "राज्य निवडा",
    headlinePart1: " शून्य शुल्क बँकिंगचा आनंद घ्या",
    headlinePart2: "तुमच्या बचत खात्यावर",
    featureImps: "IMPS, NEFT, RTGS",
    featureAtm: "ATM व्यवहार, डेबिट कार्ड",
    featureSms: "SMS अलर्ट आणि ३० अधिक सेवा",
    zeroFeeLink: "शून्य-शुल्क बँकिंग सेवा पाहण्यासाठी येथे क्लिक करा",
  },
  hi: {
    yourState: "आपका राज्य:",
    selectState: "राज्य चुनें",
    headlinePart1: "शून्य शुल्क बैंकिंग का आनंद लें",
    headlinePart2: "अपने बचत खाते पर",
    featureImps: "IMPS, NEFT, RTGS",
    featureAtm: "एटीएम लेनदेन, डेबिट कार्ड",
    featureSms: "एसएमएस अलर्ट और 30 अन्य सेवाएं",
    zeroFeeLink: "शून्य-शुल्क बैंकिंग सेवाएं देखने के लिए यहां क्लिक करें",
  },
  kn: {
    yourState: "ನಿಮ್ಮ ರಾಜ್ಯ:",
    selectState: "ರಾಜ್ಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    headlinePart1: "ಶೂನ್ಯ ಶುಲ್ಕ ಬ್ಯಾಂಕಿಂಗ್ ಆನಂದಿಸಿ",
    headlinePart2: "ನಿಮ್ಮ ಉಳಿತಾಯ ಖಾತೆಯಲ್ಲಿ",
    featureImps: "IMPS, NEFT, RTGS",
    featureAtm: "ಎಟಿಎಂ ವಹಿವಾಟುಗಳು, ಡೆಬಿಟ್ ಕಾರ್ಡ್",
    featureSms: "ಎಸ್‌ಎಂಎಸ್ ಎಚ್ಚರಿಕೆಗಳು ಮತ್ತು 30 ಹೆಚ್ಚಿನ ಸೇವೆಗಳು",
    zeroFeeLink: "ಶೂನ್ಯ-ಶುಲ್ಕ ಬ್ಯಾಂಕಿಂಗ್ ಸೇವೆಗಳನ್ನು ವೀಕ್ಷಿಸಲು ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ",
  },
  ta: {
    yourState: "உங்கள் மாநிலம்:",
    selectState: "மாநிலத்தைத் தேர்ந்தெடுக்கவும்",
    headlinePart1: "கட்டணமில்லா பேங்கிங்கை அனுபவியுங்கள்",
    headlinePart2: "உங்கள் சேமிப்புக் கணக்கில்",
    featureImps: "IMPS, NEFT, RTGS",
    featureAtm: "ஏடிஎம் பரிவர்த்தனைகள், டெபிட் கார்டு",
    featureSms: "எஸ்எம்எஸ் எச்சரிக்கைகள் & 30 க்கும் மேற்பட்ட சேவைகள்",
    zeroFeeLink: "கட்டணமில்லா வங்கி சேவைகளைப் பார்க்க இங்கே கிளிக் செய்யவும்",
  },
  bn: {
    yourState: "আপনার রাজ্য:",
    selectState: "রাজ্য নির্বাচন করুন",
    headlinePart1: "শূন্য ফি ব্যাংকিং উপভোগ করুন",
    headlinePart2: "আপনার সেভিংস অ্যাকাউন্টে",
    featureImps: "IMPS, NEFT, RTGS",
    featureAtm: "এটিএম লেনদেন, ডেবিট কার্ড",
    featureSms: "এসএমএস সতর্কতা এবং ৩০টিরও বেশি পরিষেবা",
    zeroFeeLink: "শূন্য-ফি ব্যাংকিং পরিষেবাগুলি দেখতে এখানে ক্লিক করুন",
  },
  gu: {
    yourState: "તમારું રાજ્ય:",
    selectState: "રાજ્ય પસંદ કરો",
    headlinePart1: "શૂન્ય ફી બેંકિંગનો આનંદ માણો",
    headlinePart2: "તમારા બચત ખાતા પર",
    featureImps: "IMPS, NEFT, RTGS",
    featureAtm: "એટીએમ વ્યવહારો, ડેબિટ કાર્ડ",
    featureSms: "એસએમએસ એલર્ટ અને ૩0 વધુ સેવાઓ",
    zeroFeeLink: "શૂન્ય-ફી બેંકિંગ સેવાઓ જોવા માટે અહીં ક્લિક કરો",
  },
};


interface HeaderSectionProps {
  currentLanguageCode: string;
  setCurrentLanguageCode: (code: string) => void;
}

export function HeaderSection({ currentLanguageCode, setCurrentLanguageCode }: HeaderSectionProps) {
  const [selectedStateValue, setSelectedStateValue] = React.useState<string>("default");

  const handleStateChange = React.useCallback((value: string) => {
    setSelectedStateValue(value);
    const selected = indianStates.find(s => s.value === value);
    if (selected && selected.languageCode) {
      setCurrentLanguageCode(selected.languageCode);
    } else {
      setCurrentLanguageCode("en"); 
    }
  }, [setCurrentLanguageCode]);
  
  React.useEffect(() => {
    if (typeof window !== 'undefined' && navigator.language) {
      const browserLang = navigator.language.split('-')[0].toLowerCase();
      let suggestedStateValue = "default";

      if (browserLang === 'mr') suggestedStateValue = "MH";
      else if (browserLang === 'hi') suggestedStateValue = "UP";
      else if (browserLang === 'kn') suggestedStateValue = "KA";
      else if (browserLang === 'ta') suggestedStateValue = "TN";
      else if (browserLang === 'bn') suggestedStateValue = "WB";
      else if (browserLang === 'gu') suggestedStateValue = "GJ";
      
      if (suggestedStateValue !== "default") {
        const stateExists = indianStates.some(state => state.value === suggestedStateValue);
        if (stateExists) {
            handleStateChange(suggestedStateValue);
        }
      }
    }
  }, [handleStateChange]);

  const lang = currentLanguageCode && headerTranslations[currentLanguageCode] ? currentLanguageCode : 'en';
  const t = headerTranslations[lang];

  return (
    <div className="bg-card mb-6 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <IdfcLogo className="h-10 w-auto text-primary" />
          <div className="flex items-center gap-2">
            <Label htmlFor="state-select" className="text-sm text-muted-foreground whitespace-nowrap">{t.yourState}</Label>
            <Select value={selectedStateValue} onValueChange={handleStateChange}>
              <SelectTrigger id="state-select" className="w-[180px]">
                <SelectValue placeholder={t.selectState} />
              </SelectTrigger>
              <SelectContent>
                {indianStates.map(state => (
                  <SelectItem key={state.value} value={state.value}>
                    {state.label} 
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg">
          <div className="w-full md:w-3/5">
            <Image
              src="https://qa-ntb.idfcfirstbank.com/HH-ABC-Banner~9d6def.png"
              alt="Savings account offer by IDFC First Bank featuring Amitabh Bachchan"
              width={858} 
              height={536}
              className="object-cover w-full h-full"
              data-ai-hint="bank promotion celebrity"
              priority
            />
          </div>

          <div className="w-full md:w-2/5 bg-red-800 text-white p-6 sm:p-8 flex flex-col">
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold mb-4 sm:mb-6 leading-tight">
              {t.headlinePart1}
              <br />
              {t.headlinePart2}
            </h2>
            <ul className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 text-sm sm:text-base">
              <li className="flex items-center gap-2 sm:gap-3">
                <Send className="h-6 w-6 sm:h-7 sm:w-7 text-yellow-400 flex-shrink-0" />
                <span>{t.featureImps}</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <CreditCard className="h-6 w-6 sm:h-7 sm:w-7 text-yellow-400 flex-shrink-0" />
                <span>{t.featureAtm}</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <MessageCircleMore className="h-6 w-6 sm:h-7 sm:w-7 text-yellow-400 flex-shrink-0" />
                <span>{t.featureSms}</span>
              </li>
            </ul>
            <div className="mt-auto text-right">
              <Button variant="link" className="text-xs sm:text-sm text-white hover:text-yellow-300 p-0 h-auto">
                {t.zeroFeeLink}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
