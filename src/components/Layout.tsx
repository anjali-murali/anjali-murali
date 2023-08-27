// src/components/Layout.tsx
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto mt-8 flex-grow overflow-y-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

