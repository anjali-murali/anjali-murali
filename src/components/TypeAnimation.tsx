// src/components/TypeAnimation.tsx
import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

interface TypeAnimationProps {
  strings: string[];
  delay?: number;
}

const TypeAnimation: React.FC<TypeAnimationProps> = ({ strings, delay = 1000 }) => {
    return (
        <Typewriter
          options={{
            strings,
            autoStart: true,
            loop: true,
            deleteSpeed: 'natural',
          }}
        />
      );
    };

export default TypeAnimation;
