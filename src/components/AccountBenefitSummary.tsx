
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
    aiSummaryTitle: "[KN] AI Powered Summary for {accountType}",
    loadingError: "[KN] Could not load account benefits summary at this time.",
    selectAccountPrompt: "[KN] Select an account to see its summary.",
  },
  ta: {
    aiSummaryTitle: "[TA] AI Powered Summary for {accountType}",
    loadingError: "[TA] Could not load account benefits summary at this time.",
    selectAccountPrompt: "[TA] Select an account to see its summary.",
  },
  bn: {
    aiSummaryTitle: "[BN] AI Powered Summary for {accountType}",
    loadingError: "[BN] Could not load account benefits summary at this time.",
    selectAccountPrompt: "[BN] Select an account to see its summary.",
  },
  gu: {
    aiSummaryTitle: "[GU] AI Powered Summary for {accountType}",
    loadingError: "[GU] Could not load account benefits summary at this time.",
    selectAccountPrompt: "[GU] Select an account to see its summary.",
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
  }, [accountType, t.loadingError, languageCode]); // Added languageCode to dependency array for t updates

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
