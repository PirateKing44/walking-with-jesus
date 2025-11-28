import React, { useState } from 'react';
import { generateMysticalMessage } from '../services/geminiService';
import { MysticalMessageResponse, LoadingState } from '../types';
import { Button } from './Button';
import { Sparkles, RefreshCw, Quote } from 'lucide-react';

export const MysticalMessageGenerator: React.FC = () => {
  const [state, setState] = useState<LoadingState>(LoadingState.IDLE);
  const [data, setData] = useState<MysticalMessageResponse | null>(null);

  const handleGenerate = async () => {
    setState(LoadingState.LOADING);
    
    // Track analytics event
    if (window.gtag) {
      window.gtag('event', 'sample_message_generated', {
        event_category: 'engagement',
      });
    }
    
    try {
      const result = await generateMysticalMessage();
      setData(result);
      setState(LoadingState.SUCCESS);
    } catch (error) {
      console.error(error);
      setState(LoadingState.ERROR);
    }
  };

  // Type augmentation for gtag
  declare global {
    interface Window {
      gtag?: (...args: any[]) => void;
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto my-16 px-4">
      <div className="bg-stone-900/60 border-2 border-stone-800 rounded-2xl overflow-hidden shadow-2xl relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-mystic-gold to-transparent opacity-50"></div>
        
        <div className="p-6 md:p-12 text-center">
          <div className="mb-6 flex justify-center">
            <div className="p-4 rounded-full bg-stone-800/50 border-2 border-stone-700">
              <Sparkles className="w-8 h-8 text-mystic-gold animate-pulse" />
            </div>
          </div>
          
          <h3 className="text-2xl md:text-4xl font-display text-stone-100 mb-4 leading-tight">
            Experience a Sample Message
          </h3>
          <p className="text-stone-400 font-serif text-base md:text-lg mb-4 max-w-2xl mx-auto leading-relaxed">
            Try our AI-powered wisdom generator. See the kind of personalized, contemplative 
            messages you'll receive daily in your inbox.
          </p>
          <p className="text-stone-500 font-serif text-sm mb-8 italic">
            Each message is uniquely crafted to meet you exactly where you are today
          </p>

          {state === LoadingState.IDLE && (
            <Button onClick={handleGenerate} className="mx-auto text-base md:text-lg px-8 py-4">
              <Sparkles className="w-5 h-5 mr-2" />
              Generate My Message
            </Button>
          )}

          {state === LoadingState.LOADING && (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="w-16 h-16 border-4 border-mystic-gold/20 border-t-mystic-gold rounded-full animate-spin mb-4"></div>
              <p className="text-mystic-gold font-display animate-pulse">Consulting the archives of wisdom...</p>
            </div>
          )}

          {state === LoadingState.SUCCESS && data && (
            <div className="animate-fade-in-up">
              <div className="relative bg-stone-950/50 p-6 md:p-10 rounded-xl border-2 border-stone-800 mb-8">
                <Quote className="absolute top-4 left-4 w-10 h-10 md:w-12 md:h-12 text-stone-800 opacity-50" />
                <p className="font-serif text-xl md:text-3xl text-mystic-goldLight italic leading-relaxed relative z-10 mb-6">
                  "{data.message}"
                </p>
                <div className="flex items-center justify-center">
                  <span className="h-px w-8 md:w-12 bg-stone-700"></span>
                  <span className="mx-3 md:mx-4 text-stone-500 font-display text-xs md:text-sm tracking-widest uppercase">
                    {data.scriptureReference}
                  </span>
                  <span className="h-px w-8 md:w-12 bg-stone-700"></span>
                </div>
              </div>
              
              <div className="bg-mystic-gold/10 border border-mystic-gold/30 rounded-lg p-4 md:p-6 mb-6">
                <p className="text-stone-300 font-serif text-sm md:text-base mb-3">
                  ✨ <strong>Imagine receiving this quality of wisdom every morning at 7am</strong>
                </p>
                <p className="text-stone-400 font-serif text-xs md:text-sm">
                  Personalized. Contemplative. Completely free.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={handleGenerate} variant="secondary" className="mx-auto sm:mx-0">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Generate Another
                </Button>
                <a href="#newsletter">
                  <Button className="mx-auto sm:mx-0 w-full sm:w-auto">
                    Yes, Send Me This Daily
                  </Button>
                </a>
              </div>
            </div>
          )}

          {state === LoadingState.ERROR && (
            <div className="text-red-400 font-serif">
              <p className="mb-4">The winds are quiet. Please try again later.</p>
              <Button onClick={handleGenerate} variant="secondary">Try Again</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};