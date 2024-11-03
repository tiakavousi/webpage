import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => (
  <nav className="sticky top-0 z-50 bg-gray-800 text-white py-4 shadow-md">
    <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
      <NavLink to="/" className="text-xl font-bold">KubeKitty</NavLink>
      <div className="space-x-6">
        <NavLink 
          to="/" 
          end
          className={({ isActive }) => 
            isActive ? "text-blue-400" : "hover:text-blue-400"
          }
        >
          Home
        </NavLink>

        <NavLink 
          to="/features" 
          className={({ isActive }) => 
            isActive ? "text-blue-400" : "hover:text-blue-400"
          }
        >
          Features
        </NavLink>
        <NavLink 
          to="/documentation" 
          className={({ isActive }) => 
            isActive ? "text-blue-400" : "hover:text-blue-400"
          }
        >
          Documentation
        </NavLink>
        <NavLink 
          to="/previews" 
          className={({ isActive }) => 
            isActive ? "text-blue-400" : "hover:text-blue-400"
          }
        >
          Previews
        </NavLink>
      </div>
    </div>
  </nav>
);