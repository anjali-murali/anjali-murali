// src/components/Button.tsx
import React, { useState } from 'react';

interface ButtonProps {
  text: string;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ text, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const buttonClasses = `px-4 py-1 rounded-full transition duration-300 ${
    isHovered ? 'bg-blue-500 text-white shadow-md' : 'bg-[rgb(0,0,182)] text-white'
  }`;

  return (
    <a
      href={href}
      className={buttonClasses}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      target="_blank"
      rel="noopener noreferrer" 
    >
      {text}
    </a>
  );
};

export default Button;
