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
  { value: "default", label: "Select Your State", language: null, languageCode: "en" }, // Default to English
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
    classApartText: "IDFC FIRST Bank features in Category A in the report 'Benchmarking reasonableness of Service Charges by Banks in India', released on 22nd May 2024.",
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
    classApartText: "IDFC FIRST बँकेचा 'बेंचमार्किंग रिझनेबलनेस ऑफ सर्व्हिस चार्जेस बाय बँक्स इन इंडिया' या २२ मे २०२४ रोजी प्रसिद्ध झालेल्या अहवालात 'श्रेणी A' मध्ये समावेश आहे.",
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
    classApartText: "IDFC FIRST बैंक को 'भारत में बैंकों द्वारा सेवा शुल्कों की तर्कसंगतता का बेंचमार्किंग' रिपोर्ट में श्रेणी ए में शामिल किया गया है, जो 22 मई 2024 को जारी की गई थी।",
    zeroFeeLink: "शून्य-शुल्क बैंकिंग सेवाएं देखने के लिए यहां क्लिक करें",
  },
};


interface HeaderSectionProps {
  currentLanguageCode: string;
  setCurrentLanguageCode: (code: string) => void;
}

export function HeaderSection({ currentLanguageCode, setCurrentLanguageCode }: HeaderSectionProps) {
  const [selectedStateValue, setSelectedStateValue] = React.useState<string>("default");

  const handleStateChange = (value: string) => {
    setSelectedStateValue(value);
    const selected = indianStates.find(s => s.value === value);
    if (selected && selected.languageCode) {
      setCurrentLanguageCode(selected.languageCode);
    } else {
      setCurrentLanguageCode("en"); // Fallback to English
    }
  };
  
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
              alt="Savings account offer"
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
            {/* Removed Image and paragraph for "Class Apart" badge */}
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
