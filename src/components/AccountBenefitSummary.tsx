
// @ts-nocheck
'use client';

import type { AccountSummaryInput } from '@/ai/flows/account-summary';
import { getAccountSummary } from '@/ai/flows/account-summary';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import * as React from 'react';

const componentTranslations = {
  en: {
    aiSummaryTitle: "AI Powered Summary for {accountType}",
    loadingError: "Could not load account benefits summary at this time.",
    selectAccountPrompt: "Select an account to see its summary.",
  },
  mr: {
    aiSummaryTitle: "{accountType} साठी AI आधारित सारांश",
    loadingError: "सध्या खाते लाभांचा सारांश लोड होऊ शकला नाही.",
    selectAccountPrompt: "खात्याचा सारांश पाहण्यासाठी एक खाते निवडा.",
  },
  hi: {
    aiSummaryTitle: "{accountType} के लिए एआई संचालित सारांश",
    loadingError: "अभी खाता लाभ सारांश लोड नहीं किया जा सका।",
    selectAccountPrompt: "सारांश देखने के लिए एक खाता चुनें।",
  },
  kn: {
    aiSummaryTitle: "{accountType} ಗಾಗಿ AI ಚಾಲಿತ ಸಾರಾಂಶ",
    loadingError: "ಈ ಸಮಯದಲ್ಲಿ ಖಾತೆ ಪ್ರಯೋಜನಗಳ ಸಾರಾಂಶವನ್ನು ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.",
    selectAccountPrompt: "ಅದರ ಸಾರಾಂಶವನ್ನು ನೋಡಲು ಖಾತೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
  },
  ta: {
    aiSummaryTitle: "{accountType} க்கான AI திறனூட்டப்பட்ட சுருக்கம்",
    loadingError: "இந்த நேரத்தில் கணக்கு நன்மைகள் சுருக்கத்தை ஏற்ற முடியவில்லை.",
    selectAccountPrompt: "அதன் சுருக்கத்தைப் பார்க்க ஒரு கணக்கைத் தேர்ந்தெடுக்கவும்.",
  },
  bn: {
    aiSummaryTitle: "{accountType} এর জন্য AI চালিত সারসংক্ষেপ",
    loadingError: "এই মুহূর্তে অ্যাকাউন্ট সুবিধাগুলির সারসংক্ষেপ লোড করা যায়নি।",
    selectAccountPrompt: "এর সারসংক্ষেপ দেখতে একটি অ্যাকাউন্ট নির্বাচন করুন।",
  },
  gu: {
    aiSummaryTitle: "{accountType} માટે AI સંચાલિત સારાંશ",
    loadingError: "આ સમયે એકાઉન્ટ લાભોનો સારાંશ લોડ કરી શકાયો નથી.",
    selectAccountPrompt: "તેનો સારાંશ જોવા માટે એક એકાઉન્ટ પસંદ કરો.",
  },
};

interface AccountBenefitSummaryProps {
  accountType: 'CLASSIC' | 'PLATINUM' | null;
  languageCode: string;
}

export function AccountBenefitSummary({ accountType, languageCode = 'en' }: AccountBenefitSummaryProps) {
  const [summary, setSummary] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  
  const lang = languageCode && componentTranslations[languageCode] ? languageCode : 'en';
  const t = componentTranslations[lang];

  React.useEffect(() => {
    if (accountType) {
      setLoading(true);
      setError(null);
      setSummary(null); 

      const fetchSummary = async () => {
        try {
          const input: AccountSummaryInput = { accountType };
          const result = await getAccountSummary(input);
          setSummary(result.summary);
        } catch (e) {
          console.error("Error fetching account summary:", e);
          setError(t.loadingError);
        } finally {
          setLoading(false);
        }
      };
      fetchSummary();
    } else {
      setSummary(null);
      setLoading(false);
      setError(null);
    }
  }, [accountType, t.loadingError, languageCode]);

  if (!accountType) {
    return null; 
  }

  return (
    <Card className="mt-4 border-accent shadow-md">
      <CardHeader>
        <CardTitle className="text-lg text-accent font-headline">
          {t.aiSummaryTitle.replace('{accountType}', accountType)}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading && (
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        )}
        {error && <p className="text-destructive text-sm">{error}</p>}
        {summary && <p className="text-sm text-foreground">{summary}</p>}
        {!loading && !summary && !error && <p className="text-sm text-muted-foreground">{t.selectAccountPrompt}</p>}
      </CardContent>
    </Card>
  );
}
