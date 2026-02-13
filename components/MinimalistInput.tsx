
import React from 'react';

interface MinimalistInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const MinimalistInput: React.FC<MinimalistInputProps> = ({ error, ...props }) => {
  // Use id to decide alignment - 'access-key' for center, others for left
  const isCentered = props.id === 'access-key';
  
  return (
    <div className="relative group">
      <input
        {...props}
        className={`
          w-full bg-transparent border-b py-3 px-1 
          font-sans tracking-[0.2em] text-sm
          outline-none transition-all duration-700
          placeholder:text-cream/20 placeholder:font-sans placeholder:tracking-widest
          ${isCentered ? 'text-center' : 'text-left'}
          ${error ? 'border-red-400' : 'border-cream/30 group-hover:border-cream/60 focus:border-cream'}
        `}
      />
      <div className={`
        absolute bottom-0 h-[1px] bg-cream transition-all duration-500
        ${isCentered ? 'left-1/2 -translate-x-1/2' : 'left-0'}
        ${props.value ? 'w-full' : 'w-0 group-focus-within:w-full'}
      `} />
    </div>
  );
};
