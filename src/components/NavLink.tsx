// src/components/NavLink.tsx
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavLinkProps {
  path: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ path, children }) => {
  const router = useRouter();
  const isActive = router.pathname === path;

  const linkClasses = `hover:text-gray-300 ${isActive ? 'bg-blue-700 rounded pl-1 pr-1' : ''}`;

  return (
    <Link href={path} className={linkClasses}>
      {children}
    </Link>
  );
};

export default NavLink;
