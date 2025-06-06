import Link from 'next/link';

const footerLinks = [
  { href: "https://www.idfcfirstbank.com/interest-rate", text: "Interest Rates" },
  { href: "https://www.idfcfirstbank.com/personal-banking/faq-sa-diy-journey", text: "FAQ" },
  { href: "https://www.idfcfirstbank.com/privacy-policy", text: "Privacy Policy" },
  { href: "https://www.idfcfirstbank.com/content/dam/idfcfirstbank/footer/Disclaimer.pdf", text: "Disclaimer" },
  { href: "https://www.idfcfirstbank.com/content/dam/IDFCFirstBank/Interest-Rates/Banking-Ombudsman-Scheme.pdf", text: "Banking Ombudsman" },
  { href: "https://www.idfcfirstbank.com/terms-and-conditions", text: "Terms & Conditions" },
  { href: "https://www.idfcfirstbank.com/investors/regulatory-disclosures", text: "Regulatory" },
];

export function FooterSection() {
  return (
    <footer className="bg-muted/50 py-8 mt-10">
      <div className="container mx-auto px-4 text-center text-xs text-muted-foreground">
        <p className="mb-4">
          Corporate Office Address:- C/61, Bandra Kurla Complex Rd, opposite Trident Hotel, G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051
        </p>
        <div className="mb-4">
          <p>Copyright © {new Date().getFullYear()} IDFC FIRST Bank Ltd. All Rights Reserved.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
          {footerLinks.map((link, index) => (
            <React.Fragment key={link.text}>
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

// Need to import React for JSX Fragment
import * as React from 'react';
