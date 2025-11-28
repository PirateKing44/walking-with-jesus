import React from 'react';
import { BookOpen, Heart, Sun, Feather, Mail, Brain, Shield, Gift } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Mail className="w-7 h-7" />,
      title: "Every Morning at 7am",
      description: "Start your day grounded in love. A 2-minute meditation arrives in your inbox before the chaos begins.",
      benefit: "Perfect morning routine"
    },
    {
      icon: <Brain className="w-7 h-7" />,
      title: "AI-Personalized Wisdom",
      description: "Each message uniquely crafted to meet you where you are. Ancient teachings meet modern understanding.",
      benefit: "Personal spiritual guidance"
    },
    {
      icon: <BookOpen className="w-7 h-7" />,
      title: "Lost Mystical Teachings",
      description: "Desert Fathers, Christian mystics, and forgotten contemplative traditions—stripped of dogma, full of grace.",
      benefit: "Deeper faith connection"
    },
    {
      icon: <Heart className="w-7 h-7" />,
      title: "Crisis Support Prayers",
      description: "Special meditations for anxiety, grief, depression, and dark nights of the soul. Never walk alone.",
      benefit: "Strength in hard times"
    },
    {
      icon: <Feather className="w-7 h-7" />,
      title: "Poetry & Sacred Art",
      description: "Every email includes contemplative imagery and verses. Beauty as a path to the divine.",
      benefit: "Soul-nourishing aesthetics"
    },
    {
      icon: <Gift className="w-7 h-7" />,
      title: "100% Free Forever",
      description: "No paywalls, no upsells, no premium tiers. This is a ministry of love, not a business.",
      benefit: "Accessible to all"
    }
  ];

  return (
    <section id="features" className="py-24 px-4 bg-stone-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display text-mystic-goldLight mb-4">
            What You'll Receive
          </h2>
          <p className="text-xl font-serif text-stone-400 leading-relaxed">
            Everything you need to cultivate a contemplative practice that fits your modern life
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((f, idx) => (
            <div 
              key={idx} 
              className="flex flex-col p-8 bg-stone-900/40 border border-stone-800 rounded-xl hover:border-mystic-gold/30 hover:bg-stone-900/60 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-lg bg-stone-800 border border-stone-700 flex items-center justify-center text-mystic-gold group-hover:scale-110 group-hover:border-mystic-gold/50 transition-all duration-300 shadow-lg flex-shrink-0">
                  {f.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-display text-stone-200 mb-2 leading-tight">{f.title}</h3>
                  <span className="inline-block text-xs font-display text-mystic-gold/70 tracking-wider uppercase">
                    {f.benefit}
                  </span>
                </div>
              </div>
              <p className="text-stone-400 font-serif leading-relaxed text-base">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl font-serif text-stone-300 mb-6">
            All of this, delivered to your inbox every single morning
          </p>
          <a 
            href="#newsletter" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-mystic-gold text-mystic-900 font-display font-medium tracking-wider rounded-lg hover:bg-[#c5a028] shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300"
          >
            Start Your Journey Today
            <Sun className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};