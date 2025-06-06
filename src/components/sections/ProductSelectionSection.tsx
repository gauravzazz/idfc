// @ts-nocheck
'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { VerifiedTickIcon } from '@/components/icons/VerifiedTickIcon';
import { LoungeIcon } from '@/components/icons/LoungeIcon';
import { CardIconSvg } from '@/components/icons/CardIconSvg';
import { OffersIconSvg } from '@/components/icons/OffersIconSvg';
import { PurchaseProtectionIcon } from '@/components/icons/PurchaseProtectionIcon';
import { Check, ChevronDown, Flag, X } from 'lucide-react';
import { AccountBenefitSummary } from '@/components/AccountBenefitSummary';

const commonBenefits = [
  { text: "Up to", value: "7%", subtext: "p.a. interest", icon: VerifiedTickIcon },
  { text: "Monthly", value: "", subtext: "interest credit", icon: VerifiedTickIcon },
  { text: "Zero Charges", value: "", subtext: "on all services", icon: VerifiedTickIcon },
];

const products = [
  { id: "CLASSIC_F", name: "Classic", amb: "₹10,000", cardType: "VISA Classic Debit card", popular: false },
  { id: "PLATINUM_F", name: "Platinum", amb: "₹25,000", cardType: "VISA Platinum Debit Card", popular: true },
];

const features = [
  { name: "Airport Lounge Access", icon: LoungeIcon, classic: null, platinum: "Domestic 1/Quarter" },
  { name: "Free ATM Transactions", icon: CardIconSvg, classic: "Unlimited", platinum: "Unlimited" },
  { name: "Locker Rental Discount", icon: OffersIconSvg, classic: "Women Only", platinum: "Women Only" },
  { name: "Instant Online Discounts", subtext: "(TATA CliQ, Yatra, Lifestyle & more)", icon: OffersIconSvg, classic: true, platinum: true },
  { name: "Purchase Protection", icon: PurchaseProtectionIcon, classic: "₹50k", platinum: "₹1 Lakh" },
];

export function ProductSelectionSection() {
  const [selectedProduct, setSelectedProduct] = React.useState<'CLASSIC' | 'PLATINUM' | null>('PLATINUM');
  
  const handleProductChange = (value: string) => {
    setSelectedProduct(value as 'CLASSIC' | 'PLATINUM');
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <Card className="shadow-lg overflow-hidden">
        <CardHeader className="bg-muted/30">
          <CardTitle className="text-2xl font-semibold text-primary">Select your <strong className="font-bold">product</strong></CardTitle>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-2">
            <p className="text-sm text-muted-foreground">Each product gives you:</p>
            {commonBenefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <benefit.icon className="h-5 w-5 text-primary" />
                <div className="text-sm">
                  <span className="text-foreground">{benefit.text} </span>
                  {benefit.value && <span className="font-bold text-primary">{benefit.value}</span>}
                  <span className="text-muted-foreground"> {benefit.subtext}</span>
                </div>
              </div>
            ))}
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <RadioGroup
            defaultValue="PLATINUM_F"
            onValueChange={(value) => handleProductChange(value.split('_')[0] as 'CLASSIC' | 'PLATINUM')}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
          >
            {products.map(product => (
              <Label htmlFor={product.id} key={product.id} className={`relative block rounded-lg border-2 p-4 cursor-pointer transition-all hover:shadow-xl ${selectedProduct === product.name.toUpperCase() ? 'border-accent ring-2 ring-accent shadow-xl' : 'border-input'}`}>
                {product.popular && <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-md">Popular</div>}
                <RadioGroupItem value={product.id} id={product.id} className="sr-only" />
                <div className="text-center">
                  <p className="text-xl font-bold text-primary">{product.amb}</p>
                  <p className="text-sm text-muted-foreground">Average Monthly Balance</p>
                  <p className="text-sm text-muted-foreground mt-1">{product.cardType}</p>
                  <div className={`mt-4 py-2 px-4 rounded-md font-semibold text-lg transition-colors ${selectedProduct === product.name.toUpperCase() ? 'bg-accent text-accent-foreground' : 'bg-secondary text-secondary-foreground hover:bg-muted'}`}>
                    Select
                  </div>
                </div>
              </Label>
            ))}
          </RadioGroup>
          
          <AccountBenefitSummary accountType={selectedProduct} />

          <Accordion type="single" collapsible className="w-full mt-8">
            <AccordionItem value="features">
              <AccordionTrigger className="text-primary hover:text-accent font-semibold">
                Compare Features <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
              </AccordionTrigger>
              <AccordionContent>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px] text-sm mt-4">
                    <thead>
                      <tr className="border-b">
                        <th className="py-3 px-4 text-left font-semibold text-muted-foreground">Feature</th>
                        <th className="py-3 px-4 text-center font-semibold text-muted-foreground">Classic</th>
                        <th className="py-3 px-4 text-center font-semibold text-muted-foreground">Platinum</th>
                      </tr>
                    </thead>
                    <tbody>
                      {features.map(feature => (
                        <tr key={feature.name} className="border-b last:border-b-0 hover:bg-muted/50 transition-colors">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <feature.icon className="h-6 w-6 text-primary flex-shrink-0" />
                              <div>
                                {feature.name}
                                {feature.subtext && <span className="block text-xs text-muted-foreground">{feature.subtext}</span>}
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-center">
                            {typeof feature.classic === 'boolean' && feature.classic ? <Check className="h-5 w-5 text-green-600 mx-auto" /> :
                             feature.classic === null ? <X className="h-5 w-5 text-red-500 mx-auto" /> :
                             <span className="font-medium">{feature.classic}</span>}
                          </td>
                          <td className="py-3 px-4 text-center">
                            {typeof feature.platinum === 'boolean' && feature.platinum ? <Check className="h-5 w-5 text-green-600 mx-auto" /> :
                             feature.platinum === null ? <X className="h-5 w-5 text-red-500 mx-auto" /> :
                             <span className="font-medium">{feature.platinum}</span>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
        <CardFooter className="p-6 bg-muted/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Button variant="link" className="text-sm text-accent p-0 h-auto">
            Click here for More <ChevronDown className="inline h-4 w-4 ml-1" />
          </Button>
          <div className="flex items-center gap-1">
            <p className="text-sm text-muted-foreground">Click here to view</p>
            <Button variant="link" className="text-sm text-accent p-0 h-auto">All Offers</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
