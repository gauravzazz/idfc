
// @ts-nocheck
'use client';

import * as React from 'react';
import { HeaderSection } from '@/components/sections/HeaderSection';
import { UserDetailsFormSection } from '@/components/sections/UserDetailsFormSection';
import { ProfessionalDetailsFormSection } from '@/components/sections/ProfessionalDetailsFormSection';
import { ProductSelectionSection } from '@/components/sections/ProductSelectionSection';
import { NomineeSelectionSection } from '@/components/sections/NomineeSelectionSection';
import { DisclaimerAndConsentSection } from '@/components/sections/DisclaimerAndConsentSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { Separator } from '@/components/ui/separator';
import { ChatbotWidget } from '@/components/widgets/ChatbotWidget';
import { Stepper } from '@/components/widgets/Stepper';

const initialLanguageCode = 'en';

const stepTranslations = {
  en: [
    "User Details",
    "Professional Info",
    "Select Product",
    "Add Nominee",
    "Disclaimer & Consent"
  ],
  mr: [
    "वापरकर्ता तपशील",
    "व्यावसायिक माहिती",
    "उत्पादन निवडा",
    "नॉमिनी जोडा",
    "अस्वीकरण आणि संमती"
  ],
  hi: [
    "उपयोगकर्ता विवरण",
    "पेशेवर जानकारी",
    "उत्पाद चुनें",
    "नामांकित व्यक्ति जोड़ें",
    "अस्वीकरण और सहमति"
  ],
  kn: [
    "ಬಳಕೆದಾರರ ವಿವರಗಳು",
    "ವೃತ್ತಿಪರ ಮಾಹಿತಿ",
    "ಉತ್ಪನ್ನವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    "ನಾಮಿನಿಯನ್ನು ಸೇರಿಸಿ",
    "ಹಕ್ಕು ನಿರಾಕರಣೆ ಮತ್ತು ಸಮ್ಮತಿ"
  ],
  ta: [
    "பயனர் விவரங்கள்",
    "தொழில்முறை தகவல்",
    "தயாரிப்பைத் தேர்ந்தெடுக்கவும்",
    "பரிந்துரைக்கப்பட்டவரைச் சேர்க்கவும்",
    "பொறுப்புத்துறப்பு மற்றும் ஒப்புதல்"
  ],
  bn: [
    "ব্যবহারকারীর বিবরণ",
    "পেশাগত তথ্য",
    "পণ্য নির্বাচন করুন",
    "নমিনি যোগ করুন",
    "দাবিত্যাগ এবং সম্মতি"
  ],
  gu: [
    "વપરાશકર્તા વિગતો",
    "વ્યાવસાયિક માહિતી",
    "ઉત્પાદન પસંદ કરો",
    "નોમિની ઉમેરો",
    "અસ્વીકરણ અને સંમતિ"
  ],
};

const getLocalizedSteps = (langCode: string): string[] => {
  return stepTranslations[langCode as keyof typeof stepTranslations] || stepTranslations.en;
};


export default function FirstSavePage() {
  const [currentLanguageCode, setCurrentLanguageCode] = React.useState<string>(initialLanguageCode);
  const [currentStep, setCurrentStep] = React.useState(0);

  const sectionIds = [
    "userDetailsSection",
    "professionalDetailsSection",
    "productSelectionSection",
    "nomineeSelectionSection",
    "disclaimerAndConsentSection"
  ];
  
  const formSteps = React.useMemo(() => getLocalizedSteps(currentLanguageCode), [currentLanguageCode]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <HeaderSection
        currentLanguageCode={currentLanguageCode}
        setCurrentLanguageCode={setCurrentLanguageCode}
      />
      <Stepper
        steps={formSteps}
        currentStep={currentStep}
        onStepChange={setCurrentStep}
        languageCode={currentLanguageCode}
      />
      <main className="flex-grow">
        <div id={sectionIds[0]}>
          <UserDetailsFormSection languageCode={currentLanguageCode} />
        </div>
        <Separator className="my-8 container mx-auto max-w-3xl" />
        <div id={sectionIds[1]}>
          <ProfessionalDetailsFormSection languageCode={currentLanguageCode} />
        </div>
        <Separator className="my-8 container mx-auto max-w-3xl" />
        <div id={sectionIds[2]}>
          <ProductSelectionSection languageCode={currentLanguageCode} />
        </div>
        <Separator className="my-8 container mx-auto max-w-3xl" />
        <div id={sectionIds[3]}>
          <NomineeSelectionSection languageCode={currentLanguageCode} />
        </div>
        <Separator className="my-8 container mx-auto max-w-3xl" />
        <div id={sectionIds[4]}>
          <DisclaimerAndConsentSection languageCode={currentLanguageCode} />
        </div>
      </main>
      <FooterSection />
      <ChatbotWidget languageCode={currentLanguageCode} />
    </div>
  );
}
