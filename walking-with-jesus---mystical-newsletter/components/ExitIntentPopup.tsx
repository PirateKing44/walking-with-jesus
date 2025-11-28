import React, { useEffect, useState } from 'react';
import { X, Gift, Mail } from 'lucide-react';
import { NewsletterForm } from './NewsletterForm';

export const ExitIntentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup has been shown in this session
    const popupShown = sessionStorage.getItem('exitIntentShown');
    if (popupShown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from top of viewport (user closing tab/window)
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    // Add small delay before attaching listener to avoid false triggers
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in"
      onClick={handleClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-gradient-to-br from-stone-900 to-stone-950 rounded-2xl shadow-2xl border-2 border-mystic-gold/30 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors"
          aria-label="Close popup"
        >
          <X className="w-6 h-6 text-stone-400 hover:text-mystic-gold" />
        </button>

        {/* Decorative top border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-mystic-gold to-transparent"></div>

        <div className="p-8 md:p-12 text-center">
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className="p-4 rounded-full bg-mystic-gold/10 border-2 border-mystic-gold/30">
              <Gift className="w-12 h-12 text-mystic-gold" />
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-display text-mystic-goldLight mb-4 leading-tight">
            Wait! Before You Go...
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl font-serif text-stone-300 mb-6 leading-relaxed">
            Get your <span className="text-mystic-gold font-display">FREE 7-Day Contemplative Journey</span>
          </p>

          {/* Benefit bullets */}
          <div className="bg-stone-950/50 border border-stone-800 rounded-xl p-6 mb-8 text-left max-w-lg mx-auto">
            <p className="text-stone-300 font-serif mb-4">
              When you subscribe, you'll immediately receive:
            </p>
            <ul className="space-y-3 text-stone-400 font-serif">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-mystic-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong className="text-stone-200">7 transformative meditations</strong> on love, grace, and presence</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-mystic-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong className="text-stone-200">Ancient contemplative practices</strong> from Christian mystics</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-mystic-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong className="text-stone-200">Daily wisdom</strong> at 7am every morning (forever free)</span>
              </li>
            </ul>
          </div>

          {/* Newsletter form */}
          <NewsletterForm showConfetti={true} />

          {/* Trust message */}
          <p className="mt-6 text-stone-500 text-sm font-serif italic">
            Join 10,000+ subscribers. Unsubscribe anytime. We'll never spam you.
          </p>
        </div>
      </div>
    </div>
  );
};
