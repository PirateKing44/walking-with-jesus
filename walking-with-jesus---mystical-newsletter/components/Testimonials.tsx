import React from 'react';
import { Testimonial } from '../types';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Former Church Leader • Now Spiritual Seeker",
    quote: "After leaving organized religion, I felt spiritually homeless. These meditations gave me back my connection to Jesus—without the toxic theology. I cry tears of relief most mornings.",
    image: "https://picsum.photos/id/64/100/100"
  },
  {
    id: 2,
    name: "Marcus T.",
    role: "Artist & Recovering Perfectionist",
    quote: "I spent 30 years trying to earn God's love through performance. This newsletter reminds me daily that I'm already loved. It's healing decades of religious trauma, 2 minutes at a time.",
    image: "https://picsum.photos/id/91/100/100"
  },
  {
    id: 3,
    name: "Elena R.",
    role: "Hospice Nurse • Caregiver",
    quote: "Working with death and grief requires deep wells of strength. These daily letters are my lifeline. They don't preach—they hold me. Exactly what my soul needs before the day begins.",
    image: "https://picsum.photos/id/338/100/100"
  },
  {
    id: 4,
    name: "David K.",
    role: "Atheist Turned Mystic",
    quote: "I never thought I'd read anything Christian again. But this isn't 'Christian' in the institutional sense—it's mystical, poetic, and actually helpful. It's what I wish church had been.",
    image: "https://picsum.photos/id/177/100/100"
  },
  {
    id: 5,
    name: "Rachel L.",
    role: "Anxiety Warrior • LGBTQ+ Affirming",
    quote: "As a queer woman, most Christian content feels unsafe. But this? This is pure love. No judgment. No agenda. Just contemplative beauty that makes me feel held by something bigger.",
    image: "https://picsum.photos/id/399/100/100"
  },
  {
    id: 6,
    name: "James P.",
    role: "Therapist • Meditation Teacher",
    quote: "I've studied Buddhism, mindfulness, and Christian contemplation for years. This newsletter synthesizes it all beautifully. I recommend it to clients seeking spiritual grounding without dogma.",
    image: "https://picsum.photos/id/433/100/100"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-4 bg-stone-900 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-mystic-gold fill-mystic-gold" />
            ))}
          </div>
          <h2 className="text-3xl md:text-5xl font-display text-mystic-goldLight mb-4">
            Loved by 10,000+ Daily Readers
          </h2>
          <p className="text-xl font-serif text-stone-400 max-w-2xl mx-auto">
            Real stories from people finding peace, healing, and unconditional love
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-mystic-gold/50 to-transparent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id} 
              className="bg-gradient-to-br from-stone-800/40 to-stone-800/20 p-8 rounded-2xl border border-stone-800 hover:border-mystic-gold/30 hover:shadow-xl hover:shadow-mystic-gold/5 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Quote decoration */}
              <Quote className="absolute top-4 right-4 w-12 h-12 text-stone-800 opacity-50" />
              
              <div className="relative z-10">
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-mystic-gold fill-mystic-gold" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="font-serif text-base md:text-lg text-stone-300 leading-relaxed mb-6 relative">
                  "{t.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-stone-700">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-12 h-12 rounded-full border-2 border-stone-700 object-cover sepia-[0.3] group-hover:border-mystic-gold/30 transition-colors" 
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-display text-stone-200 text-sm">{t.name}</h4>
                    <p className="text-xs font-serif text-stone-500 leading-tight">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-stone-950/50 border border-stone-800 rounded-xl p-6">
            <div className="text-4xl md:text-5xl font-display text-mystic-gold mb-2">10,000+</div>
            <p className="text-stone-400 font-serif">Daily Subscribers</p>
          </div>
          <div className="bg-stone-950/50 border border-stone-800 rounded-xl p-6">
            <div className="text-4xl md:text-5xl font-display text-mystic-gold mb-2">4.9/5</div>
            <p className="text-stone-400 font-serif">Average Rating</p>
          </div>
          <div className="bg-stone-950/50 border border-stone-800 rounded-xl p-6">
            <div className="text-4xl md:text-5xl font-display text-mystic-gold mb-2">92%</div>
            <p className="text-stone-400 font-serif">Open Rate</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-xl font-serif text-stone-300 mb-6">
            Join this growing community of seekers
          </p>
          <a 
            href="#newsletter" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-mystic-gold text-mystic-900 font-display font-medium tracking-wider rounded-lg hover:bg-[#c5a028] shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300"
          >
            Start Your Free Journey
          </a>
        </div>
      </div>
    </section>
  );
};