
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-serif mb-6 italic">Stay Tuned.</h3>
        <p className="text-gray-400 mb-10 max-w-md mx-auto">
          If you're a builder... follow the journey. This is going to help you skip years of confusion.
        </p>
        
        <div className="flex justify-center flex-wrap gap-6 mb-12">
          {/* Gmail */}
          <a 
            href="mailto:sanitya2002@gmail.com" 
            className="w-14 h-14 rounded-full glass flex flex-col items-center justify-center text-xl hover:text-orange-500 hover:border-orange-500/50 transition-all group"
            title="Gmail"
          >
            <i className="fas fa-envelope"></i>
            <span className="text-[8px] mt-1 opacity-0 group-hover:opacity-100 transition-opacity">EMAIL</span>
          </a>
          
          {/* Book a Call */}
          <a 
            href="https://forms.gle/dCKuKNLw2iNTsQNNA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full glass flex flex-col items-center justify-center text-xl hover:text-orange-500 hover:border-orange-500/50 transition-all group"
            title="Book a Call"
          >
            <i className="fas fa-calendar-alt"></i>
            <span className="text-[8px] mt-1 opacity-0 group-hover:opacity-100 transition-opacity">BOOK</span>
          </a>
          
          {/* Instagram */}
          <a 
            href="https://www.instagram.com/sanitya.srivastava?igsh=dWl2dXFlNmxvcjlp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full glass flex flex-col items-center justify-center text-xl hover:text-orange-500 hover:border-orange-500/50 transition-all group"
            title="Instagram"
          >
            <i className="fab fa-instagram"></i>
            <span className="text-[8px] mt-1 opacity-0 group-hover:opacity-100 transition-opacity">INSTA</span>
          </a>
        </div>
        
        <div className="text-xs text-gray-600 uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} Sanitya Srivastava. Built for the Builders.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
