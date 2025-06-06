// @ts-nocheck
'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { CustomCalendarIcon } from '@/components/icons/CustomCalendarIcon';
import { Eye, EyeOff } from 'lucide-react';
import { format } from 'date-fns';

const sectionTranslations = {
  en: {
    title: "Enter details to start your savings journey now!",
    mobileLabel: "Aadhaar linked mobile",
    mobilePlaceholder: "Enter mobile number",
    dobLabel: "Date of birth",
    dobPlaceholder: "Pick a date",
    emailLabel: "Email address",
    emailPlaceholder: "Enter email address",
    panLabel: "Permanent Account Number (PAN)",
    panPlaceholder: "Enter PAN",
    aadhaarLabel: "12-digit Aadhaar number",
    aadhaarPlaceholder: "Enter Aadhaar number",
    noAadhaarLink: "Click here if you don't have Aadhaar",
    getOtpButton: "Get OTP",
    showAadhaar: "Show Aadhaar number",
    hideAadhaar: "Hide Aadhaar number",
  },
  mr: {
    title: "तुमची बचत यात्रा सुरू करण्यासाठी तपशील प्रविष्ट करा!",
    mobileLabel: "आधार लिंक केलेला मोबाईल",
    mobilePlaceholder: "मोबाईल नंबर टाका",
    dobLabel: "जन्म तारीख",
    dobPlaceholder: "एक तारीख निवडा",
    emailLabel: "ईमेल पत्ता",
    emailPlaceholder: "ईमेल पत्ता टाका",
    panLabel: "स्थायी खाते क्रमांक (PAN)",
    panPlaceholder: "PAN टाका",
    aadhaarLabel: "१२-अंकी आधार क्रमांक",
    aadhaarPlaceholder: "आधार क्रमांक टाका",
    noAadhaarLink: "तुमच्याकडे आधार नसल्यास येथे क्लिक करा",
    getOtpButton: "OTP मिळवा",
    showAadhaar: "आधार क्रमांक दर्शवा",
    hideAadhaar: "आधार क्रमांक लपवा",
  },
  hi: {
    title: "अपनी बचत यात्रा शुरू करने के लिए विवरण दर्ज करें!",
    mobileLabel: "आधार लिंक किया हुआ मोबाइल",
    mobilePlaceholder: "मोबाइल नंबर दर्ज करें",
    dobLabel: "जन्म तिथि",
    dobPlaceholder: "एक तारीख चुनें",
    emailLabel: "ईमेल पता",
    emailPlaceholder: "ईमेल पता दर्ज करें",
    panLabel: "स्थायी खाता संख्या (पैन)",
    panPlaceholder: "पैन दर्ज करें",
    aadhaarLabel: "12-अंकीय आधार संख्या",
    aadhaarPlaceholder: "आधार संख्या दर्ज करें",
    noAadhaarLink: "यदि आपके पास आधार नहीं है तो यहां क्लिक करें",
    getOtpButton: "ओटीपी प्राप्त करें",
    showAadhaar: "आधार संख्या दिखाएं",
    hideAadhaar: "आधार संख्या छिपाएं",
  },
};

interface UserDetailsFormSectionProps {
  languageCode: string;
}

export function UserDetailsFormSection({ languageCode = 'en' }: UserDetailsFormSectionProps) {
  const [dob, setDob] = React.useState<Date | undefined>();
  const [showAadhaar, setShowAadhaar] = React.useState(false);

  const lang = languageCode && sectionTranslations[languageCode] ? languageCode : 'en';
  const t = sectionTranslations[lang];

  return (
    <div className="container mx-auto px-4 py-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-primary">
            {t.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form id="userDetailsForm" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="mobileNumber">{t.mobileLabel}</Label>
                <div className="flex items-center">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-secondary text-sm">+91</span>
                  <Input id="mobileNumber" name="mobileNumber" type="tel" placeholder={t.mobilePlaceholder} maxLength={10} className="rounded-l-none" />
                </div>
              </div>
              <div>
                <Label htmlFor="dob">{t.dobLabel}</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CustomCalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                      {dob ? format(dob, 'PPP') : <span>{t.dobPlaceholder}</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={dob}
                      onSelect={setDob}
                      initialFocus
                      captionLayout="dropdown-buttons"
                      fromYear={1920}
                      toYear={new Date().getFullYear()}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Label htmlFor="emailId">{t.emailLabel}</Label>
                <Input id="emailId" name="emailId" type="email" placeholder={t.emailPlaceholder} maxLength={40} />
              </div>
              <div>
                <Label htmlFor="panNumber">{t.panLabel}</Label>
                <Input id="panNumber" name="panNumber" type="text" placeholder={t.panPlaceholder} maxLength={10} className="uppercase" />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="aadhaar">{t.aadhaarLabel}</Label>
                <div className="relative">
                  <Input
                    id="aadhaar"
                    name="aadhaar"
                    type={showAadhaar ? "text" : "password"}
                    placeholder={t.aadhaarPlaceholder}
                    maxLength={12}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 text-muted-foreground"
                    onClick={() => setShowAadhaar(!showAadhaar)}
                    aria-label={showAadhaar ? t.hideAadhaar : t.showAadhaar}
                  >
                    {showAadhaar ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <Button variant="link" className="text-sm text-accent p-0 h-auto">
                {t.noAadhaarLink}
              </Button>
              <Button type="button" disabled className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                {t.getOtpButton}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

// Minimal Card components
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
