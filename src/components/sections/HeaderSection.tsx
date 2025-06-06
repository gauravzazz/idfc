import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { IdfcLogo } from '@/components/icons/IdfcLogo';
import { Send, CreditCard, MessageCircleMore } from 'lucide-react';

export function HeaderSection() {
  return (
    <div className="bg-card mb-6 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <IdfcLogo className="h-10 w-auto text-primary" />
        </div>
        
        <div className="flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg">
          {/* Left Side: Main Image */}
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

          {/* Right Side: Text Content */}
          <div className="w-full md:w-2/5 bg-red-800 text-white p-6 sm:p-8 flex flex-col">
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold mb-4 sm:mb-6 leading-tight">
              Enjoy Zero Fee Banking<br />on your Savings Account
            </h2>
            <ul className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 text-sm sm:text-base">
              <li className="flex items-center gap-2 sm:gap-3">
                <Send className="h-6 w-6 sm:h-7 sm:w-7 text-yellow-400 flex-shrink-0" />
                <span>IMPS, NEFT, RTGS</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <CreditCard className="h-6 w-6 sm:h-7 sm:w-7 text-yellow-400 flex-shrink-0" />
                <span>ATM Transactions, Debit Card</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <MessageCircleMore className="h-6 w-6 sm:h-7 sm:w-7 text-yellow-400 flex-shrink-0" />
                <span>SMS Alerts & 30 more services</span>
              </li>
            </ul>
            <div className="my-3 sm:my-4">
              <Image
                src="https://placehold.co/220x110.png" 
                alt="IDFC FIRST Bank recognized as Class Apart"
                width={220}
                height={110}
                className="rounded-md"
                data-ai-hint="bank award badge"
              />
               <p className="text-xs mt-1 opacity-80">
                IDFC FIRST Bank features in Category A in the report &apos;Benchmarking reasonableness of Service Charges by Banks in India&apos;, released on 22nd May 2024.
              </p>
            </div>
            <div className="mt-auto text-right">
              <Button variant="link" className="text-xs sm:text-sm text-white hover:text-yellow-300 p-0 h-auto">
                Click here to view Zero-Fee Banking Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
