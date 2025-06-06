
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
    classApartBadgeAlt: "Class Apart Badge",
    classApartSubtext: "on select debit cards",
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
    classApartBadgeAlt: "क्लास अपार्ट बॅज",
    classApartSubtext: "निवडक डेबिट कार्डांवर",
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
    classApartBadgeAlt: "क्लास अपार्ट बैज",
    classApartSubtext: "चुनिंदा डेबिट कार्ड पर",
  },
  kn: {
    yourState: "[KN] Your State:",
    selectState: "[KN] Select State",
    headlinePart1: "[KN] Enjoy Zero Fee Banking",
    headlinePart2: "[KN] on your Savings Account",
    featureImps: "[KN] IMPS, NEFT, RTGS",
    featureAtm: "[KN] ATM Transactions, Debit Card",
    featureSms: "[KN] SMS Alerts & 30 more services",
    zeroFeeLink: "[KN] Click here to view Zero-Fee Banking Services",
    classApartBadgeAlt: "[KN] Class Apart Badge",
    classApartSubtext: "[KN] on select debit cards",
  },
  ta: {
    yourState: "[TA] Your State:",
    selectState: "[TA] Select State",
    headlinePart1: "[TA] Enjoy Zero Fee Banking",
    headlinePart2: "[TA] on your Savings Account",
    featureImps: "[TA] IMPS, NEFT, RTGS",
    featureAtm: "[TA] ATM Transactions, Debit Card",
    featureSms: "[TA] SMS Alerts & 30 more services",
    zeroFeeLink: "[TA] Click here to view Zero-Fee Banking Services",
    classApartBadgeAlt: "[TA] Class Apart Badge",
    classApartSubtext: "[TA] on select debit cards",
  },
  bn: {
    yourState: "[BN] Your State:",
    selectState: "[BN] Select State",
    headlinePart1: "[BN] Enjoy Zero Fee Banking",
    headlinePart2: "[BN] on your Savings Account",
    featureImps: "[BN] IMPS, NEFT, RTGS",
    featureAtm: "[BN] ATM Transactions, Debit Card",
    featureSms: "[BN] SMS Alerts & 30 more services",
    zeroFeeLink: "[BN] Click here to view Zero-Fee Banking Services",
    classApartBadgeAlt: "[BN] Class Apart Badge",
    classApartSubtext: "[BN] on select debit cards",
  },
  gu: {
    yourState: "[GU] Your State:",
    selectState: "[GU] Select State",
    headlinePart1: "[GU] Enjoy Zero Fee Banking",
    headlinePart2: "[GU] on your Savings Account",
    featureImps: "[GU] IMPS, NEFT, RTGS",
    featureAtm: "[GU] ATM Transactions, Debit Card",
    featureSms: "[GU] SMS Alerts & 30 more services",
    zeroFeeLink: "[GU] Click here to view Zero-Fee Banking Services",
    classApartBadgeAlt: "[GU] Class Apart Badge",
    classApartSubtext: "[GU] on select debit cards",
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
      setCurrentLanguageCode("en"); // Fallback to English
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
        // Check if the suggested state value exists in our list
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
                    {state.label} {/* State names are usually in English or recognizable */}
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
             {/* Removed Image for "Class Apart" badge */}
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
