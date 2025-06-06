// @ts-nocheck
'use client';

import type { AccountSummaryInput } from '@/ai/flows/account-summary';
import { getAccountSummary } from '@/ai/flows/account-summary';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import * as React from 'react';

interface AccountBenefitSummaryProps {
  accountType: 'CLASSIC' | 'PLATINUM' | null;
}

export function AccountBenefitSummary({ accountType }: AccountBenefitSummaryProps) {
  const [summary, setSummary] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (accountType) {
      setLoading(true);
      setError(null);
      setSummary(null); // Clear previous summary

      const fetchSummary = async () => {
        try {
          const input: AccountSummaryInput = { accountType };
          const result = await getAccountSummary(input);
          setSummary(result.summary);
        } catch (e) {
          console.error("Error fetching account summary:", e);
          setError("Could not load account benefits summary at this time.");
        } finally {
          setLoading(false);
        }
      };

      // Debounce or delay if accountType changes rapidly, for now direct call
      fetchSummary();
    } else {
      setSummary(null);
      setLoading(false);
      setError(null);
    }
  }, [accountType]);

  if (!accountType) {
    return null; // Don't render anything if no account type is selected
  }

  return (
    <Card className="mt-4 border-accent shadow-md">
      <CardHeader>
        <CardTitle className="text-lg text-accent font-headline">AI Powered Summary for {accountType}</CardTitle>
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
        {!loading && !summary && !error && <p className="text-sm text-muted-foreground">Select an account to see its summary.</p>}
      </CardContent>
    </Card>
  );
}
