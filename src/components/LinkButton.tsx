// src/components/LinkButton.tsx
import React, { useState } from 'react';
import Link from 'next/link';

interface LinkButtonProps {
    text: string;
    href: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ text, href }) => {
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
        <Link href={href}
            className={buttonClasses}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}>
            {text}
        </Link>
    );
};

export default LinkButton;
