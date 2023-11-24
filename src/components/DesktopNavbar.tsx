// src/components/DesktopNavbar.tsx
import React from 'react';
import Link from 'next/link';
import DesktopNavLink from './DesktopNavLink';
import ThemeSwitcher from './ThemeSwitcher';
import { PORTFOLIO_OWNER_NAME, SiteLink, siteLinks } from '../../content/siteConfig';

const DesktopNavbar: React.FC = () => {
  return (
    <div className="flex flex-row justify-between py-4 px-6 w-full relative">
      <div className="flex items-center">
        <div className="text-2xl font-semibold cursor-pointer">
          <Link href="/">{PORTFOLIO_OWNER_NAME}</Link>
        </div>
      </div>
      <div className="rounded-full bg-[rgb(0,0,182)] text-white p-5 pl-6 pr-6 absolute inset-y-0 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-3 justify-center">
        {siteLinks.map((link: SiteLink, index: number) => (
        <DesktopNavLink key={index} path={link.path}>
          {link.label}
        </DesktopNavLink>
      ))}

        </div>
      </div>
      <div className="flex items-center">
        <ThemeSwitcher />  
      </div>
    </div>
  );
};

export default DesktopNavbar;
