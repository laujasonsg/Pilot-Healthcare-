
import React from 'react';
import { MinimalistButton } from './MinimalistButton';

interface DisclaimerModalProps {
  onAcknowledge: () => void;
}

export const DisclaimerModal: React.FC<DisclaimerModalProps> = ({ onAcknowledge }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-midnight/95 backdrop-blur-sm animate-in fade-in duration-700">
      <div className="max-w-2xl w-full border border-cream/10 bg-midnight p-12 md:p-20 text-center space-y-12 shadow-2xl">
        <div className="space-y-8">
          <header>
            <h2 className="font-sans text-sm md:text-base tracking-[0.3em] uppercase font-bold text-cream mb-2">
              Important Disclaimer
            </h2>
            <div className="w-8 h-[1px] bg-cream/30 mx-auto mt-4"></div>
          </header>
          
          <p className="text-lg md:text-xl font-serif leading-relaxed text-cream/90">
            This AI screening tool is for informational and wellness purposes only. It is not a substitute for professional clinical diagnosis or emergency monitoring. If you are experiencing severe symptoms, please contact emergency services or your doctor immediately.
          </p>
        </div>
        
        <div className="pt-4">
          <MinimalistButton onClick={onAcknowledge}>
            I ACKNOWLEDGE
          </MinimalistButton>
        </div>
      </div>
    </div>
  );
};
