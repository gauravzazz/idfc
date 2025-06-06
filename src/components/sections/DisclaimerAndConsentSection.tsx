// @ts-nocheck
'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Flag } from 'lucide-react';

const sectionTranslations = {
  en: {
    disclaimerTitle: "Disclaimer",
    kycConfirmation: "I confirm that <strong>I will complete full KYC within 30 days.</strong> In case of failure in doing so, bank reserves a right to initiate closure of my savings account.",
    termsConsentLabel: "I accept all <Button variant=\"link\" class=\"text-accent p-0 h-auto inline-block\">terms &amp; conditions</Button> related to IDFC FIRST Bank and confirm that I am citizen of only India, born in India and a tax resident of India only.",
    proceedButton: "Proceed to open account",
  },
  mr: {
    disclaimerTitle: "अस्वीकरण",
    kycConfirmation: "मी पुष्टी करतो की <strong>मी ३० दिवसांच्या आत संपूर्ण केवायसी पूर्ण करेन.</strong> असे करण्यात अयशस्वी झाल्यास, बँक माझे बचत खाते बंद करण्याचा अधिकार राखून ठेवते.",
    termsConsentLabel: "मी IDFC FIRST बँकेशी संबंधित सर्व <Button variant=\"link\" class=\"text-accent p-0 h-auto inline-block\">अटी आणि नियम</Button> स्वीकारतो आणि पुष्टी करतो की मी फक्त भारताचा नागरिक आहे, भारतात जन्मलो आहे आणि फक्त भारताचा कर रहिवासी आहे.",
    proceedButton: "खाते उघडण्यासाठी पुढे जा",
  },
  hi: {
    disclaimerTitle: "अस्वीकरण",
    kycConfirmation: "मैं पुष्टि करता हूं कि <strong>मैं 30 दिनों के भीतर पूर्ण केवाईसी पूरी करूंगा।</strong> ऐसा करने में विफल रहने पर, बैंक मेरे बचत खाते को बंद करने की प्रक्रिया शुरू करने का अधिकार सुरक्षित रखता है।",
    termsConsentLabel: "मैं आईडीएफसी फर्स्ट बैंक से संबंधित सभी <Button variant=\"link\" class=\"text-accent p-0 h-auto inline-block\">नियम और शर्तें</Button> स्वीकार करता हूं और पुष्टि करता हूं कि मैं केवल भारत का नागरिक हूं, भारत में पैदा हुआ हूं और केवल भारत का कर निवासी हूं।",
    proceedButton: "खाता खोलने के लिए आगे बढ़ें",
  },
};


interface DisclaimerAndConsentSectionProps {
  languageCode: string;
}

export function DisclaimerAndConsentSection({ languageCode = 'en' }: DisclaimerAndConsentSectionProps) {
  const lang = languageCode && sectionTranslations[languageCode] ? languageCode : 'en';
  const t = sectionTranslations[lang];

  // A bit of a hack to make the button inside Label translatable and clickable
  // For a real app, you'd use a proper i18n library that handles HTML in translations.
  const termsLabelParts = t.termsConsentLabel.split(/<Button.*?<\/Button>/);
  const termsButtonTextMatch = t.termsConsentLabel.match(/<Button.*?>(.*?)<\/Button>/);
  const termsButtonText = termsButtonTextMatch ? termsButtonTextMatch[1] : "terms & conditions";


  return (
    <div className="container mx-auto px-4 py-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-primary">{t.disclaimerTitle}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg border border-input">
            <Flag className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <p className="text-sm text-foreground" dangerouslySetInnerHTML={{ __html: t.kycConfirmation }} />
          </div>
          <div className="flex items-start space-x-3 p-4 border border-input rounded-lg">
            <Checkbox id="termsConsent" className="mt-1 flex-shrink-0" />
            <Label htmlFor="termsConsent" className="text-sm font-normal text-foreground leading-relaxed">
              {termsLabelParts[0]}
              <Button variant="link" className="text-accent p-0 h-auto inline-block mx-1">{termsButtonText}</Button>
              {termsLabelParts[1]}
            </Label>
          </div>
          <Button type="button" disabled className="w-full bg-primary hover:bg-primary/90 text-lg py-3">
            {t.proceedButton}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
