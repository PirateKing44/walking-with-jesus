import React from 'react';
import { Heart, BookHeart, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-stone-950 to-stone-900 relative overflow-hidden scroll-mt-20">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-mystic-gold/50"></div>
            <Heart className="w-6 h-6 text-mystic-gold" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-mystic-gold/50"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-display text-mystic-goldLight mb-6">
            Our Story
          </h2>
          <p className="text-xl font-serif text-stone-400 max-w-3xl mx-auto">
            Why we created this sacred space for weary souls
          </p>
        </div>

        {/* Story Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <div className="bg-stone-900/50 border border-stone-800 rounded-2xl p-8 md:p-12 mb-12">
            <p className="text-xl md:text-2xl font-serif text-stone-300 leading-relaxed mb-6 first-letter:text-5xl first-letter:font-display first-letter:text-mystic-gold first-letter:mr-2 first-letter:float-left first-letter:leading-none first-letter:mt-1">
              This newsletter began with a simple question: <em>What if we could strip away 2,000 years 
              of institutional religion and reconnect with the raw, mystical love at the heart of Christ's message?</em>
            </p>
            
            <p className="text-lg font-serif text-stone-400 leading-relaxed mb-6">
              Too many of us have been wounded by religion. Judged. Excluded. Told we're not worthy unless 
              we believe the "right" things. But that's not what Jesus taught. He walked with outcasts, 
              loved unconditionally, and spoke in parables about vineyards and seeds—not systematic theology.
            </p>

            <p className="text-lg font-serif text-stone-400 leading-relaxed mb-6">
              We created <span className="text-mystic-gold font-display">Walking with Jesus</span> for 
              everyone who's been hurt by church but still longs for the sacred. For seekers who crave 
              depth, not doctrine. For busy souls who need 2 minutes of peace before chaos arrives.
            </p>

            <p className="text-lg font-serif text-stone-400 leading-relaxed">
              Drawing from Desert Fathers, Christian mystics like Meister Eckhart and Julian of Norwich, 
              and the contemplative tradition that predates denominations, we offer what ancient Christians 
              called <em>lectio divina</em>—sacred reading that transforms you from within.
            </p>
          </div>

          {/* Our Principles */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-stone-800/30 border border-stone-800 rounded-xl p-6 text-center">
              <BookHeart className="w-10 h-10 text-mystic-gold mx-auto mb-4" />
              <h3 className="text-xl font-display text-stone-200 mb-3">Love Over Law</h3>
              <p className="text-stone-400 font-serif">
                We believe in radical inclusion, not gatekeeping. Christ's table has room for everyone.
              </p>
            </div>
            
            <div className="bg-stone-800/30 border border-stone-800 rounded-xl p-6 text-center">
              <Sparkles className="w-10 h-10 text-mystic-gold mx-auto mb-4" />
              <h3 className="text-xl font-display text-stone-200 mb-3">Mystery Over Certainty</h3>
              <p className="text-stone-400 font-serif">
                We embrace the mystical unknown. Faith is a journey, not a destination with all answers.
              </p>
            </div>
            
            <div className="bg-stone-800/30 border border-stone-800 rounded-xl p-6 text-center">
              <Heart className="w-10 h-10 text-mystic-gold mx-auto mb-4" />
              <h3 className="text-xl font-display text-stone-200 mb-3">Practice Over Belief</h3>
              <p className="text-stone-400 font-serif">
                Transformation comes through contemplation, not intellectual agreement with doctrines.
              </p>
            </div>
          </div>

          {/* Personal Note */}
          <div className="bg-gradient-to-br from-stone-950 to-stone-900 border-2 border-mystic-gold/30 rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-mystic-gold/10 border border-mystic-gold/30 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">✨</span>
              </div>
              <div>
                <h3 className="text-2xl font-display text-mystic-gold mb-2">A Personal Invitation</h3>
                <p className="text-stone-400 font-serif italic">From the founding team</p>
              </div>
            </div>
            
            <p className="text-lg font-serif text-stone-300 leading-relaxed mb-4">
              If you're reading this, you're probably tired. Tired of shallow spirituality. Tired of 
              religious performance. Tired of feeling like you don't belong because you ask too many questions.
            </p>
            
            <p className="text-lg font-serif text-stone-300 leading-relaxed">
              We see you. We've been you. And we promise: this space is different. Here, doubt is welcome. 
              Questions are sacred. And every morning, you'll receive a reminder that you are deeply, 
              unconditionally loved—exactly as you are.
            </p>

            <div className="mt-8 pt-6 border-t border-stone-800">
              <p className="font-display text-mystic-goldLight tracking-wider">
                Peace be with you,
              </p>
              <p className="font-serif text-stone-400 italic mt-2">
                The Walking with Jesus Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
