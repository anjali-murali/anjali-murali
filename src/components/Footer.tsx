// src/components/Footer.tsx
import React from 'react';
import { PORTFOLIO_OWNER_NAME, PORTFOLIO_OWNER_EMAIL, PORTFOLIO_OWNER_LINKEDIN, PORTFOLIO_OWNER_GITHUB, ICON_GITHUB, ICON_LINKEDIN, ICON_EMAIL } from '../../content/siteConfig';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-between p-4 text-xs mt-auto">
      <div>&copy; {currentYear} {PORTFOLIO_OWNER_NAME}</div>
      <div className="flex items-center space-x-2">
        <a href={PORTFOLIO_OWNER_LINKEDIN} target="_blank" rel="noopener noreferrer">
          <Image src={ICON_LINKEDIN} alt="LinkedIn" width={20} height={20} />
        </a>
        <a href={PORTFOLIO_OWNER_GITHUB} target="_blank" rel="noopener noreferrer">
          <Image src={ICON_GITHUB} alt="GitHub" width={20} height={20} />
        </a>
        <a href={`mailto:${PORTFOLIO_OWNER_EMAIL}`} target="_blank" rel="noopener noreferrer">
          <Image src={ICON_EMAIL} alt="Email" width={20} height={20} />
        </a>
        {/* Add more social icons as needed */}
      </div>
    </footer>
  );
};

export default Footer;
