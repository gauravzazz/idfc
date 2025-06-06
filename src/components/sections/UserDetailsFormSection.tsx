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

export function UserDetailsFormSection() {
  const [dob, setDob] = React.useState<Date | undefined>();
  const [showAadhaar, setShowAadhaar] = React.useState(false);

  return (
    <div className="container mx-auto px-4 py-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-primary">
            Enter details to start your savings journey now!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form id="userDetailsForm" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="mobileNumber">Aadhaar linked mobile</Label>
                <div className="flex items-center">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-secondary text-sm">+91</span>
                  <Input id="mobileNumber" name="mobileNumber" type="tel" placeholder="Enter mobile number" maxLength={10} className="rounded-l-none" />
                </div>
              </div>
              <div>
                <Label htmlFor="dob">Date of birth</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CustomCalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                      {dob ? format(dob, 'PPP') : <span>Pick a date</span>}
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
                <Label htmlFor="emailId">Email address</Label>
                <Input id="emailId" name="emailId" type="email" placeholder="Enter email address" maxLength={40} />
              </div>
              <div>
                <Label htmlFor="panNumber">Permanent Account Number (PAN)</Label>
                <Input id="panNumber" name="panNumber" type="text" placeholder="Enter PAN" maxLength={10} className="uppercase" />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="aadhaar">12-digit Aadhaar number</Label>
                <div className="relative">
                  <Input
                    id="aadhaar"
                    name="aadhaar"
                    type={showAadhaar ? "text" : "password"}
                    placeholder="Enter Aadhaar number"
                    maxLength={12}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 text-muted-foreground"
                    onClick={() => setShowAadhaar(!showAadhaar)}
                    aria-label={showAadhaar ? "Hide Aadhaar number" : "Show Aadhaar number"}
                  >
                    {showAadhaar ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <Button variant="link" className="text-sm text-accent p-0 h-auto">
                Click here if you don't have Aadhaar
              </Button>
              <Button type="button" disabled className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                Get OTP
              </Button>
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

