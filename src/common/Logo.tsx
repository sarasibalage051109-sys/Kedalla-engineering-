import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 40 }: LogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background - Left Red */}
      <rect x="0" y="0" width="50" height="100" fill="#E31E24" />
      
      {/* Background - Right Grey */}
      <rect x="50" y="0" width="50" height="100" fill="#7C7E7F" />
      
      {/* The 'K' stem (White) */}
      <rect x="20" y="20" width="10" height="60" fill="white" />
      
      {/* The 'K' diagonals (White) */}
      <path d="M30 50L55 25" stroke="white" strokeWidth="10" />
      <path d="M30 50L55 75" stroke="white" strokeWidth="10" />
      
      {/* The 'E' bars (White) */}
      <rect x="65" y="25" width="25" height="10" fill="white" />
      <rect x="65" y="45" width="25" height="10" fill="white" />
      <rect x="65" y="65" width="25" height="10" fill="white" />
    </svg>
  );
}
