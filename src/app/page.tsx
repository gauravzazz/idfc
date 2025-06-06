import { HeaderSection } from '@/components/sections/HeaderSection';
import { UserDetailsFormSection } from '@/components/sections/UserDetailsFormSection';
import { ProfessionalDetailsFormSection } from '@/components/sections/ProfessionalDetailsFormSection';
import { ProductSelectionSection } from '@/components/sections/ProductSelectionSection';
import { NomineeSelectionSection } from '@/components/sections/NomineeSelectionSection';
import { DisclaimerAndConsentSection } from '@/components/sections/DisclaimerAndConsentSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { Separator } from '@/components/ui/separator';

export default function FirstSavePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <HeaderSection />
      <main className="flex-grow">
        <UserDetailsFormSection />
        <Separator className="my-8 container mx-auto max-w-3xl" />
        <ProfessionalDetailsFormSection />
        <Separator className="my-8 container mx-auto max-w-3xl" />
        <ProductSelectionSection />
        <Separator className="my-8 container mx-auto max-w-3xl" />
        <NomineeSelectionSection />
        <Separator className="my-8 container mx-auto max-w-3xl" />
        <DisclaimerAndConsentSection />
      </main>
      <FooterSection />
    </div>
  );
}
