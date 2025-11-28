import React from 'react';
import { Hero } from './components/Hero';
import { MysticalMessageGenerator } from './components/MysticalMessageGenerator';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { NewsletterForm } from './components/NewsletterForm';

function App() {
  return (
    <div className="min-h-screen bg-mystic-900 text-stone-200 selection:bg-mystic-gold selection:text-mystic-900">
      <Hero />
      
      <div className="relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-800 to-transparent"></div>
        <Features />
      </div>

      <div className="bg-stone-900 border-y border-stone-800">
        <MysticalMessageGenerator />
      </div>

      <Testimonials />

      <section className="py-24 px-4 bg-gradient-to-b from-stone-900 to-stone-950 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display text-mystic-goldLight mb-6">
            Begin Your Walk Today
          </h2>
          <p className="text-xl font-serif text-stone-400 mb-8">
            Join us. It costs nothing but an open heart.
          </p>
          <div className="flex justify-center">
             <NewsletterForm />
          </div>
        </div>
      </section>

      <footer className="py-12 bg-black text-center border-t border-stone-900">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
          <h4 className="font-display text-mystic-gold tracking-widest text-lg mb-4">WALKING WITH JESUS</h4>
          <div className="flex gap-6 text-stone-600 text-sm font-serif mb-8">
            <a href="#" className="hover:text-stone-400 transition">About</a>
            <a href="#" className="hover:text-stone-400 transition">Beliefs</a>
            <a href="#" className="hover:text-stone-400 transition">Contact</a>
            <a href="#" className="hover:text-stone-400 transition">Privacy</a>
          </div>
          <p className="text-stone-700 text-xs">
            © {new Date().getFullYear()} Walking with Jesus. All rights reserved.<br/>
            Made with love and reverence.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;