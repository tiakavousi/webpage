// src/components/CatLogo.js
import React from 'react';

export const CatLogo = () => (
  <div className="flex justify-center">
    <svg 
      viewBox="0 0 120 120" 
      className="w-16 h-16 transition-all duration-300 ease-in-out hover:scale-105"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="60" cy="60" r="55" fill="currentColor" className="text-black opacity-10"/>
      
      <path 
        d="M60 30 L90 80 H30 Z" 
        fill="none" 
        stroke="currentColor" 
        className="text-black"
        strokeWidth="4" 
        strokeLinejoin="round"
      />
      
      <path 
        d="M60 30 L45 60 L30 35 Z" 
        fill="currentColor" 
        className="text-black opacity-90"
      />
      <path 
        d="M60 30 L75 60 L90 35 Z" 
        fill="currentColor" 
        className="text-black opacity-90"
      />
      
      <circle cx="47.5" cy="55" r="4" fill="currentColor" className="text-black"/>
      <circle cx="72.5" cy="55" r="4" fill="currentColor" className="text-black"/>
      
      <line 
        x1="42.5" y1="65" x2="27.5" y2="62.5" 
        stroke="currentColor" 
        className="text-black"
        strokeWidth="1.5"
      />
      <line 
        x1="42.5" y1="70" x2="27.5" y2="70" 
        stroke="currentColor" 
        className="text-black"
        strokeWidth="1.5"
      />
      <line 
        x1="42.5" y1="75" x2="27.5" y2="77.5" 
        stroke="currentColor" 
        className="text-black"
        strokeWidth="1.5"
      />
      
      <line 
        x1="77.5" y1="65" x2="92.5" y2="62.5" 
        stroke="currentColor" 
        className="text-black"
        strokeWidth="1.5"
      />
      <line 
        x1="77.5" y1="70" x2="92.5" y2="70" 
        stroke="currentColor" 
        className="text-black"
        strokeWidth="1.5"
      />
      <line 
        x1="77.5" y1="75" x2="92.5" y2="77.5" 
        stroke="currentColor" 
        className="text-black"
        strokeWidth="1.5"
      />
    </svg>
  </div>
);

// Optional: Version with customizable size
export const CatLogoWithSize = ({ size = "w-16 h-16" }) => (
  <div className="flex justify-center">
    <svg 
      viewBox="0 0 120 120" 
      className={`${size} transition-all duration-300 ease-in-out hover:scale-105`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Same SVG content as above */}
    </svg>
  </div>
);