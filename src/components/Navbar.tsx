// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';
import { useIsMobile } from '../context/useIsMobile';

const Navbar: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setMounted(true);

    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      const currentScrollPos = window.scrollY;
      
      if (currentScrollPos === 0) {
        setVisible(true);
      } else {
        setVisible(true);

        isScrolling = true;

        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }

        scrollTimeout = setTimeout(() => {
          isScrolling = false;
          setVisible(false);
        }, 2500); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { isMobile } = useIsMobile();

  return (
    <nav className={`fixed w-full z-50 ${mounted && visible ? '' : 'hidden'}`}>
      <div className={`container mx-auto px-4 py-3 relative max-w-screen-3xl`}>        
        <MobileNavbar />
        {!isMobile && <DesktopNavbar />}
      </div>
    </nav>
  );
};

export default Navbar;
