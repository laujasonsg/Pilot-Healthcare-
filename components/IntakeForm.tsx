
import React, { useState } from 'react';
import { MinimalistInput } from './MinimalistInput';
import { MinimalistButton } from './MinimalistButton';

interface IntakeFormProps {
  onSubmit: (data: any) => void;
}

export const IntakeForm: React.FC<IntakeFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    nric: ''
  });
  const [consentChecked, setConsentChecked] = useState(false);
  const [showConsentError, setShowConsentError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consentChecked) {
      setShowConsentError(true);
      // Reset error after a brief period
      setTimeout(() => setShowConsentError(false), 2000);
      return;
    }
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <main className="flex-grow flex flex-col items-center justify-center animate-in slide-in-from-bottom-4 fade-in duration-1000">
      <div className="w-full max-w-xl">
        <header className="mb-16 text-center">
          <h2 className="font-serif text-3xl mb-4 tracking-wider text-cream">Patient Information</h2>
          <p className="font-sans text-[10px] tracking-widest uppercase opacity-50 text-cream">New Case Registration</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            <div className="space-y-2">
              <label htmlFor="name" className="font-sans text-[10px] tracking-widest uppercase opacity-50 block text-cream">Full Legal Name</label>
              <MinimalistInput 
                id="name" 
                placeholder="Required" 
                value={formData.name} 
                onChange={handleChange} 
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="font-sans text-[10px] tracking-widest uppercase opacity-50 block text-cream">Email Address</label>
              <MinimalistInput 
                id="email" 
                type="email" 
                placeholder="Required" 
                value={formData.email} 
                onChange={handleChange} 
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="font-sans text-[10px] tracking-widest uppercase opacity-50 block text-cream">Contact Number</label>
              <MinimalistInput 
                id="phone" 
                placeholder="Required" 
                value={formData.phone} 
                onChange={handleChange} 
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="nric" className="font-sans text-[10px] tracking-widest uppercase opacity-50 block text-cream">Last 4 Digits NRIC</label>
              <MinimalistInput 
                id="nric" 
                placeholder="Required" 
                maxLength={4} 
                value={formData.nric} 
                onChange={handleChange} 
                required
              />
            </div>
          </div>

          {/* Privacy Consent Section */}
          <div className="space-y-4 pt-4">
            <label className="flex items-start gap-4 cursor-pointer group">
              <div className="relative flex items-center justify-center mt-1">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={consentChecked}
                  onChange={(e) => {
                    setConsentChecked(e.target.checked);
                    if (e.target.checked) setShowConsentError(false);
                  }}
                />
                <div className={`
                  w-4 h-4 border transition-all duration-300
                  ${showConsentError ? 'border-red-400' : 'border-cream/40 group-hover:border-cream'}
                  peer-checked:bg-cream peer-checked:border-cream
                `} />
                <svg className="absolute w-3 h-3 text-midnight opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className={`
                font-sans text-[12px] leading-relaxed transition-colors duration-300
                ${showConsentError ? 'text-red-400' : 'text-cream/60 group-hover:text-cream/80'}
              `}>
                I consent to Pilot Medical Group collecting, using, and disclosing my personal data for the purposes of this AI screening and subsequent follow-up, in accordance with the Personal Data Protection Act (PDPA).
              </span>
            </label>
            {showConsentError && (
              <p className="font-sans text-[10px] text-red-400 tracking-widest uppercase animate-pulse">
                Consent is required to proceed
              </p>
            )}
          </div>

          <div className={`flex justify-center pt-8 ${showConsentError ? 'animate-bounce' : ''}`}>
            <MinimalistButton type="submit">NEXT PHASE</MinimalistButton>
          </div>
        </form>
      </div>
    </main>
  );
};
