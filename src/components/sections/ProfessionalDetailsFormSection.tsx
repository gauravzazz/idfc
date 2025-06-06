'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import * as React from 'react';

export function ProfessionalDetailsFormSection() {
  const occupations = ["Salaried", "Self-employed Professional", "Self-employed Business", "Student", "Homemaker", "Retired", "Other"];
  const incomeSources = ["Salary", "Business Income", "Investments", "Rental Income", "Pension", "Other"];

  return (
    <div className="container mx-auto px-4 py-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-primary">
            Please enter your <strong className="font-bold">professional &amp; personal details</strong>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form id="professionalPersonalDetailsForm" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="occupation">Occupation</Label>
                <Select name="occupation" disabled>
                  <SelectTrigger id="occupation" aria-label="Occupation">
                    <SelectValue placeholder="Select occupation" />
                  </SelectTrigger>
                  <SelectContent>
                    {occupations.map(opt => <SelectItem key={opt} value={opt.toLowerCase().replace(/\s+/g, '-')}>{opt}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="sourceOfIncome">Source of income</Label>
                <Select name="sourceOfIncome" disabled>
                  <SelectTrigger id="sourceOfIncome" aria-label="Source of income">
                    <SelectValue placeholder="Select source of income" />
                  </SelectTrigger>
                  <SelectContent>
                    {incomeSources.map(opt => <SelectItem key={opt} value={opt.toLowerCase().replace(/\s+/g, '-')}>{opt}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="grossAnualIncome">Gross annual income in Rupees (₹)</Label>
                <Input id="grossAnualIncome" name="grossAnualIncome" type="text" placeholder="Enter annual income" disabled maxLength={15} />
              </div>
              <div>
                <Label htmlFor="motherFullName">Mother’s full name (e.g. Lata Singh)</Label>
                <Input id="motherFullName" name="motherFullName" type="text" placeholder="Enter mother's full name" disabled maxLength={41} />
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

// Minimal Card components to avoid full import if not needed elsewhere in this specific response
// In a real app, these would come from @/components/ui/card
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props} />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props} />
));
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
));
CardContent.displayName = "CardContent";
