
import React from 'react';

const highlights = [
  { val: '21', label: 'Events attended', icon: 'fa-calendar-check' },
  { val: '37', label: 'books read', icon: 'fa-book-open' },
  { val: '100+', label: 'Founders Interacted', icon: 'fa-handshake' },
  { val: '6 - Fig', label: 'd2c Business', icon: 'fa-briefcase' },
];

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-orange-600/10 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          BUILDER. FOUNDER. JACK OF ALL TRADES.
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-[1.1] tracking-tight text-white">
          Jack of all trades,<br />
          <span className="gradient-text italic font-bold">master of startups.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
          "Jack of all trades, master of none" is a lie in the startup world. 
          In the trenches, being versatile is your only survival skill.
        </p>

        {/* Highlight Grid inside Hero */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {highlights.map((h, i) => (
            <div key={i} className="glass p-8 rounded-[2rem] border border-white/5 group hover:border-orange-500/30 transition-all duration-500 hover:bg-orange-500/5">
              <div className="w-12 h-12 bg-orange-600/10 rounded-2xl flex items-center justify-center text-orange-500 mb-4 mx-auto group-hover:scale-110 transition-transform">
                <i className={`fas ${h.icon} text-xl`}></i>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{h.val}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold leading-tight">{h.label}</div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://forms.gle/dCKuKNLw2iNTsQNNA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 bg-white text-black font-bold rounded-2xl hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-orange-950/20"
          >
            Book a call <i className="fas fa-phone-alt text-sm"></i>
          </a>
          <button 
            onClick={() => {
              document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-10 py-5 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-all border border-white/10"
          >
            Read My Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
