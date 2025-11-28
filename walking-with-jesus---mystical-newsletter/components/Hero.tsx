import React from 'react';
import { NewsletterForm } from './NewsletterForm';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/1043/2000/1200" 
          alt="Atmospheric ancient texture" 
          className="w-full h-full object-cover opacity-20 sepia mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mystic-900/90 via-mystic-900/80 to-mystic-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.05),_transparent_70%)]"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center pt-20">
        <div className="inline-block mb-4 px-4 py-1 border border-mystic-gold/30 rounded-full bg-mystic-gold/5 backdrop-blur-sm">
          <span className="text-mystic-gold text-xs font-display tracking-[0.2em] uppercase">Est. 2024 • Daily Wisdom</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-stone-100 mb-6 leading-tight tracking-tight drop-shadow-2xl">
          Walking with <br />
          <span className="text-mystic-gold bg-clip-text text-transparent bg-gradient-to-br from-mystic-gold via-[#fcd34d] to-[#b45309]">Jesus</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-serif text-stone-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Reconnect with the mystical heart of Christ. 
          Daily meditations, ancient prayers, and a community rooted in unconditional love, not dogma.
        </p>

        <NewsletterForm />
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-stone-600">
        <ChevronDown className="w-8 h-8 opacity-50" />
      </div>
    </section>
  );
};