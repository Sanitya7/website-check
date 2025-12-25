
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center font-bold text-white">S</div>
          <span className="text-xl font-bold tracking-tight">Sanitya<span className="text-orange-500">.</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#story" className="hover:text-white transition-colors">The Story</a>
          <a href="#results" className="hover:text-white transition-colors">Results</a>
          <a href="#lessons" className="hover:text-white transition-colors">Lessons</a>
          <a href="#mentor" className="bg-white/10 hover:bg-white text-white hover:text-black px-4 py-2 rounded-full transition-all duration-300">
            Ask Sanitya
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
