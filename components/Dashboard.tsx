
import React from 'react';

interface DashboardProps {
  patientName: string;
}

interface HubCard {
  title: string;
  label: string;
  imageUrl: string;
  link: string;
}

const HUB_CARDS: HubCard[] = [
  {
    title: 'Neurological Health',
    label: 'NEURAL PATHWAYS',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1200',
    link: '#' 
  },
  {
    title: 'Mental Health',
    label: 'COGNITIVE BALANCE',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200',
    link: '#' 
  },
  {
    title: 'Cardiovascular Health',
    label: 'VASCULAR ANALYSIS',
    imageUrl: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=1200',
    link: 'https://www.pilotmedicalgroup.com/insight-genesis'
  },
  {
    title: 'Musculoskeletal Health',
    label: 'SKELETAL STRUCTURE',
    imageUrl: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=1200',
    link: '#' 
  }
];

export const Dashboard: React.FC<DashboardProps> = ({ patientName }) => {
  return (
    <main className="flex-grow flex flex-col animate-in fade-in duration-1000 py-12">
      <div className="max-w-6xl w-full mx-auto">
        <header className="mb-16 text-center">
          <h2 className="font-sans text-[10px] tracking-[0.4em] uppercase mb-4 opacity-60">
            Authenticated Access — Private Hub
          </h2>
          <h1 className="text-4xl md:text-5xl font-serif font-medium leading-tight tracking-wide mb-6">
            AI Healthcare by <span className="italic">Pilot Medical Group</span>
          </h1>
          <div className="w-20 h-[1px] bg-cream/30 mx-auto"></div>
          <p className="mt-8 font-serif text-lg opacity-80 max-w-2xl mx-auto italic">
            "Welcome back, {patientName}. Select a specialized domain to begin your AI-assisted diagnostics."
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {HUB_CARDS.map((card, index) => {
            const isExternal = card.link.startsWith('http');
            return (
              <a
                key={index}
                href={card.link}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                onClick={(e) => card.link === '#' && e.preventDefault()}
                className="group relative block aspect-[16/10] md:aspect-square lg:aspect-[16/9] overflow-hidden border border-cream/10 bg-midnight transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              >
                {/* Abstract Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60"
                  style={{ backgroundImage: `url(${card.imageUrl})` }}
                />
                
                {/* Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-transparent opacity-95 group-hover:opacity-80 transition-opacity duration-700" />
                
                {/* Aurora Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-1000 bg-[radial-gradient(circle_at_50%_120%,#00f5ff,transparent_50%)]" />

                {/* Card Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12 space-y-4">
                  <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-cream/70 group-hover:text-cream group-hover:tracking-[0.4em] transition-all duration-700">
                    {card.label}
                  </span>
                  <div className="flex justify-between items-end">
                    <h3 className="font-serif text-2xl lg:text-3xl font-light tracking-wide group-hover:italic transition-all duration-500">
                      {card.title}
                    </h3>
                    <div className="w-10 h-10 border border-cream/20 flex items-center justify-center rounded-full group-hover:bg-cream group-hover:text-midnight transition-all duration-500">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-[-45deg] group-hover:rotate-0 transition-transform duration-500">
                        <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  {/* Underline Decoration */}
                  <div className="w-full h-[1px] bg-cream/10 mt-2 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Support Section */}
        <section className="mt-24 pt-12 border-t border-cream/10 text-center space-y-6">
          <p className="font-sans text-[10px] tracking-widest uppercase opacity-40">Direct Support</p>
          <p className="font-serif text-lg italic opacity-80">
            Need urgent assistance? Our Pilot team is available via the priority link below.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://wa.me/6580190641" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.3em] uppercase border-b border-gold/40 pb-2 text-gold hover:text-cream hover:border-cream transition-all duration-500 group"
            >
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform duration-500"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              SPEAK WITH A PILOT STAFF 
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};
