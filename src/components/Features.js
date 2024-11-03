// src/components/Features.js
import React from 'react';
import { CatLogo } from './CatLogo';
import { featuresConfig } from '../configs/features';

export const Features = () => (
  <div className="max-w-4xl mx-auto px-4 py-8">
    <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
      <CatLogo />Features
    </h2>
    <div className="space-y-4">
      {featuresConfig.map((feature, index) => (
        <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
          <h3 className="font-semibold">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
);