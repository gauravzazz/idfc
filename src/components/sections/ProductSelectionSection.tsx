// @ts-nocheck
'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { VerifiedTickIcon } from '@/components/icons/VerifiedTickIcon';
import { LoungeIcon } from '@/components/icons/LoungeIcon';
import { CardIconSvg } from '@/components/icons/CardIconSvg';
import { OffersIconSvg } from '@/components/icons/OffersIconSvg';
import { PurchaseProtectionIcon } from '@/components/icons/PurchaseProtectionIcon';
import { Check, ChevronDown, X } from 'lucide-react';
import { AccountBenefitSummary } from '@/components/AccountBenefitSummary';

const sectionTranslations = {
  en: {
    title: "Select your <strong class=\"font-bold\">product</strong>",
    eachProductGives: "Each product gives you:",
    commonBenefitInterest: { text: "Up to", value: "7%", subtext: "p.a. interest" },
    commonBenefitMonthly: { text: "Monthly", value: "", subtext: "interest credit" },
    commonBenefitZeroCharges: { text: "Zero Charges", value: "", subtext: "on all services" },
    ambLabel: "Average Monthly Balance",
    classicCard: "VISA Classic Debit card",
    platinumCard: "VISA Platinum Debit Card",
    popular: "Popular",
    selectButton: "Select",
    compareFeatures: "Compare Features",
    featureHeader: "Feature",
    classicHeader: "Classic",
    platinumHeader: "Platinum",
    airportLounge: "Airport Lounge Access",
    domestic1PerQuarter: "Domestic 1/Quarter",
    freeAtm: "Free ATM Transactions",
    unlimited: "Unlimited",
    lockerDiscount: "Locker Rental Discount",
    womenOnly: "Women Only",
    instantDiscounts: "Instant Online Discounts",
    instantDiscountsSubtext: "(TATA CliQ, Yatra, Lifestyle & more)",
    purchaseProtection: "Purchase Protection",
    moreLink: "Click here for More",
    allOffersLink: "All Offers",
    clickHereToView: "Click here to view"
  },
  mr: {
    title: "तुमचे <strong class=\"font-bold\">उत्पादन</strong> निवडा",
    eachProductGives: "प्रत्येक उत्पादन तुम्हाला देतो:",
    commonBenefitInterest: { text: "पर्यंत", value: "७%", subtext: " वार्षिक व्याज" },
    commonBenefitMonthly: { text: "मासिक", value: "", subtext: "व्याज क्रेडिट" },
    commonBenefitZeroCharges: { text: "शून्य शुल्क", value: "", subtext: "सर्व सेवांवर" },
    ambLabel: "सरासरी मासिक शिल्लक",
    classicCard: "व्हिसा क्लासिक डेबिट कार्ड",
    platinumCard: "व्हिसा प्लॅटिनम डेबिट कार्ड",
    popular: "लोकप्रिय",
    selectButton: "निवडा",
    compareFeatures: "वैशिष्ट्यांची तुलना करा",
    featureHeader: "वैशिष्ट्य",
    classicHeader: "क्लासिक",
    platinumHeader: "प्लॅटिनम",
    airportLounge: "विमानतळ लाउंज प्रवेश",
    domestic1PerQuarter: "देशांतर्गत १/तिमाही",
    freeAtm: "मोफत ATM व्यवहार",
    unlimited: "अमर्यादित",
    lockerDiscount: "लॉकर भाड्यावर सूट",
    womenOnly: "फक्त महिलांसाठी",
    instantDiscounts: "झटपट ऑनलाइन सवलत",
    instantDiscountsSubtext: "(टाटा क्लिक, यात्रा, लाइफस्टाइल आणि बरेच काही)",
    purchaseProtection: " खरेदी संरक्षण",
    moreLink: "अधिक माहितीसाठी येथे क्लिक करा",
    allOffersLink: "सर्व ऑफर्स",
    clickHereToView: "पाहण्यासाठी येथे क्लिक करा"
  },
  hi: {
    title: "अपना <strong class=\"font-bold\">उत्पाद</strong> चुनें",
    eachProductGives: "प्रत्येक उत्पाद आपको देता है:",
    commonBenefitInterest: { text: "तक", value: "7%", subtext: "प्रति वर्ष ब्याज" },
    commonBenefitMonthly: { text: "मासिक", value: "", subtext: "ब्याज क्रेडिट" },
    commonBenefitZeroCharges: { text: "शून्य शुल्क", value: "", subtext: "सभी सेवाओं पर" },
    ambLabel: "औसत मासिक शेष",
    classicCard: "वीज़ा क्लासिक डेबिट कार्ड",
    platinumCard: "वीज़ा प्लेटिनम डेबिट कार्ड",
    popular: "लोकप्रिय",
    selectButton: "चुनें",
    compareFeatures: "सुविधाओं की तुलना करें",
    featureHeader: "सुविधा",
    classicHeader: "क्लासिक",
    platinumHeader: "प्लेटिनम",
    airportLounge: "एयरपोर्ट लाउंज एक्सेस",
    domestic1PerQuarter: "घरेलू 1/तिमाही",
    freeAtm: "मुफ़्त एटीएम लेनदेन",
    unlimited: "असीमित",
    lockerDiscount: "लॉकर किराए पर छूट",
    womenOnly: "केवल महिलाओं के लिए",
    instantDiscounts: "तुरंत ऑनलाइन छूट",
    instantDiscountsSubtext: "(टाटा क्लिक, यात्रा, लाइफस्टाइल और अधिक)",
    purchaseProtection: "खरीद सुरक्षा",
    moreLink: "अधिक जानकारी के लिए यहां क्लिक करें",
    allOffersLink: "सभी ऑफ़र्स",
    clickHereToView: "देखने के लिए यहां क्लिक करें"
  }
};

const productsData = {
  en: [
    { id: "CLASSIC_F", name: "Classic", amb: "₹10,000", cardTypeKey: "classicCard", popular: false },
    { id: "PLATINUM_F", name: "Platinum", amb: "₹25,000", cardTypeKey: "platinumCard", popular: true },
  ],
   mr: [
    { id: "CLASSIC_F", name: "क्लासिक", amb: "₹१०,०००", cardTypeKey: "classicCard", popular: false },
    { id: "PLATINUM_F", name: "प्लॅटिनम", amb: "₹२५,०००", cardTypeKey: "platinumCard", popular: true },
  ],
  hi: [
    { id: "CLASSIC_F", name: "क्लासिक", amb: "₹10,000", cardTypeKey: "classicCard", popular: false },
    { id: "PLATINUM_F", name: "प्लेटिनम", amb: "₹25,000", cardTypeKey: "platinumCard", popular: true },
  ]
};


const featuresConfig = [
  { nameKey: "airportLounge", icon: LoungeIcon, classic: null, platinumKey: "domestic1PerQuarter" },
  { nameKey: "freeAtm", icon: CardIconSvg, classicKey: "unlimited", platinumKey: "unlimited" },
  { nameKey: "lockerDiscount", icon: OffersIconSvg, classicKey: "womenOnly", platinumKey: "womenOnly" },
  { nameKey: "instantDiscounts", subtextKey: "instantDiscountsSubtext", icon: OffersIconSvg, classic: true, platinum: true },
  { nameKey: "purchaseProtection", icon: PurchaseProtectionIcon, classic: "₹50k", platinum: "₹1 Lakh" },
];

interface ProductSelectionSectionProps {
  languageCode: string;
}

export function ProductSelectionSection({ languageCode = 'en' }: ProductSelectionSectionProps) {
  const [selectedProduct, setSelectedProduct] = React.useState<'CLASSIC' | 'PLATINUM' | null>('PLATINUM');
  
  const lang = languageCode && sectionTranslations[languageCode] ? languageCode : 'en';
  const t = sectionTranslations[lang];
  const currentProducts = productsData[lang] || productsData.en;

  const commonBenefits = [
    { text: t.commonBenefitInterest.text, value: t.commonBenefitInterest.value, subtext: t.commonBenefitInterest.subtext, icon: VerifiedTickIcon },
    { text: t.commonBenefitMonthly.text, value: t.commonBenefitMonthly.value, subtext: t.commonBenefitMonthly.subtext, icon: VerifiedTickIcon },
    { text: t.commonBenefitZeroCharges.text, value: t.commonBenefitZeroCharges.value, subtext: t.commonBenefitZeroCharges.subtext, icon: VerifiedTickIcon },
  ];

  const handleProductChange = (value: string) => {
    setSelectedProduct(value.split('_')[0] as 'CLASSIC' | 'PLATINUM');
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <Card className="shadow-lg overflow-hidden">
        <CardHeader className="bg-muted/30">
          <CardTitle className="text-2xl font-semibold text-primary" dangerouslySetInnerHTML={{ __html: t.title }} />
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-2">
            <p className="text-sm text-muted-foreground">{t.eachProductGives}</p>
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
            defaultValue="PLATINUM_F" // This needs to align with selectedProduct initial state's logic
            onValueChange={(value) => handleProductChange(value)}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
          >
            {currentProducts.map(product => (
              <Label htmlFor={product.id} key={product.id} className={`relative block rounded-lg border-2 p-4 cursor-pointer transition-all hover:shadow-xl ${selectedProduct === product.name.toUpperCase() ? 'border-accent ring-2 ring-accent shadow-xl' : 'border-input'}`}>
                {product.popular && <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-md">{t.popular}</div>}
                <RadioGroupItem value={product.id} id={product.id} className="sr-only" />
                <div className="text-center">
                  <p className="text-xl font-bold text-primary">{product.amb}</p>
                  <p className="text-sm text-muted-foreground">{t.ambLabel}</p>
                  <p className="text-sm text-muted-foreground mt-1">{t[product.cardTypeKey]}</p>
                  <div className={`mt-4 py-2 px-4 rounded-md font-semibold text-lg transition-colors ${selectedProduct === product.name.toUpperCase() ? 'bg-accent text-accent-foreground' : 'bg-secondary text-secondary-foreground hover:bg-muted'}`}>
                    {t.selectButton}
                  </div>
                </div>
              </Label>
            ))}
          </RadioGroup>
          
          <AccountBenefitSummary accountType={selectedProduct} languageCode={languageCode} />

          <Accordion type="single" collapsible className="w-full mt-8">
            <AccordionItem value="features">
              <AccordionTrigger className="text-primary hover:text-accent font-semibold">
                {t.compareFeatures} <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
              </AccordionTrigger>
              <AccordionContent>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px] text-sm mt-4">
                    <thead>
                      <tr className="border-b">
                        <th className="py-3 px-4 text-left font-semibold text-muted-foreground">{t.featureHeader}</th>
                        <th className="py-3 px-4 text-center font-semibold text-muted-foreground">{t.classicHeader}</th>
                        <th className="py-3 px-4 text-center font-semibold text-muted-foreground">{t.platinumHeader}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {featuresConfig.map(featureConf => (
                        <tr key={featureConf.nameKey} className="border-b last:border-b-0 hover:bg-muted/50 transition-colors">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <featureConf.icon className="h-6 w-6 text-primary flex-shrink-0" />
                              <div>
                                {t[featureConf.nameKey]}
                                {featureConf.subtextKey && <span className="block text-xs text-muted-foreground">{t[featureConf.subtextKey]}</span>}
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-center">
                            {typeof featureConf.classic === 'boolean' && featureConf.classic ? <Check className="h-5 w-5 text-green-600 mx-auto" /> :
                             featureConf.classic === null ? <X className="h-5 w-5 text-red-500 mx-auto" /> :
                             featureConf.classicKey ? <span className="font-medium">{t[featureConf.classicKey] || featureConf.classic}</span> :
                             <span className="font-medium">{featureConf.classic}</span>
                            }
                          </td>
                          <td className="py-3 px-4 text-center">
                             {typeof featureConf.platinum === 'boolean' && featureConf.platinum ? <Check className="h-5 w-5 text-green-600 mx-auto" /> :
                             featureConf.platinum === null ? <X className="h-5 w-5 text-red-500 mx-auto" /> :
                             featureConf.platinumKey ? <span className="font-medium">{t[featureConf.platinumKey] || featureConf.platinum}</span> :
                             <span className="font-medium">{featureConf.platinum}</span>
                            }
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
            {t.moreLink} <ChevronDown className="inline h-4 w-4 ml-1" />
          </Button>
          <div className="flex items-center gap-1">
            <p className="text-sm text-muted-foreground">{t.clickHereToView}</p>
            <Button variant="link" className="text-sm text-accent p-0 h-auto">{t.allOffersLink}</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
