import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How often will I receive emails?",
      answer: "Every single morning at 7am (your local time). You'll receive one beautiful, contemplative meditation to start your day. No spam, no promotions—just pure spiritual nourishment."
    },
    {
      question: "Is this affiliated with a specific church or denomination?",
      answer: "No. Walking with Jesus is an independent spiritual ministry focused on the mystical, contemplative heart of Christianity. We draw from Desert Fathers, Christian mystics, and universal teachings of Christ—without denominational dogma. All seekers are welcome."
    },
    {
      question: "Is it really free? What's the catch?",
      answer: "Yes, completely free forever. There's no catch, no premium tier, no upsells. This is a labor of love and ministry. If you feel moved to support our work, we'll share ways to contribute, but it's never required."
    },
    {
      question: "What if I'm not religious or questioning my faith?",
      answer: "You're exactly who we're writing for. Many subscribers are spiritual-but-not-religious, deconstructing their faith, or exploring Christianity from outside. We focus on love, contemplation, and inner transformation—not doctrine or rules."
    },
    {
      question: "Can I unsubscribe anytime?",
      answer: "Of course! Every email includes a one-click unsubscribe link. No questions asked, no guilt trips. Your spiritual journey is yours to navigate."
    },
    {
      question: "What makes this different from other devotionals?",
      answer: "Three things: (1) We're AI-enhanced but human-hearted—each message is crafted with care. (2) We focus on mystical, contemplative Christianity instead of evangelical teaching. (3) Beautiful design and poetry make this feel like art, not a religious email."
    },
    {
      question: "Do you share my email address?",
      answer: "Never. Your email stays with us. We don't sell, rent, or share subscriber data. Period. See our Privacy Policy for full details."
    },
    {
      question: "What if I miss a day?",
      answer: "No problem! Each meditation stands alone. There's no sequence to follow. Jump back in whenever you're ready—grace doesn't have attendance requirements."
    }
  ];

  return (
    <section id="faq" className="py-24 px-4 bg-stone-900 relative scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display text-mystic-goldLight mb-4">
            Questions & Answers
          </h2>
          <p className="text-xl font-serif text-stone-400">
            Everything you need to know before you begin
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-stone-950/50 border border-stone-800 rounded-lg overflow-hidden hover:border-mystic-gold/20 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-stone-900/30 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-display text-stone-200 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-mystic-gold flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-stone-400 font-serif leading-relaxed text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center p-8 bg-stone-950 border border-stone-800 rounded-xl">
          <h3 className="text-xl font-display text-mystic-gold mb-3">
            Still have questions?
          </h3>
          <p className="text-stone-400 font-serif mb-4">
            We're here to help. Send us an email and we'll respond with care.
          </p>
          <a
            href="mailto:hello@walkingwithjesus.com"
            className="inline-flex items-center text-mystic-goldLight hover:text-mystic-gold font-serif underline underline-offset-4 transition-colors"
          >
            hello@walkingwithjesus.com
          </a>
        </div>
      </div>
    </section>
  );
};
