// @ts-nocheck
'use client';

import * as React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ManagePayeeIcon } from '@/components/icons/ManagePayeeIcon';

const sectionTranslations = {
  en: {
    title: "Do you want to add a Nominee?",
    recommendation: "We strongly recommend that you add a nominee to secure deposit settlements.",
    explanation: "In event of account holder’s death, the amount of deposit in the account will be returned to the nominee by IDFC FIRST Bank Ltd.",
    advocate: "We advocate that you consider the advantages of nomination and the consequences of not nominating anyone to your account.",
    yesNominee: "Yes, Add nominee",
    noNominee: "No, I do not wish to nominate anyone",
  },
  mr: {
    title: "तुम्हाला नॉमिनी जोडायचा आहे का?",
    recommendation: "आम्ही जोरदार शिफारस करतो की तुम्ही ठेव सेटलमेंट सुरक्षित करण्यासाठी नॉमिनी जोडा.",
    explanation: "खातेधारकाच्या मृत्यूनंतर, खात्यातील ठेव रक्कम IDFC FIRST Bank Ltd द्वारे नॉमिनीला परत केली जाईल.",
    advocate: "आम्ही शिफारस करतो की तुम्ही नामांकनाचे फायदे आणि तुमच्या खात्यात कोणालाही नॉमिनेट न करण्याचे परिणाम विचारात घ्या.",
    yesNominee: "होय, नॉमिनी जोडा",
    noNominee: "नाही, मला कोणालाही नॉमिनेट करायचे नाही",
  },
  hi: {
    title: "क्या आप नॉमिनी जोड़ना चाहते हैं?",
    recommendation: "हम दृढ़ता से अनुशंसा करते हैं कि आप जमा निपटान सुरक्षित करने के लिए एक नॉमिनी जोड़ें।",
    explanation: "खाताधारक की मृत्यु की स्थिति में, खाते में जमा राशि IDFC FIRST Bank Ltd द्वारा नॉमिनी को वापस कर दी जाएगी।",
    advocate: "हम सलाह देते हैं कि आप नामांकन के लाभों और अपने खाते में किसी को नामांकित न करने के परिणामों पर विचार करें।",
    yesNominee: "हाँ, नॉमिनी जोड़ें",
    noNominee: "नहीं, मैं किसी को नामांकित नहीं करना चाहता",
  },
};

interface NomineeSelectionSectionProps {
  languageCode: string;
}

export function NomineeSelectionSection({ languageCode = 'en' }: NomineeSelectionSectionProps) {
  const lang = languageCode && sectionTranslations[languageCode] ? languageCode : 'en';
  const t = sectionTranslations[lang];

  return (
    <div className="container mx-auto px-4 py-6">
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-3">
            <ManagePayeeIcon className="h-8 w-8 text-primary" />
            <CardTitle className="text-xl font-semibold text-primary">
              {t.title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            {t.recommendation}
          </p>
          <p className="text-sm text-muted-foreground">
            {t.explanation}
          </p>
          <p className="text-sm text-muted-foreground">
            {t.advocate}
          </p>
          <RadioGroup defaultValue="no" className="mt-4 space-y-2" disabled>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="nomineeYes" />
              <Label htmlFor="nomineeYes" className="font-normal">{t.yesNominee}</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="nomineeNo" />
              <Label htmlFor="nomineeNo" className="font-normal">{t.noNominee}</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>
    </div>
  );
}
