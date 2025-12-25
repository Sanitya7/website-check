
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Hi! I'm Sanitya's digital twin. Ask me anything about D2C, startup growth, or how to start building your idea." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await getGeminiResponse(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <section id="mentor" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="glass rounded-[40px] border border-white/10 overflow-hidden shadow-2xl">
          <div className="bg-white/5 p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center font-bold text-lg">SS</div>
              <div>
                <h3 className="font-bold">Sanitya Twin</h3>
                <p className="text-xs text-orange-400 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Online & Ready to Guide
                </p>
              </div>
            </div>
            <div className="text-xs text-gray-500 hidden sm:block">
              Powered by Gemini 3.0
            </div>
          </div>
          
          <div 
            ref={scrollRef}
            className="h-[450px] overflow-y-auto p-6 space-y-6 bg-gray-950/20"
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl ${
                  msg.role === 'user' 
                  ? 'bg-orange-600 text-white rounded-tr-none' 
                  : 'bg-white/5 border border-white/10 text-gray-200 rounded-tl-none'
                }`}>
                  <p className="text-sm leading-relaxed">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
          </div>
          
          <div className="p-6 bg-white/5 border-t border-white/10">
            <div className="relative flex items-center">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about D2C, pitching, or startup strategy..."
                className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-6 pr-16 focus:outline-none focus:border-orange-500 transition-all text-sm"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 p-3 bg-orange-600 hover:bg-orange-500 disabled:opacity-50 disabled:hover:bg-orange-600 rounded-xl transition-all"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
            <p className="text-[10px] text-gray-600 mt-3 text-center uppercase tracking-widest">
              Built to help builders skip years of confusion
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChat;
