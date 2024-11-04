// src/App.js
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Main } from './components/Main';
import { Features } from './components/Features';
import { Documentation } from './components/Documentation';
import DocumentationPage from './components/pages/DocumentationPage';  // Updated import
import { Previews } from './components/Previews';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/features" element={<Features />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/documentation/:topic" element={<DocumentationPage />} />
          <Route path="/previews" element={<Previews />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;