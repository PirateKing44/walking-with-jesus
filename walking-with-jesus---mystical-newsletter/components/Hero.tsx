import React from 'react';
import { NewsletterForm } from './NewsletterForm';
import { ChevronDown, Sparkles, Clock, Users } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/1043/2000/1200" 
          alt="Peaceful spiritual landscape" 
          className="w-full h-full object-cover opacity-20 sepia mix-blend-overlay"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mystic-900/90 via-mystic-900/80 to-mystic-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.05),_transparent_70%)]"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center pt-20 px-4">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-3 mb-6 px-5 py-2 border border-mystic-gold/30 rounded-full bg-mystic-gold/5 backdrop-blur-sm">
          <Users className="w-4 h-4 text-mystic-gold" />
          <span className="text-mystic-gold text-sm font-display tracking-[0.15em] uppercase">Trusted by 10,000+ Daily Seekers</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-medium text-stone-100 mb-6 leading-[1.1] tracking-tight drop-shadow-2xl">
          Start Your Day with <br />
          <span className="text-mystic-gold bg-clip-text text-transparent bg-gradient-to-br from-mystic-gold via-[#fcd34d] to-[#b45309]">
            Christ's Unconditional Love
          </span>
        </h1>
        
        {/* Value Proposition */}
        <p className="text-xl md:text-2xl lg:text-3xl font-serif text-stone-300 max-w-3xl mx-auto mb-4 leading-relaxed">
          2-minute mystical meditations delivered to your inbox every morning at 7am
        </p>
        
        <p className="text-lg md:text-xl font-serif text-stone-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Ancient prayers, contemplative wisdom, and a spiritual community rooted in love—not dogma. 
          Perfect for busy souls seeking deeper connection.
        </p>

        {/* Key Benefits */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10 text-sm md:text-base">
          <div className="flex items-center gap-2 text-stone-300">
            <Clock className="w-5 h-5 text-mystic-gold" />
            <span className="font-serif">Just 2 minutes daily</span>
          </div>
          <div className="flex items-center gap-2 text-stone-300">
            <Sparkles className="w-5 h-5 text-mystic-gold" />
            <span className="font-serif">AI-personalized wisdom</span>
          </div>
          <div className="flex items-center gap-2 text-stone-300">
            <svg className="w-5 h-5 text-mystic-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.707 6.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
            </svg>
            <span className="font-serif">100% free forever</span>
          </div>
        </div>

        {/* Newsletter Form */}
        <NewsletterForm />
        
        {/* Social Proof Text */}
        <p className="mt-4 text-stone-500 text-sm font-serif italic">
          Join Sarah, Marcus, Elena, and 10,000+ others on this sacred journey
        </p>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#features" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-stone-600 hover:text-mystic-gold transition-colors cursor-pointer"
        aria-label="Scroll to features"
      >
        <ChevronDown className="w-8 h-8 opacity-50 hover:opacity-100" />
      </a>
    </section>
  );
};