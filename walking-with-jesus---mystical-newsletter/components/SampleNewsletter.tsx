import React from 'react';
import { Mail, Calendar, Clock } from 'lucide-react';

export const SampleNewsletter: React.FC = () => {
  return (
    <section id="sample" className="py-24 px-4 bg-stone-900 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display text-mystic-goldLight mb-4">
            See What Arrives in Your Inbox
          </h2>
          <p className="text-xl font-serif text-stone-400">
            Here's exactly what you'll receive every morning
          </p>
        </div>

        {/* Email Preview */}
        <div className="bg-stone-950 border-2 border-stone-800 rounded-2xl overflow-hidden shadow-2xl">
          {/* Email Header */}
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 px-6 py-4 border-b border-stone-700">
            <div className="flex items-center gap-3 mb-2">
              <Mail className="w-5 h-5 text-mystic-gold" />
              <span className="font-display text-mystic-gold tracking-wider">WALKING WITH JESUS</span>
            </div>
            <h3 className="text-xl md:text-2xl font-display text-stone-200">
              Today's Meditation: Finding Peace in the Storm
            </h3>
            <div className="flex items-center gap-4 mt-2 text-sm text-stone-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span className="font-serif">Monday, November 28</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span className="font-serif">2-min read</span>
              </div>
            </div>
          </div>

          {/* Email Body */}
          <div className="p-8 md:p-12">
            {/* Featured Image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <img 
                src="https://picsum.photos/id/1015/800/400" 
                alt="Peaceful landscape" 
                className="w-full h-48 md:h-64 object-cover sepia-[0.3]"
                loading="lazy"
              />
            </div>

            {/* Opening */}
            <div className="mb-8">
              <p className="text-mystic-gold font-display text-sm tracking-widest uppercase mb-3">
                Good Morning, Beloved
              </p>
              <p className="text-lg md:text-xl font-serif text-stone-300 leading-relaxed mb-4">
                Today, before the world rushes in with its demands and noise, I want you to remember something ancient and true:
              </p>
            </div>

            {/* Main Quote */}
            <div className="bg-stone-900/50 border-l-4 border-mystic-gold p-6 md:p-8 mb-8 rounded-r-lg">
              <p className="text-2xl md:text-3xl font-serif text-mystic-goldLight italic leading-relaxed mb-4">
                "Peace I leave with you; my peace I give you. Not as the world gives do I give to you. 
                Let not your hearts be troubled, neither let them be afraid."
              </p>
              <p className="text-stone-500 font-display text-sm tracking-wider">
                — JOHN 14:27
              </p>
            </div>

            {/* Reflection */}
            <div className="space-y-4 mb-8">
              <p className="text-base md:text-lg font-serif text-stone-400 leading-relaxed">
                Notice Jesus doesn't say "if you follow all the rules" or "when you finally have your life together." 
                He simply gives. Peace is already yours—not earned, not achieved, but freely given.
              </p>
              
              <p className="text-base md:text-lg font-serif text-stone-400 leading-relaxed">
                The storms will come today. Emails that trigger anxiety. People who misunderstand you. Tasks 
                that feel impossible. But underneath it all, there is a peace that the world cannot give and 
                cannot take away.
              </p>

              <p className="text-base md:text-lg font-serif text-stone-400 leading-relaxed">
                This peace doesn't depend on circumstances changing. It depends on you remembering who you are: 
                deeply loved, held, and never alone.
              </p>
            </div>

            {/* Practice */}
            <div className="bg-stone-800/30 border border-stone-700 rounded-xl p-6 mb-8">
              <h4 className="text-xl font-display text-mystic-gold mb-4 flex items-center gap-2">
                <span className="text-2xl">🙏</span>
                Today's Practice
              </h4>
              <p className="text-stone-300 font-serif leading-relaxed mb-3">
                When chaos arrives today (and it will), pause for just 10 seconds. Place your hand on your 
                heart. Breathe deeply. Whisper:
              </p>
              <p className="text-lg font-serif italic text-mystic-goldLight text-center py-3">
                "Peace is already mine. I am held by Love."
              </p>
              <p className="text-stone-400 font-serif text-sm">
                That's it. No performance required. Just remembering.
              </p>
            </div>

            {/* Closing */}
            <div className="text-center py-6 border-t border-stone-800">
              <p className="text-lg font-serif text-stone-400 mb-2">
                You are so loved.
              </p>
              <p className="font-display text-mystic-gold tracking-wider">
                WALK IN PEACE TODAY
              </p>
            </div>
          </div>

          {/* Email Footer */}
          <div className="bg-stone-950 px-6 py-4 border-t border-stone-800 text-center">
            <p className="text-sm text-stone-600 font-serif mb-2">
              Walking with Jesus • Daily Mystical Meditations
            </p>
            <p className="text-xs text-stone-700 font-serif">
              Sent with love every morning at 7am
            </p>
          </div>
        </div>

        {/* CTA Below Sample */}
        <div className="mt-12 text-center">
          <p className="text-xl font-serif text-stone-300 mb-6">
            Ready to receive this every morning?
          </p>
          <a 
            href="#newsletter" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-mystic-gold text-mystic-900 font-display font-medium tracking-wider rounded-lg hover:bg-[#c5a028] shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300"
          >
            Yes, Send Me This Daily
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
