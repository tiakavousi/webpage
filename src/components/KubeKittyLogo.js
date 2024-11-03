// src/components/K9sLogo.js
import React from 'react';
import logo from '../assets/logo.jpeg';

export const Logo = () => (
  <div className="flex justify-center">
    <img 
      src={logo} 
      alt="k9s mascot logo" 
      className="w-32 h-32 transition-transform duration-300 ease-in-out hover:scale-105"
    />
  </div>
);