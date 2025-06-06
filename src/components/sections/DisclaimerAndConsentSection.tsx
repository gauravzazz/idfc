'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Flag } from 'lucide-react';

export function DisclaimerAndConsentSection() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-primary">Disclaimer</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg border border-input">
            <Flag className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <p className="text-sm text-foreground">
              I confirm that <strong>I will complete full KYC within 30 days.</strong> In case of failure in doing so, bank reserves a right to initiate closure of my savings account.
            </p>
          </div>
          <div className="flex items-start space-x-3 p-4 border border-input rounded-lg">
            <Checkbox id="termsConsent" className="mt-1 flex-shrink-0" />
            <Label htmlFor="termsConsent" className="text-sm font-normal text-foreground leading-relaxed">
              I accept all <Button variant="link" className="text-accent p-0 h-auto inline-block">terms &amp; conditions</Button> related to IDFC FIRST Bank and confirm that I am citizen of only India, born in India and a tax resident of India only.
            </Label>
          </div>
          <Button type="button" disabled className="w-full bg-primary hover:bg-primary/90 text-lg py-3">
            Proceed to open account
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
