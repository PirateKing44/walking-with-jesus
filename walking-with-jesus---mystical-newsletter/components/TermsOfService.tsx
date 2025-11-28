import React from 'react';
import { FileText, AlertCircle, Heart } from 'lucide-react';

export const TermsOfService: React.FC = () => {
  return (
    <section id="terms" className="py-24 px-4 bg-stone-950 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <FileText className="w-16 h-16 text-mystic-gold mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-display text-mystic-goldLight mb-4">
            Terms of Service
          </h1>
          <p className="text-lg font-serif text-stone-400">
            Last updated: November 28, 2025
          </p>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <div className="bg-stone-900/50 border border-stone-800 rounded-2xl p-8 md:p-12 space-y-8 font-serif text-stone-300 leading-relaxed">
            
            <div className="bg-mystic-gold/10 border border-mystic-gold/30 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-mystic-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-xl text-mystic-gold mb-2">Our Promise</h3>
                  <p className="text-stone-300">
                    These terms are simple because our service is simple: we send you beautiful, 
                    contemplative emails. No tricks, no hidden fees, just love and wisdom.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-display text-mystic-gold mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By subscribing to Walking with Jesus, you agree to these Terms of Service. If you don't 
                agree, please don't subscribe (but we hope you do—we'd love to walk with you).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display text-mystic-gold mb-4">
                2. Our Service
              </h2>
              <p className="mb-4">
                Walking with Jesus provides:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Daily email meditations at 7am (local time)</li>
                <li>Access to our AI-powered mystical message generator</li>
                <li>A supportive spiritual community</li>
                <li>Free content—always and forever</li>
              </ul>
              <p className="mt-4 text-stone-400">
                We reserve the right to modify, suspend, or discontinue any part of the service 
                (though we have no plans to do so).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display text-mystic-gold mb-4">
                3. Your Responsibilities
              </h2>
              <p className="mb-4">
                You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide a valid email address</li>
                <li>Not use our service for spam or illegal activities</li>
                <li>Respect the contemplative nature of this community</li>
                <li>Not reproduce or distribute our content without permission</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display text-mystic-gold mb-4 flex items-center gap-3">
                <AlertCircle className="w-6 h-6" />
                4. Content Disclaimer
              </h2>
              <p className="mb-4">
                Important things to know:
              </p>
              <ul className="list-disc list-inside space-y-3 ml-4">
                <li>
                  <strong>Not Professional Advice:</strong> Our meditations are spiritual guidance, 
                  not therapy, medical advice, or professional counseling. If you're struggling with 
                  mental health, please seek qualified help.
                </li>
                <li>
                  <strong>AI-Enhanced Content:</strong> Some messages are generated using AI (Google Gemini), 
                  then reviewed and edited by humans. We strive for accuracy and compassion, but technology isn't perfect.
                </li>
                <li>
                  <strong>Religious Perspective:</strong> We offer a mystical, contemplative interpretation 
                  of Christianity. Other denominations or traditions may disagree with our approach—and that's okay.
                </li>
                <li>
                  <strong>No Guarantees:</strong> Spiritual practice is deeply personal. We can't guarantee 
                  specific outcomes or transformations.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display text-mystic-gold mb-4">
                5. Intellectual Property
              </h2>
              <p>
                All content (text, images, design) is owned by Walking with Jesus or licensed to us. 
                You may:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Read and enjoy our emails personally</li>
                <li>Share individual meditations with proper attribution</li>
                <li>Quote excerpts with credit (please link back!)</li>
              </ul>
              <p className="mt-4">
                You may NOT:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Republish entire emails elsewhere</li>
                <li>Create derivative works for commercial use</li>
                <li>Scrape or systematically download our content</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display text-mystic-gold mb-4">
                6. Unsubscribing
              </h2>
              <p>
                You can unsubscribe anytime with one click. No hard feelings. Your spiritual journey 
                is yours to navigate, and we honor wherever it leads you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display text-mystic-gold mb-4">
                7. Limitation of Liability
              </h2>
              <p>
                Walking with Jesus is provided "as is" without warranties. We're not liable for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Technical issues (email delivery, website downtime)</li>
                <li>Decisions you make based on our content</li>
                <li>Third-party service failures</li>
                <li>Any indirect or consequential damages</li>
              </ul>
              <p className="mt-4 text-stone-400 text-sm">
                (Legal requirement, but please know we genuinely care about your wellbeing.)
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display text-mystic-gold mb-4">
                8. Donations & Support
              </h2>
              <p>
                Our newsletter is free. If we accept donations in the future, they're voluntary gifts 
                with no expectation of special treatment or additional services. All donations are final 
                and non-refundable.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display text-mystic-gold mb-4">
                9. Changes to Terms
              </h2>
              <p>
                We may update these terms occasionally. We'll notify subscribers of significant changes 
                via email. Continued use of our service after changes constitutes acceptance.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display text-mystic-gold mb-4">
                10. Governing Law
              </h2>
              <p>
                These terms are governed by the laws of [Your State/Country]. Any disputes will be 
                resolved through mediation or binding arbitration—but honestly, we'd rather just talk 
                it out over email.
              </p>
            </div>

            <div className="bg-stone-950 border border-stone-700 rounded-xl p-6 mt-8">
              <h2 className="text-2xl font-display text-mystic-gold mb-4">
                Questions or Concerns?
              </h2>
              <p className="mb-4">
                If something in these terms concerns you or seems unclear, please reach out. 
                We're real humans who care about this community.
              </p>
              <a 
                href="mailto:hello@walkingwithjesus.com" 
                className="text-mystic-goldLight hover:text-mystic-gold underline underline-offset-4 font-display"
              >
                hello@walkingwithjesus.com
              </a>
            </div>

            <div className="text-center pt-8 border-t border-stone-700">
              <p className="text-stone-400 italic">
                Thank you for walking this path with us. 🙏
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
