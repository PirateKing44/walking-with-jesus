import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { MysticalMessageGenerator } from './components/MysticalMessageGenerator';
import { Features } from './components/Features';
import { SampleNewsletter } from './components/SampleNewsletter';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { NewsletterForm } from './components/NewsletterForm';
import { ExitIntentPopup } from './components/ExitIntentPopup';
import { Mail, Heart, X } from 'lucide-react';

function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <div className="min-h-screen bg-mystic-900 text-stone-200 selection:bg-mystic-gold selection:text-mystic-900">
      {/* Hero Section */}
      <Hero />
      
      {/* Divider */}
      <div className="relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-800 to-transparent"></div>
        <Features />
      </div>

      {/* Sample Newsletter Preview */}
      <SampleNewsletter />

      {/* AI Message Generator */}
      <div className="bg-stone-900 border-y border-stone-800">
        <MysticalMessageGenerator />
      </div>

      {/* About/Story Section */}
      <About />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA Section */}
      <section id="final-cta" className="py-32 px-4 bg-gradient-to-b from-stone-900 via-stone-950 to-black relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.08),_transparent_70%)]"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="mb-8">
            <Heart className="w-16 h-16 text-mystic-gold mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-display text-mystic-goldLight mb-6 leading-tight">
              Your Journey Begins<br />Tomorrow Morning
            </h2>
            <p className="text-xl md:text-2xl font-serif text-stone-300 mb-4 leading-relaxed">
              Join 10,000+ seekers who start their day with Christ's unconditional love
            </p>
            <p className="text-lg font-serif text-stone-400 mb-12">
              First meditation arrives at 7am. No credit card. No commitment. Just grace.
            </p>
          </div>
          
          <NewsletterForm />

          {/* Trust Signals */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-stone-500 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-mystic-gold" />
              <span className="font-serif">10,000+ daily readers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">⭐</span>
              <span className="font-serif">4.9/5 average rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-mystic-gold" />
              <span className="font-serif">100% free forever</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black text-center border-t border-stone-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <h4 className="font-display text-mystic-gold tracking-[0.2em] text-xl mb-3">
              WALKING WITH JESUS
            </h4>
            <p className="text-stone-600 font-serif italic text-sm max-w-md mx-auto">
              Daily mystical meditations for souls seeking Christ's unconditional love
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-stone-600 text-sm font-serif mb-8">
            <a href="#about" className="hover:text-mystic-gold transition-colors">About</a>
            <a href="#sample" className="hover:text-mystic-gold transition-colors">Sample Email</a>
            <a href="#faq" className="hover:text-mystic-gold transition-colors">FAQ</a>
            <button 
              onClick={() => setShowPrivacy(true)}
              className="hover:text-mystic-gold transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setShowTerms(true)}
              className="hover:text-mystic-gold transition-colors"
            >
              Terms
            </button>
            <a href="mailto:hello@walkingwithjesus.com" className="hover:text-mystic-gold transition-colors">
              Contact
            </a>
          </div>

          <div className="h-px w-32 bg-gradient-to-r from-transparent via-stone-800 to-transparent mx-auto mb-8"></div>
          
          <p className="text-stone-700 text-xs mb-2">
            © {new Date().getFullYear()} Walking with Jesus. All rights reserved.
          </p>
          <p className="text-stone-800 text-xs font-serif italic">
            Made with love, prayer, and reverence. ✨
          </p>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/80 backdrop-blur-sm overflow-y-auto py-8 px-4">
          <div className="relative w-full max-w-5xl bg-stone-950 rounded-2xl shadow-2xl">
            <button
              onClick={() => setShowPrivacy(false)}
              className="sticky top-4 float-right mr-4 mt-4 p-2 bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors z-10"
              aria-label="Close privacy policy"
            >
              <X className="w-6 h-6 text-stone-400" />
            </button>
            <PrivacyPolicy />
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {showTerms && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/80 backdrop-blur-sm overflow-y-auto py-8 px-4">
          <div className="relative w-full max-w-5xl bg-stone-950 rounded-2xl shadow-2xl">
            <button
              onClick={() => setShowTerms(false)}
              className="sticky top-4 float-right mr-4 mt-4 p-2 bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors z-10"
              aria-label="Close terms of service"
            >
              <X className="w-6 h-6 text-stone-400" />
            </button>
            <TermsOfService />
          </div>
        </div>
      )}

      {/* Exit Intent Popup */}
      <ExitIntentPopup />
    </div>
  );
}

export default App;