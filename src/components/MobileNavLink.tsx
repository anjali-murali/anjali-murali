// src/components/MobileNavLink.tsx
import React from 'react';
import Link from 'next/link';

interface MobileNavLinkProps {
  path: string;
  children: React.ReactNode;
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ path, children, onClick }) => {
  const handleClick = () => {
    onClick(); // Close the dropdown
  };

  return (
    <Link href={path} onClick={handleClick} className="hover:text-gray-300 w-full">
        {children}
    </Link>
  );
};

export default MobileNavLink;
