// src/components/Documentation.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CatLogo } from './CatLogo';
import { documentationItems } from '../configs/documentation';

const DocItem = ({ item }) => {
  const navigate = useNavigate();
  
  const handleClick = (e) => {
    e.preventDefault();
    navigate(item.link);
  };

  return (
    <div className="border-l-4 border-blue-500 pl-8 mb-4 cursor-pointer hover:bg-gray-50 transition-colors duration-150" onClick={handleClick}>
      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
      <p className="text-gray-600">{item.description}</p>
    </div>
  );
};

export const Documentation = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setItems(documentationItems);
      setLoading(false);
    } catch (err) {
      console.error('Error loading documentation items:', err);
      setError('Failed to load documentation items');
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-4 w-48 bg-gray-200 rounded mb-8"></div> {/* Breadcrumb placeholder */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="bg-gray-200 h-16 w-16 rounded-full"></div>
            <div className="h-8 w-48 bg-gray-200 rounded"></div>
          </div>
          {[1, 2, 3].map((i) => (
            <div key={i} className="border-l-4 border-gray-200 pl-8 mb-12">
              <div className="h-6 w-48 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-full bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-red-500">⚠️ {error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">      
      <div className="flex items-center space-x-4 mb-12">
        <div className="bg-gray-100 p-4 rounded-full">
          <CatLogo className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-semibold">Documentation</h2>
      </div>

      <div>
        {items.map((item) => (
          <DocItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};