'use client';

import * as React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ManagePayeeIcon } from '@/components/icons/ManagePayeeIcon';


export function NomineeSelectionSection() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-3">
            <ManagePayeeIcon className="h-8 w-8 text-primary" />
            <CardTitle className="text-xl font-semibold text-primary">
              Do you want to add a Nominee?
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            We strongly recommend that you add a nominee to secure deposit settlements.
          </p>
          <p className="text-sm text-muted-foreground">
            In event of account holder’s death, the amount of deposit in the account will be returned to the nominee by IDFC FIRST Bank Ltd.
          </p>
          <p className="text-sm text-muted-foreground">
            We advocate that you consider the advantages of nomination and the consequences of not nominating anyone to your account.
          </p>
          <RadioGroup defaultValue="no" className="mt-4 space-y-2" disabled>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="nomineeYes" />
              <Label htmlFor="nomineeYes" className="font-normal">Yes, Add nominee</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="nomineeNo" />
              <Label htmlFor="nomineeNo" className="font-normal">No, I do not wish to nominate anyone</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>
    </div>
  );
}
