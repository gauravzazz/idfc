import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { IdfcLogo } from '@/components/icons/IdfcLogo';

export function HeaderSection() {
  return (
    <div className="bg-card mb-6 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <IdfcLogo className="h-10 w-auto text-primary" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div className="md:col-span-1">
            <Image
              src="https://placehold.co/400x600.png" 
              alt="Savings account offer"
              width={400}
              height={600}
              className="rounded-lg object-cover w-full h-auto max-h-[300px] md:max-h-[400px]"
              data-ai-hint="bank promotion"
            />
          </div>
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <Image
              src="https://placehold.co/600x250.png" 
              alt="Zero fee banking"
              width={600}
              height={250}
              className="rounded-lg object-cover w-full h-auto max-h-[200px] mb-2"
              data-ai-hint="finance offer"
            />
            <Button variant="link" className="text-sm text-accent p-0 h-auto">
              Click here to view Zero-Fee Banking Services
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
