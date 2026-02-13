
import React, { useState } from 'react';
import { MinimalistInput } from './components/MinimalistInput';
import { MinimalistButton } from './components/MinimalistButton';
import { DisclaimerModal } from './components/DisclaimerModal';
import { IntakeForm } from './components/IntakeForm';
import { Dashboard } from './components/Dashboard';

type AppStep = 'login' | 'disclaimer' | 'intake' | 'dashboard';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>('login');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [patientData, setPatientData] = useState<any>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '12345') {
      setStep('disclaimer');
    } else {
      setIsError(true);
      setTimeout(() => setIsError(false), 2000);
    }
  };

  const handleAcknowledge = () => {
    setStep('intake');
  };

  const handleIntakeSubmit = (data: any) => {
    console.log('Patient Intake Details:', data);
    setPatientData(data);
    setStep('dashboard');
  };

  const renderContent = () => {
    switch (step) {
      case 'login':
        return (
          <main className="flex-grow flex flex-col items-center justify-center animate-in fade-in duration-1000">
            <div className="w-full max-w-lg text-center">
              <header className="mb-20">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-[0.3em] uppercase leading-relaxed font-medium">
                  Pilot Medical Group
                </h1>
                <div className="w-12 h-[1px] bg-cream/40 mx-auto mt-8"></div>
              </header>

              <form onSubmit={handleLogin} className="flex flex-col items-center space-y-12">
                <div className="w-full max-w-sm space-y-4">
                  <label htmlFor="access-key" className="font-sans text-[10px] tracking-widest uppercase block text-center opacity-70 mb-4">
                    Identification Required
                  </label>
                  <MinimalistInput
                    id="access-key"
                    type="password"
                    placeholder="ACCESS KEY"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={isError}
                  />
                  {isError && (
                    <p className="font-sans text-[10px] text-red-400 tracking-widest uppercase mt-2 animate-pulse">
                      Invalid Access Key
                    </p>
                  )}
                </div>
                <MinimalistButton type="submit">ENTER</MinimalistButton>
              </form>
            </div>
          </main>
        );
      case 'disclaimer':
        return <DisclaimerModal onAcknowledge={handleAcknowledge} />;
      case 'intake':
        return <IntakeForm onSubmit={handleIntakeSubmit} />;
      case 'dashboard':
        return <Dashboard patientName={patientData?.name} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-midnight text-cream flex flex-col justify-between p-8 md:p-16 font-serif selection:bg-cream selection:text-midnight overflow-x-hidden">
      {/* Upper Navigation Border */}
      <div className="w-full border-t border-cream/20 pt-4 flex justify-between items-start z-10">
        <span className="font-sans text-[10px] tracking-widest uppercase opacity-50">
          Pilot Healthcare Pte Ltd Private Portal
        </span>
        <span className="font-sans text-[10px] tracking-widest uppercase opacity-50">
          {step !== 'login' ? `Authenticated User` : `v1.0.4 — Est. 2026`}
        </span>
      </div>

      {renderContent()}

      {/* Footer Branding - Hidden on some steps for focus if needed */}
      <footer className="w-full border-b border-cream/20 pb-4 flex flex-col md:flex-row justify-between items-end gap-4 z-10">
        <div className="max-w-xs text-left">
          <p className="font-serif italic text-sm opacity-80 leading-relaxed">
            "To know oneself is the beginning of all longevity."
          </p>
        </div>
        <div className="flex gap-12 font-sans text-[10px] tracking-widest uppercase opacity-50">
          <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
