// src/components/Main.js
import React from 'react';
import { Logo } from './KubeKittyLogo';
import { mainConfig } from '../configs/Home';

export const Main = () => (
  <div className="max-w-4xl mx-auto px-4 py-8">
    <header className="text-center mb-16">
      <h1 className="text-4xl font-bold mb-2">{mainConfig.title}</h1>
      <p className="text-xl italic text-gray-700 mb-8">
        {mainConfig.tagline}
      </p>
      <Logo />
      <div className="mt-8">
        <h2 className="text-2xl font-semibold flex items-center justify-center gap-2">
          <span className="text-lg">{mainConfig.subtitle.emoji}</span> {mainConfig.subtitle.text}
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          {mainConfig.description}
        </p>
      </div>
    </header>
  </div>
);