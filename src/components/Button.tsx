// src/components/Button.tsx
import React, { useState } from 'react';
import Link from 'next/link';

interface ButtonProps {
  text: string;
  href: string;
  internal?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ text, href, internal, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const buttonClasses = `px-4 py-1 rounded-full transition duration-300 ${isHovered ? 'bg-blue-500 text-white shadow-md' : 'bg-[rgb(0,0,182)] text-white'
    }`;

  return (
    internal ? (
    <Link href={href}
      className={buttonClasses}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      aria-label={text}
    > 
      <div className="flex items-center">
        {text}
        {icon && <span className="ml-2">{icon}</span>}
      </div>
    </Link>) : (
      <a
        href={href}
        className={buttonClasses}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={text}
      >
        <div className="flex items-center">
          {text}
          {icon && <span className="ml-2">{icon}</span>}
        </div>
      </a>
    )
  );
};

export default Button;
