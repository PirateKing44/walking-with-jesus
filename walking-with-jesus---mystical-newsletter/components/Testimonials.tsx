import React from 'react';
import { Testimonial } from '../types';

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Teacher",
    quote: "I was tired of the noise and the anger in modern religion. This newsletter feels like sitting by a fire with an old friend who loves you deeply.",
    image: "https://picsum.photos/id/64/100/100"
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Artist",
    quote: "The mystical perspective opened my eyes. It's not about rules; it's about a presence. 'Walking with Jesus' helps me find that presence every morning.",
    image: "https://picsum.photos/id/91/100/100"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Hospice Nurse",
    quote: "In my line of work, I need deep wells of strength. These daily letters are my water. They are simple, profound, and incredibly holding.",
    image: "https://picsum.photos/id/338/100/100"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-stone-900 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display text-mystic-goldLight mb-4">Voices from the Path</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-mystic-gold/50 to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-stone-800/30 p-8 rounded-xl border border-stone-800 hover:border-mystic-gold/20 transition duration-300">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full border border-stone-600 object-cover sepia-[0.5]" 
                />
                <div>
                  <h4 className="font-display text-stone-200">{t.name}</h4>
                  <p className="text-xs font-serif text-stone-500 uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
              <p className="font-serif text-lg text-stone-300 italic leading-relaxed">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};