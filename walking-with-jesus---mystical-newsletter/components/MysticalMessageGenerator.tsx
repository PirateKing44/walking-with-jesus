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
    try {
      const result = await generateMysticalMessage();
      setData(result);
      setState(LoadingState.SUCCESS);
    } catch (error) {
      console.error(error);
      setState(LoadingState.ERROR);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-16 p-1">
      <div className="bg-stone-900/60 border border-stone-800 rounded-xl overflow-hidden shadow-2xl relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-mystic-gold to-transparent opacity-50"></div>
        
        <div className="p-8 md:p-12 text-center">
          <div className="mb-6 flex justify-center">
            <div className="p-3 rounded-full bg-stone-800/50 border border-stone-700">
              <Sparkles className="w-6 h-6 text-mystic-gold animate-pulse" />
            </div>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-display text-stone-100 mb-4">
            Seek a Word for Your Heart
          </h3>
          <p className="text-stone-400 font-serif text-lg mb-8 max-w-xl mx-auto">
            Experience the kind of gentle, ancient wisdom you'll receive in your inbox. 
            Ask for a sign, and let the algorithm of grace speak to you.
          </p>

          {state === LoadingState.IDLE && (
            <Button onClick={handleGenerate} className="mx-auto">
              Receive a Sample Message
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
              <div className="relative bg-stone-950/50 p-8 rounded-lg border border-stone-800 mb-8">
                <Quote className="absolute top-4 left-4 w-8 h-8 text-stone-800" />
                <p className="font-serif text-2xl md:text-3xl text-mystic-goldLight italic leading-relaxed relative z-10">
                  "{data.message}"
                </p>
                <div className="mt-6 flex items-center justify-center">
                  <span className="h-px w-12 bg-stone-700"></span>
                  <span className="mx-4 text-stone-500 font-display text-sm tracking-widest uppercase">
                    {data.scriptureReference}
                  </span>
                  <span className="h-px w-12 bg-stone-700"></span>
                </div>
              </div>
              <Button onClick={handleGenerate} variant="secondary" className="mx-auto">
                <RefreshCw className="w-4 h-4 mr-2" />
                Receive Another
              </Button>
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