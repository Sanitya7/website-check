
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Lessons from './components/Lessons';
import AIChat from './components/AIChat';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-gray-100">
      <Navbar />
      <main>
        <Hero />
        {/* Stats are now integrated into Hero for better impact */}
        <Story />
        <Lessons />
        <AIChat />
      </main>
      <Footer />
    </div>
  );
};

export default App;
