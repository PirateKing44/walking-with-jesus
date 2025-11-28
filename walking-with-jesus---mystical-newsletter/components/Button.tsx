import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative px-8 py-3 font-display font-medium tracking-wider transition-all duration-300 transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed group overflow-hidden";
  
  const variants = {
    primary: "bg-mystic-gold text-mystic-900 hover:bg-[#c5a028] shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]",
    secondary: "bg-mystic-800 text-mystic-gold border border-mystic-gold/30 hover:bg-mystic-700 hover:border-mystic-gold/60",
    outline: "bg-transparent text-mystic-gold border border-mystic-gold hover:bg-mystic-gold/10"
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`} 
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {/* Subtle shine effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
    </button>
  );
};