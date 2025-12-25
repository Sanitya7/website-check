
import React from 'react';

const stats = ['21', '37', '100+', '6 Fig'];

const Stats: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 -mt-10 mb-32 relative z-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((val, idx) => (
          <div 
            key={idx} 
            className="aspect-square glass rounded-3xl border border-white/5 flex items-center justify-center group hover:border-orange-500/30 transition-all duration-500 hover:bg-orange-500/5 shadow-2xl"
          >
            <h3 className="text-3xl md:text-5xl font-bold tracking-tighter gradient-text group-hover:scale-110 transition-transform">
              {val}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
