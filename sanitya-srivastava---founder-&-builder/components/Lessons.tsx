
import React from 'react';

const lessons = [
  {
    title: "D2C Foundations",
    description: "How to find a product that people actually want to pay for without spending millions on ads.",
    tag: "Execution",
    icon: "fa-rocket"
  },
  {
    title: "Pitching Mastery",
    description: "The art of telling a story that makes investors and customers believe in your vision.",
    tag: "Communication",
    icon: "fa-bullhorn"
  },
  {
    title: "Founder Mindset",
    description: "Managing the mental chaos of building a startup and turning 'mistakes' into assets.",
    tag: "Psychology",
    icon: "fa-brain"
  }
];

const Lessons: React.FC = () => {
  return (
    <section id="lessons" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Real Wisdom. <span className="text-orange-500">Real Growth.</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto">Skip the generic advice. These are the three pillars I used to build my 6-figure business.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {lessons.map((lesson, idx) => (
            <div key={idx} className="glass p-10 rounded-[32px] group hover:-translate-y-2 transition-all duration-500 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 blur-3xl rounded-full"></div>
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-600 transition-colors">
                <i className={`fas ${lesson.icon} text-2xl group-hover:text-white text-orange-500`}></i>
              </div>
              <span className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-4 block">{lesson.tag}</span>
              <h3 className="text-2xl font-bold mb-4">{lesson.title}</h3>
              <p className="text-gray-400 leading-relaxed">{lesson.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lessons;
