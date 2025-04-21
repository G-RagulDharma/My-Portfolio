import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Skill from './components/Skill';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;