// src/components/Previews.js
import React from 'react';
import { CatLogo } from './CatLogo';
import { previewsConfig } from '../configs/previews';

export const Previews = () => (
  <div className="max-w-4xl mx-auto px-4 py-8">
    <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
      <CatLogo/>{previewsConfig.title}
    </h2>
    <div className="bg-black text-green-400 p-6 rounded-lg font-mono text-sm">
      <div className="mb-2">Context: {previewsConfig.contextInfo.context}</div>
      <div className="mb-2">Cluster: {previewsConfig.contextInfo.cluster}</div>
      <div className="mb-2">User: {previewsConfig.contextInfo.user}</div>
      
      <div className="flex justify-between border-t border-gray-700 mt-4 pt-4">
        <span>{previewsConfig.tableHeaders.name}</span>
        <span>{previewsConfig.tableHeaders.age}</span>
      </div>
      
      {previewsConfig.tableData.map((row, index) => (
        <div key={index} className="flex justify-between text-blue-400">
          <span>{row.name}</span>
          <span>{row.age}</span>
        </div>
      ))}
    </div>
  </div>
);