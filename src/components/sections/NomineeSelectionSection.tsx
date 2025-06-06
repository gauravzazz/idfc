
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
  kn: {
    title: "ನೀವು ನಾಮಿನಿಯನ್ನು ಸೇರಿಸಲು ಬಯಸುತ್ತೀರಾ?",
    recommendation: "ಠೇವಣಿ ಇತ್ಯರ್ಥಗಳನ್ನು ಸುರಕ್ಷಿತಗೊಳಿಸಲು ನೀವು ನಾಮಿನಿಯನ್ನು ಸೇರಿಸಬೇಕೆಂದು ನಾವು ಬಲವಾಗಿ ಶಿಫಾರಸು ಮಾಡುತ್ತೇವೆ.",
    explanation: "ಖಾತೆದಾರರ ಮರಣದ ಸಂದರ್ಭದಲ್ಲಿ, ಖಾತೆಯಲ್ಲಿನ ಠೇವಣಿ ಮೊತ್ತವನ್ನು IDFC FIRST Bank Ltd ನಿಂದ ನಾಮಿನಿಗೆ ಹಿಂತಿರುಗಿಸಲಾಗುತ್ತದೆ.",
    advocate: "ನಾಮನಿರ್ದೇಶನದ ಅನುಕೂಲಗಳು ಮತ್ತು ನಿಮ್ಮ ಖಾತೆಗೆ ಯಾರನ್ನೂ ನಾಮನಿರ್ದೇಶನ ಮಾಡದಿರುವ ಪರಿಣಾಮಗಳನ್ನು ನೀವು ಪರಿಗಣಿಸಬೇಕೆಂದು ನಾವು ಪ್ರತಿಪಾದಿಸುತ್ತೇವೆ.",
    yesNominee: "ಹೌದು, ನಾಮಿನಿಯನ್ನು ಸೇರಿಸಿ",
    noNominee: "ಇಲ್ಲ, ನಾನು ಯಾರನ್ನೂ ನಾಮನಿರ್ದೇಶನ ಮಾಡಲು ಬಯಸುವುದಿಲ್ಲ",
  },
  ta: {
    title: "நீங்கள் ஒரு நியமனதாரரை சேர்க்க விரும்புகிறீர்களா?",
    recommendation: "வைப்புத்தொகை தீர்வுகளைப் பாதுகாக்க நீங்கள் ஒரு நியமனதாரரைச் சேர்க்க வேண்டும் என்று நாங்கள் கடுமையாக பரிந்துரைக்கிறோம்.",
    explanation: "கணக்குதாரரின் மரணம் ஏற்பட்டால், கணக்கில் உள்ள வைப்புத்தொகை ஐடிஎஃப்சி ஃபர்ஸ்ட் பேங்க் லிமிடெட் மூலம் நியமனதாரருக்குத் திருப்பித் தரப்படும்.",
    advocate: "நியமனத்தின் நன்மைகள் மற்றும் உங்கள் கணக்கிற்கு யாரையும் நியமனம் செய்யாததன் விளைவுகளை நீங்கள் கருத்தில் கொள்ள வேண்டும் என்று நாங்கள் பரிந்துரைக்கிறோம்.",
    yesNominee: "ஆம், நியமனதாரரைச் சேர்க்கவும்",
    noNominee: "இல்லை, நான் யாரையும் நியமனம் செய்ய விரும்பவில்லை",
  },
  bn: {
    title: "আপনি কি একজন নমিনি যোগ করতে চান?",
    recommendation: "আমানত নিষ্পত্তি সুরক্ষিত করার জন্য আমরা আপনাকে একজন নমিনি যোগ করার জন্য দৃঢ়ভাবে সুপারিশ করছি।",
    explanation: "অ্যাকাউন্টধারীর মৃত্যুর ক্ষেত্রে, অ্যাকাউন্টের আমানতের পরিমাণ আইডিএফসি ফার্স্ট ব্যাংক লিমিটেড দ্বারা নমিনিকে ফেরত দেওয়া হবে।",
    advocate: "আমরা পরামর্শ দিচ্ছি যে আপনি মনোনয়নের সুবিধা এবং আপনার অ্যাকাউন্টে কাউকে মনোনীত না করার পরিণতি বিবেচনা করুন।",
    yesNominee: "হ্যাঁ, নমিনি যোগ করুন",
    noNominee: "না, আমি কাউকে মনোনীত করতে চাই না",
  },
  gu: {
    title: "શું તમે નોમિની ઉમેરવા માંગો છો?",
    recommendation: "અમે ભારપૂર્વક ભલામણ કરીએ છીએ કે તમે થાપણ પતાવટને સુરક્ષિત કરવા માટે નોમિની ઉમેરો.",
    explanation: "ખાતાધારકના મૃત્યુના કિસ્સામાં, ખાતામાં જમા થયેલી રકમ IDFC FIRST Bank Ltd દ્વારા નોમિનીને પરત કરવામાં આવશે.",
    advocate: "અમે હિમાયત કરીએ છીએ કે તમે નામાંકનના ફાયદા અને તમારા ખાતામાં કોઈને પણ નામાંકિત ન કરવાના પરિણામોને ધ્યાનમાં લો.",
    yesNominee: "હા, નોમિની ઉમેરો",
    noNominee: "ના, હું કોઈને નોમિનેટ કરવા માંગતો નથી",
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
