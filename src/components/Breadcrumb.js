// src/components/Breadcrumb.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(path => path);

  // Create breadcrumb items with proper formatting
  const getBreadcrumbItems = () => {
    const items = [];
    let currentPath = '';

    // Add home as first item
    items.push({
      name: 'Home',
      path: '/',
    });

    // Add subsequent paths
    paths.forEach((path) => {
      currentPath += `/${path}`;
      items.push({
        name: path.charAt(0).toUpperCase() + path.slice(1),
        path: currentPath
      });
    });

    return items;
  };

  const items = getBreadcrumbItems();

  return (
    <nav className="flex items-center space-x-2 text-gray-500 mb-6">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={item.path}>
            <Link
              to={item.path}
              className={`flex items-center hover:text-blue-500 ${
                isLast ? 'text-gray-900 font-medium' : ''
              }`}
            >
              {item.icon && <span className="mr-1">{item.icon}</span>}
              {item.name}
            </Link>
            {!isLast && <ChevronRight size={16} />}
          </React.Fragment>
        );
      })}
    </nav>
  );
};