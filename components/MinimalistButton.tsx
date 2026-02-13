
import React from 'react';

interface MinimalistButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const MinimalistButton: React.FC<MinimalistButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="
        relative px-12 py-4 
        bg-cream text-midnight 
        font-sans text-[11px] font-medium tracking-[0.3em] uppercase
        border border-cream
        hover:bg-transparent hover:text-cream
        active:scale-[0.98]
        transition-all duration-500
        cursor-pointer
        overflow-hidden
        group
      "
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-midnight translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
    </button>
  );
};
