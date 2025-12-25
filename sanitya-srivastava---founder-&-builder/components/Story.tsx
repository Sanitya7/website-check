
import React from 'react';

const Story: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-gray-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl relative bg-gray-900">
                <img 
                  src="https://raw.githubusercontent.com/StackBlitz/stackblitz-images/main/sanitya-founder.png" 
                  alt="Sanitya Srivastava" 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to a high-quality professional representation if specific raw link fails
                    e.currentTarget.src = "https://images.unsplash.com/photo-1519085184614-f0801f01621e?q=80&w=1974&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-12 left-12">
                  <p className="text-3xl font-serif italic text-white font-bold drop-shadow-lg">"Hi, I'm Sanitya Srivastava."</p>
                </div>
             </div>
             {/* Abstract Decorations */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-600/20 blur-[100px] rounded-full"></div>
             <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-yellow-500/10 blur-[120px] rounded-full"></div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-serif leading-tight">
              The Learning Was <br />
              <span className="gradient-text italic font-bold">Insane.</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg md:text-xl leading-relaxed">
              <p>
                Like every confused early-stage founder… I spent months wondering — 
                <span className="text-white font-medium"> Will this idea even work? Will anyone pay for it? How do I even pitch this right?</span>
              </p>
              <p>
                To figure it out, I didn't just wait. I dove headfirst into the ecosystem. 
                <span className="text-orange-400 font-semibold underline decoration-orange-500/30 underline-offset-4">21 events</span>, 
                <span className="text-yellow-500 font-semibold underline decoration-yellow-500/30 underline-offset-4 mx-2">37 books</span> down, 
                and conversations with <span className="text-orange-300 font-semibold underline decoration-orange-300/30 underline-offset-4">100+ founders</span> later... the fog finally cleared.
              </p>
              <p>
                The result? I built a 6-figure D2C business from scratch while still in college. 
                No fancy funding. Just real lessons, real mistakes, and pure founder wisdom.
              </p>
              <div className="pt-4">
                 <div className="flex items-center gap-4 p-6 glass rounded-3xl border-l-8 border-orange-500 shadow-xl">
                    <p className="text-white text-lg font-semibold italic">
                      "If you're a builder... stay tuned. This is going to help you skip years of confusion."
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
