import React from 'react';
import { BookOpen, Heart, Sun, Feather } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Sun className="w-6 h-6" />,
      title: "Daily Light",
      description: "A short, radiant morning email to orient your compass towards love before the world rushes in."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Ancient Wisdom",
      description: "Forgotten sayings and mystical interpretations of Christ's teachings, stripped of modern dogma."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Deep Support",
      description: "Practices for difficult times. Learn to lean on a strength that is greater than your own."
    },
    {
      icon: <Feather className="w-6 h-6" />,
      title: "Contemplative Art",
      description: "Beautiful imagery and poetry included in every edition to soothe the soul through beauty."
    }
  ];

  return (
    <section className="py-24 px-4 bg-stone-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-mystic-gold mb-6 group-hover:scale-110 transition duration-300 group-hover:border-mystic-gold/50 shadow-lg shadow-stone-900">
                {f.icon}
              </div>
              <h3 className="text-xl font-display text-stone-200 mb-3">{f.title}</h3>
              <p className="text-stone-400 font-serif leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};