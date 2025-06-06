
// @ts-nocheck
'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const stepperTranslations = {
  en: {
    previous: "Previous",
    next: "Next",
  },
  mr: {
    previous: "मागे",
    next: "पुढे",
  },
  hi: {
    previous: "पिछला",
    next: "अगला",
  },
  kn: {
    previous: "ಹಿಂದಿನದು",
    next: "ಮುಂದಿನದು",
  },
  ta: {
    previous: "முந்தையது",
    next: "அடுத்தது",
  },
  bn: {
    previous: "পূর্ববর্তী",
    next: "পরবর্তী",
  },
  gu: {
    previous: "પાછલું",
    next: "આગલું",
  },
};

interface StepperProps {
  steps: string[];
  currentStep: number;
  onStepChange: (newStep: number) => void;
  languageCode: string;
}

export function Stepper({ steps, currentStep, onStepChange, languageCode = 'en' }: StepperProps) {
  const lang = languageCode && stepperTranslations[languageCode] ? languageCode : 'en';
  const t = stepperTranslations[lang];

  const handlePrevious = () => {
    if (currentStep > 0) {
      onStepChange(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      onStepChange(currentStep + 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-4 mb-6">
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        {steps.map((label, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;

          return (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center border-2 text-sm font-medium transition-all duration-300 ease-in-out",
                    isActive ? "bg-accent text-accent-foreground border-accent" :
                    isCompleted ? "bg-green-500 text-white border-green-500" :
                    "bg-muted text-muted-foreground border-input"
                  )}
                >
                  {isCompleted ? <Check size={16} /> : index + 1}
                </div>
                <p
                  className={cn(
                    "text-xs mt-1 transition-colors duration-300 ease-in-out",
                    isActive ? "text-accent font-semibold" :
                    isCompleted ? "text-green-600" :
                    "text-muted-foreground"
                  )}
                >
                  {label}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className={cn(
                  "flex-1 h-0.5 transition-colors duration-300 ease-in-out mx-1",
                  index < currentStep ? "bg-green-500" : "bg-border"
                )} />
              )}
            </React.Fragment>
          );
        })}
      </div>
      <div className="flex justify-between mt-4">
        <Button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          variant="outline"
        >
          <ChevronLeft size={18} className="mr-1" />
          {t.previous}
        </Button>
        <Button
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
          variant="outline"
        >
          {t.next}
          <ChevronRight size={18} className="ml-1" />
        </Button>
      </div>
    </div>
  );
}
