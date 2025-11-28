import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Mail, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { subscribeToNewsletter } from '../services/emailService';

interface NewsletterFormProps {
  showConfetti?: boolean;
}

export const NewsletterForm: React.FC<NewsletterFormProps> = ({ showConfetti = true }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [showConfettiState, setShowConfettiState] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    setMessage('');
    
    try {
      const result = await subscribeToNewsletter(email);
      
      if (result.success) {
        setStatus('success');
        setMessage(result.message);
        setEmail('');
        
        if (showConfetti) {
          setShowConfettiState(true);
          // Hide confetti after 5 seconds
          setTimeout(() => setShowConfettiState(false), 5000);
        }
      } else {
        setStatus('error');
        setMessage(result.message);
      }
    } catch (error) {
      setStatus('error');
      setMessage('An unexpected error occurred. Please try again.');
      console.error('Subscription error:', error);
    }
  };

  if (status === 'success') {
    return (
      <>
        {showConfettiState && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {/* Simple CSS confetti effect */}
            <div className="confetti-container">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="confetti"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    backgroundColor: ['#d4af37', '#fcd34d', '#f3e5ab', '#7f1d1d'][Math.floor(Math.random() * 4)],
                  }}
                />
              ))}
            </div>
          </div>
        )}
        
        <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border-2 border-green-500/40 p-8 rounded-2xl text-center animate-fade-in shadow-2xl max-w-md mx-auto">
          <div className="mb-4 inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full">
            <CheckCircle className="w-12 h-12 text-green-400" />
          </div>
          <h3 className="text-2xl md:text-3xl font-display text-mystic-gold mb-3">
            Welcome to the Journey! 🙏
          </h3>
          <p className="text-lg text-stone-200 font-serif mb-2">
            Your first meditation arrives tomorrow at 7am.
          </p>
          <p className="text-stone-400 font-serif text-sm mb-6">
            {message}
          </p>
          <div className="bg-stone-900/50 border border-stone-700 rounded-lg p-4 mb-6">
            <p className="text-stone-300 font-serif text-sm">
              💌 <strong>What's next:</strong> Check your email for a confirmation link. 
              Once confirmed, you'll start receiving daily wisdom.
            </p>
          </div>
          <button 
            onClick={() => setStatus('idle')}
            className="text-sm text-stone-400 hover:text-mystic-gold underline underline-offset-2 transition-colors font-serif"
          >
            Subscribe another email
          </button>
        </div>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto relative group" id="newsletter">
      <div className="absolute -inset-1 bg-gradient-to-r from-mystic-gold/20 via-mystic-accent/20 to-mystic-gold/20 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
      
      <div className="relative flex flex-col sm:flex-row gap-3 bg-mystic-900/90 p-3 rounded-xl border-2 border-stone-800 backdrop-blur-sm group-hover:border-mystic-gold/30 transition-colors">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-stone-500" />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@example.com"
            className="w-full pl-12 pr-4 py-4 bg-stone-900/70 border border-stone-700 rounded-lg focus:ring-2 focus:ring-mystic-gold focus:border-mystic-gold text-stone-200 placeholder-stone-500 font-serif text-base md:text-lg focus:outline-none transition-all"
            required
            disabled={status === 'loading'}
            aria-label="Email address"
          />
        </div>
        <Button 
          type="submit" 
          disabled={status === 'loading'} 
          className="sm:w-auto whitespace-nowrap px-6 md:px-8"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="animate-spin h-5 w-5 mr-2" />
              Subscribing...
            </>
          ) : (
            'Get Daily Wisdom'
          )}
        </Button>
      </div>
      
      {status === 'error' && (
        <div className="mt-4 flex items-start gap-2 bg-red-900/20 border border-red-500/30 rounded-lg p-4">
          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
          <p className="text-red-300 font-serif text-sm">{message}</p>
        </div>
      )}
      
      <div className="mt-4 flex items-center justify-center gap-6 text-stone-500 text-xs md:text-sm">
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="font-serif">Free forever</span>
        </div>
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="font-serif">Unsubscribe anytime</span>
        </div>
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="font-serif">No spam</span>
        </div>
      </div>

      <style>{`
        .confetti-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .confetti {
          position: absolute;
          width: 10px;
          height: 10px;
          top: -10px;
          animation: confetti-fall 3s linear forwards;
        }
        
        @keyframes confetti-fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </form>
  );
};