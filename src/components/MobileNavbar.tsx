// src/components/MobileNavbar.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';
import { PORTFOLIO_OWNER_NAME, SiteLink, siteLinks } from '../../content/siteConfig';
import MobileNavLink from './MobileNavLink';

const MobileNavbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const drawerStyles: React.CSSProperties = {
    backgroundColor: 'rgb(0, 0, 182)',
    width: '240px',
    color: '#ffffff',
    transform: isDrawerOpen ? 'translateX(0)' : 'translateX(-100%)',
    transition: 'transform 0.3s ease-in-out',
    paddingTop: '2rem',
  };

  const ownerNameStyles: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  };

  return (
    <div className="md:hidden">
      <div className="flex justify-between items-center mb-4">
        <button onClick={toggleDrawer}
         className={`cursor-pointer`}
         aria-label='mobile menu open'>
          <div
            className={`rounded-full p-2 text-white bg-[rgb(0,0,182)]`}
            style={{
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
            }}
          >
            <span className="block text-xl">&#9776;</span>
          </div>
        </button>
        <Link
          href="/"
          className={`text-dark dark:text-white font-bold text-3xl absolute top-2 left-1/2 transform -translate-x-1/2`}
        >
          {PORTFOLIO_OWNER_NAME}
        </Link>
      </div>
      <div
        className="fixed top-0 left-0 bottom-0 p-4"
        style={drawerStyles}
      >
        <h2 style={ownerNameStyles}>{PORTFOLIO_OWNER_NAME}</h2>
        <div className="flex flex-col space-y-1 items-start">
          {siteLinks.map((link: SiteLink, index: number) => (
            <MobileNavLink key={index} path={link.path} onClick={closeDrawer}>
              {link.label}
            </MobileNavLink>
          ))}
        </div>
        <ThemeSwitcher />
        <button
          className="absolute top-2 right-2 text-white hover:text-gray-800"
          onClick={closeDrawer}
          aria-label='mobile menu close'
        >
          X
        </button>
      </div>
    </div>
  );
};

export default MobileNavbar;
