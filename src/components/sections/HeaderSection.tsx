
'use client';

import * as React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { IdfcLogo } from '@/components/icons/IdfcLogo';
import { Send, CreditCard, MessageCircleMore, Loader2 } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import type { TranslateTextInput } from '@/ai/flows/translate-text-flow';
import { translateText } from '@/ai/flows/translate-text-flow';

const indianStates = [
  { value: "default", label: "Select Your State", language: null, languageCode: null },
  { value: "MH", label: "Maharashtra", language: "Marathi", languageCode: "mr" },
  { value: "KA", label: "Karnataka", language: "Kannada", languageCode: "kn" },
  { value: "TN", label: "Tamil Nadu", language: "Tamil", languageCode: "ta" },
  { value: "WB", label: "West Bengal", language: "Bengali", languageCode: "bn" },
  { value: "UP", label: "Uttar Pradesh", language: "Hindi", languageCode: "hi" },
  { value: "GJ", label: "Gujarat", language: "Gujarati", languageCode: "gu" },
];

const originalHeadlinePart1 = "Enjoy Zero Fee Banking";
const originalHeadlinePart2 = "on your Savings Account";

export function HeaderSection() {
  const [selectedState, setSelectedState] = React.useState<string>("default");
  const [translatedHeadlinePart1, setTranslatedHeadlinePart1] = React.useState<string>(originalHeadlinePart1);
  const [translatedHeadlinePart2, setTranslatedHeadlinePart2] = React.useState<string>(originalHeadlinePart2);
  const [isLoadingTranslation, setIsLoadingTranslation] = React.useState<boolean>(false);
  const [translationError, setTranslationError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const currentState = indianStates.find(s => s.value === selectedState);
    if (currentState && currentState.language) {
      setIsLoadingTranslation(true);
      setTranslationError(null);

      const translateParts = async () => {
        try {
          const input1: TranslateTextInput = { textToTranslate: originalHeadlinePart1, targetLanguage: currentState.language! };
          const result1 = await translateText(input1);
          setTranslatedHeadlinePart1(result1.translatedText);

          const input2: TranslateTextInput = { textToTranslate: originalHeadlinePart2, targetLanguage: currentState.language! };
          const result2 = await translateText(input2);
          setTranslatedHeadlinePart2(result2.translatedText);

        } catch (e) {
          console.error("Error translating headline:", e);
          setTranslationError("Could not translate headline at this time.");
          // Fallback to original if translation fails
          setTranslatedHeadlinePart1(originalHeadlinePart1);
          setTranslatedHeadlinePart2(originalHeadlinePart2);
        } finally {
          setIsLoadingTranslation(false);
        }
      };
      translateParts();
    } else {
      // Reset to original if default state is selected
      setTranslatedHeadlinePart1(originalHeadlinePart1);
      setTranslatedHeadlinePart2(originalHeadlinePart2);
      setIsLoadingTranslation(false);
      setTranslationError(null);
    }
  }, [selectedState]);

  return (
    <div className="bg-card mb-6 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <IdfcLogo className="h-10 w-auto text-primary" />
          <div className="flex items-center gap-2">
            <Label htmlFor="state-select" className="text-sm text-muted-foreground whitespace-nowrap">Your State:</Label>
            <Select value={selectedState} onValueChange={setSelectedState}>
              <SelectTrigger id="state-select" className="w-[180px]">
                <SelectValue placeholder="Select State" />
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
              {isLoadingTranslation ? (
                <span className="flex items-center"><Loader2 className="mr-2 h-6 w-6 animate-spin" /> Translating...</span>
              ) : translationError ? (
                <>
                  {originalHeadlinePart1}<br />{originalHeadlinePart2}
                  <p className="text-xs text-yellow-300 mt-1">{translationError}</p>
                </>
              ) : (
                <>
                  {translatedHeadlinePart1}
                  <br />
                  {translatedHeadlinePart2}
                </>
              )}
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
