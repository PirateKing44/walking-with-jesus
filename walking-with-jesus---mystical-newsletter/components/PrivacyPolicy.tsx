import React from 'react';
import { Shield, Mail, Lock, Eye } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <section id="privacy" className="py-24 px-4 bg-stone-950 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Shield className="w-16 h-16 text-mystic-gold mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-display text-mystic-goldLight mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg font-serif text-stone-400">
            Last updated: November 28, 2025
          </p>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <div className="bg-stone-900/50 border border-stone-800 rounded-2xl p-8 md:p-12 space-y-8 font-serif text-stone-300 leading-relaxed">
            
            <div>
              <h2 className="text-2xl font-display text-mystic-gold mb-4 flex items-center gap-3">
                <Mail className="w-6 h-6" />
                What We Collect
              </h2>
              <p className="mb-4">
                When you subscribe to Walking with Jesus, we collect:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your email address (required for newsletter delivery)</li>
                <li>Subscription date and time</li>
                <li>Email engagement data (opens, clicks) for improving content</li>
                <li>Basic analytics data (page views, device type) via Google Analytics</li>
              </ul>
              <p className="mt-4 text-stone-400 italic">
                We do NOT collect your name, address, phone number, or any other personal information 
                unless you voluntarily provide it when contacting us.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display text-mystic-gold mb-4 flex items-center gap-3">
                <Lock className="w-6 h-6" />
                How We Use Your Data
              </h2>
              <p className="mb-4">
                We use your information solely to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Send you daily meditation emails</li>
                <li>Improve our content based on what resonates with readers</li>
                <li>Respond to your questions or support requests</li>
                <li>Ensure technical functionality of our service</li>
              </ul>
              <p className="mt-4 font-semibold text-mystic-goldLight">
                We will NEVER sell, rent, or share your email with third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display text-mystic-gold mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6" />
                Third-Party Services
              </h2>
              <p className="mb-4">
                We use trusted third-party services to operate our newsletter:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Email Service Provider</strong> (ConvertKit/Mailchimp/Beehiiv) - stores your email and sends newsletters</li>
                <li><strong>Google Analytics</strong> - tracks anonymous website usage to improve user experience</li>
                <li><strong>Google Gemini AI</strong> - generates personalized meditation content (no personal data sent)</li>
              </ul>
              <p className="mt-4 text-stone-400">
                These services have their own privacy policies and security measures. We've chosen providers 
                that comply with GDPR and CCPA regulations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display text-mystic-gold mb-4">
                Your Rights
              </h2>
              <p className="mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Unsubscribe</strong> at any time via the link in every email</li>
                <li><strong>Request data deletion</strong> by emailing hello@walkingwithjesus.com</li>
                <li><strong>Access your data</strong> - we'll provide what we have on file</li>
                <li><strong>Correct inaccuracies</strong> in your email address</li>
                <li><strong>Opt out of analytics</strong> using browser extensions or Do Not Track</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display text-mystic-gold mb-4">
                Data Security
              </h2>
              <p>
                We take security seriously. Your data is:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Transmitted via encrypted HTTPS connections</li>
                <li>Stored on secure servers with access controls</li>
                <li>Never shared publicly or sold to third parties</li>
                <li>Backed up regularly to prevent data loss</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display text-mystic-gold mb-4">
                Cookies
              </h2>
              <p>
                We use minimal cookies for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Remembering your newsletter signup status</li>
                <li>Google Analytics tracking (anonymous)</li>
                <li>Improving website performance</li>
              </ul>
              <p className="mt-4 text-stone-400">
                You can disable cookies in your browser settings, though some features may not work properly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display text-mystic-gold mb-4">
                Children's Privacy
              </h2>
              <p>
                Our service is not directed at children under 13. We do not knowingly collect data from 
                children. If you believe a child has provided us with personal information, please contact 
                us immediately.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display text-mystic-gold mb-4">
                Changes to This Policy
              </h2>
              <p>
                We may update this privacy policy occasionally. Changes will be posted on this page with 
                an updated "Last modified" date. For significant changes, we'll notify subscribers via email.
              </p>
            </div>

            <div className="bg-stone-950 border border-stone-700 rounded-xl p-6 mt-8">
              <h2 className="text-2xl font-display text-mystic-gold mb-4">
                Questions?
              </h2>
              <p className="mb-4">
                If you have any questions about how we handle your data, please reach out:
              </p>
              <a 
                href="mailto:privacy@walkingwithjesus.com" 
                className="text-mystic-goldLight hover:text-mystic-gold underline underline-offset-4 font-display"
              >
                privacy@walkingwithjesus.com
              </a>
              <p className="mt-4 text-stone-400 text-sm">
                We aim to respond within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
