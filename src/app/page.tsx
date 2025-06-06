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

// Define initial language. 'en' for English or could be from browser/user preference.
const initialLanguageCode = 'en';

export default function FirstSavePage() {
  const [currentLanguageCode, setCurrentLanguageCode] = React.useState<string>(initialLanguageCode);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <HeaderSection
        currentLanguageCode={currentLanguageCode}
        setCurrentLanguageCode={setCurrentLanguageCode}
      />
      <main className="flex-grow">
        <UserDetailsFormSection languageCode={currentLanguageCode} />
        <Separator className="my-8 container mx-auto max-w-3xl" />
        <ProfessionalDetailsFormSection languageCode={currentLanguageCode} />
        <Separator className="my-8 container mx-auto max-w-3xl" />
        <ProductSelectionSection languageCode={currentLanguageCode} />
        <Separator className="my-8 container mx-auto max-w-3xl" />
        <NomineeSelectionSection languageCode={currentLanguageCode} />
        <Separator className="my-8 container mx-auto max-w-3xl" />
        <DisclaimerAndConsentSection languageCode={currentLanguageCode} />
      </main>
      <FooterSection />
    </div>
  );
}
