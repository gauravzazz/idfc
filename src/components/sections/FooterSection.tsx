
// @ts-nocheck
'use client';

import Link from 'next/link';
import * as React from 'react';

const footerTranslations = {
  en: {
    corporateAddress: "Corporate Office Address:- C/61, Bandra Kurla Complex Rd, opposite Trident Hotel, G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051",
    copyright: "Copyright © {year} IDFC FIRST Bank Ltd. All Rights Reserved.",
    linkInterestRates: "Interest Rates",
    linkFaq: "FAQ",
    linkPrivacyPolicy: "Privacy Policy",
    linkDisclaimer: "Disclaimer",
    linkBankingOmbudsman: "Banking Ombudsman",
    linkTermsConditions: "Terms & Conditions",
    linkRegulatory: "Regulatory",
  },
  mr: {
    corporateAddress: "कॉर्पोरेट कार्यालय पत्ता:- सी/६१, वांद्रे कुर्ला कॉम्प्लेक्स रोड, ट्रायडेंट हॉटेल समोर, जी ब्लॉक बीकेसी, वांद्रे कुर्ला कॉम्प्लेक्स, वांद्रे पूर्व, मुंबई, महाराष्ट्र ४०००५१",
    copyright: "कॉपीराइट © {year} IDFC FIRST बँक लि. सर्व हक्क राखीव.",
    linkInterestRates: "व्याज दर",
    linkFaq: "सामान्य प्रश्न",
    linkPrivacyPolicy: "गोपनीयता धोरण",
    linkDisclaimer: "अस्वीकरण",
    linkBankingOmbudsman: "बँकिंग लोकपाल",
    linkTermsConditions: "अटी आणि नियम",
    linkRegulatory: "नियामक",
  },
  hi: {
    corporateAddress: "कॉर्पोरेट कार्यालय का पता:- सी/61, बांद्रा कुर्ला कॉम्प्लेक्स रोड, ट्राइडेंट होटल के सामने, जी ब्लॉक बीकेसी, बांद्रा कुर्ला कॉम्प्लेक्स, बांद्रा ईस्ट, मुंबई, महाराष्ट्र 400051",
    copyright: "कॉपीराइट © {year} आईडीएफसी फर्स्ट बैंक लिमिटेड। सर्वाधिकार सुरक्षित।",
    linkInterestRates: "ब्याज दरें",
    linkFaq: "सामान्य प्रश्न",
    linkPrivacyPolicy: "गोपनीयता नीति",
    linkDisclaimer: "अस्वीकरण",
    linkBankingOmbudsman: "बैंकिंग लोकपाल",
    linkTermsConditions: "नियम एवं शर्तें",
    linkRegulatory: "नियामक",
  },
  kn: {
    corporateAddress: "ಕಾರ್ಪೊರೇಟ್ ಕಚೇರಿ ವಿಳಾಸ:- ಸಿ/61, ಬಾಂದ್ರಾ ಕುರ್ಲಾ ಕಾಂಪ್ಲೆಕ್ಸ್ ರಸ್ತೆ, ಟ್ರೈಡೆಂಟ್ ಹೋಟೆಲ್ ಎದುರು, ಜಿ ಬ್ಲಾಕ್ ಬಿಕೆಸಿ, ಬಾಂದ್ರಾ ಕುರ್ಲಾ ಕಾಂಪ್ಲೆಕ್ಸ್, ಬಾಂದ್ರಾ ಪೂರ್ವ, ಮುಂಬೈ, ಮಹಾರಾಷ್ಟ್ರ 400051",
    copyright: "ಕೃತಿಸ್ವಾಮ್ಯ © {year} IDFC FIRST ಬ್ಯಾಂಕ್ ಲಿಮಿಟೆಡ್. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    linkInterestRates: "ಬಡ್ಡಿ ದರಗಳು",
    linkFaq: "FAQ",
    linkPrivacyPolicy: "ಗೌಪ್ಯತಾ ನೀತಿ",
    linkDisclaimer: "ಹಕ್ಕು ನಿರಾಕರಣೆ",
    linkBankingOmbudsman: "ಬ್ಯಾಂಕಿಂಗ್ ಓಂಬುಡ್ಸ್‌ಮನ್",
    linkTermsConditions: "ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು",
    linkRegulatory: "ನಿಯಂತ್ರಕ",
  },
  ta: {
    corporateAddress: "பெருநிறுவன அலுவலக முகவரி:- சி/61, பாந்த்ரா குர்லா காம்ப்ளக்ஸ் சாலை, டிரைடென்ட் ஹோட்டலுக்கு எதிரில், ஜி பிளாக் பிகேசி, பாந்த்ரா குர்லா காம்ப்ளக்ஸ், பாந்த்ரா கிழக்கு, மும்பை, மகாராஷ்டிரா 400051",
    copyright: "பதிப்புரிமை © {year} IDFC FIRST வங்கி லிமிடெட். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    linkInterestRates: "வட்டி விகிதங்கள்",
    linkFaq: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    linkPrivacyPolicy: "தனியுரிமைக் கொள்கை",
    linkDisclaimer: "பொறுப்புத்துறப்பு",
    linkBankingOmbudsman: "வங்கி குறைதீர்ப்பாளர்",
    linkTermsConditions: "விதிமுறைகள் மற்றும் நிபந்தனைகள்",
    linkRegulatory: "ஒழுங்குமுறை",
  },
  bn: {
    corporateAddress: "কর্পোরেট অফিসের ঠিকানা:- সি/৬১, বান্দ্রা কুরলা কমপ্লেক্স রোড, ট্রাইডেন্ট হোটেলের напротив, জি ব্লক বিকেসি, বান্দ্রা কুরলা কমপ্লেক্স, বান্দ্রা পূর্ব, মুম্বাই, মহারাষ্ট্র ৪০০ ০৫১",
    copyright: "কপিরাইট © {year} IDFC FIRST ব্যাংক লিমিটেড। সর্বস্বত্ব সংরক্ষিত।",
    linkInterestRates: "সুদের হার",
    linkFaq: "প্রশ্নাবলী",
    linkPrivacyPolicy: "গোপনীয়তা নীতি",
    linkDisclaimer: "দাবিত্যাগ",
    linkBankingOmbudsman: "ব্যাংকিং ন্যায়পাল",
    linkTermsConditions: "শর্তাবলী",
    linkRegulatory: "নিয়ন্ত্রক",
  },
  gu: {
    corporateAddress: "કોર્પોરેટ ઓફિસનું સરનામું:- સી/૬૧, બાંદ્રા કુર્લા કોમ્પ્લેક્સ રોડ, ટ્રાઇડેન્ટ હોટેલની સામે, જી બ્લોક બીકેસી, બાંદ્રા કુર્લા કોમ્પ્લેક્સ, બાંદ્રા પૂર્વ, મુંબઈ, મહારાષ્ટ્ર ૪૦૦૦૫૧",
    copyright: "કૉપિરાઇટ © {year} IDFC FIRST બેંક લિ. સર્વાધિકાર સુરક્ષિત.",
    linkInterestRates: "વ્યાજ દરો",
    linkFaq: "FAQ",
    linkPrivacyPolicy: "ગોપનીયતા નીતિ",
    linkDisclaimer: "અસ્વીકરણ",
    linkBankingOmbudsman: "બેંકિંગ લોકપાલ",
    linkTermsConditions: "નિયમો અને શરતો",
    linkRegulatory: "નિયમનકારી",
  },
};


const baseFooterLinks = [
  { href: "https://www.idfcfirstbank.com/interest-rate", textKey: "linkInterestRates" },
  { href: "https://www.idfcfirstbank.com/personal-banking/faq-sa-diy-journey", textKey: "linkFaq" },
  { href: "https://www.idfcfirstbank.com/privacy-policy", textKey: "linkPrivacyPolicy" },
  { href: "https://www.idfcfirstbank.com/content/dam/idfcfirstbank/footer/Disclaimer.pdf", textKey: "linkDisclaimer" },
  { href: "https://www.idfcfirstbank.com/content/dam/IDFCFirstBank/Interest-Rates/Banking-Ombudsman-Scheme.pdf", textKey: "linkBankingOmbudsman" },
  { href: "https://www.idfcfirstbank.com/terms-and-conditions", textKey: "linkTermsConditions" },
  { href: "https://www.idfcfirstbank.com/investors/regulatory-disclosures", textKey: "linkRegulatory" },
];

interface FooterSectionProps {
  languageCode: string;
}

export function FooterSection({ languageCode = 'en' }: FooterSectionProps) {
  const lang = languageCode && footerTranslations[languageCode] ? languageCode : 'en';
  const t = footerTranslations[lang];

  const currentYear = new Date().getFullYear();
  const localizedCopyright = t.copyright.replace('{year}', currentYear.toString());

  const footerLinks = baseFooterLinks.map(link => ({
    ...link,
    text: t[link.textKey as keyof typeof t] || footerTranslations.en[link.textKey as keyof typeof footerTranslations.en],
  }));

  return (
    <footer className="bg-muted/50 py-8 mt-10">
      <div className="container mx-auto px-4 text-center text-xs text-muted-foreground">
        <p className="mb-4">
          {t.corporateAddress}
        </p>
        <div className="mb-4">
          <p>{localizedCopyright}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
          {footerLinks.map((link, index) => (
            <React.Fragment key={link.href}>
              <Link href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                {link.text}
              </Link>
              {index < footerLinks.length - 1 && <span>|</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
}
