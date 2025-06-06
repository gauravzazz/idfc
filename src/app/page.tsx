
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
import { Stepper } from '@/components/widgets/Stepper'; // Added import

// Define initial language. 'en' for English or could be from browser/user preference.
const initialLanguageCode = 'en';

// Define steps for the Stepper (initially in English)
// For full localization, these would also need to come from a translation dictionary
const formSteps = [
  "User Details",
  "Professional Info",
  "Select Product",
  "Add Nominee",
  "Disclaimer & Consent"
];


export default function FirstSavePage() {
  const [currentLanguageCode, setCurrentLanguageCode] = React.useState<string>(initialLanguageCode);
  const [currentStep, setCurrentStep] = React.useState(0);

  // Simple mapping of step index to section ID for potential future scroll-to-section
  const sectionIds = [
    "userDetailsSection",
    "professionalDetailsSection",
    "productSelectionSection",
    "nomineeSelectionSection",
    "disclaimerAndConsentSection"
  ];
  
  // Placeholder for actual localized step names if needed later
  // const getLocalizedSteps = (langCode: string) => {
  //   // Example: load from a translations.json or similar
  //   return formSteps.map(step => localizedStepName(step, langCode));
  // };

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
        {/* 
          For future enhancement, one could conditionally render sections 
          or use the currentStep to scroll to the active section.
          For now, all sections are rendered, and the stepper is a visual guide.
        */}
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
