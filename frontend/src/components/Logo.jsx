import React from 'react';

const Logo = ({ color = '#000', width = 200 }) => {
  return (
    <svg 
      width={width} 
      viewBox="0 0 450 100" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Avi Creation Photography Logo"
    >
      <defs>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Camera Icon Group */}
      <g transform="translate(10, 25)">
        {/* Camera Body */}
        <rect x="0" y="10" width="60" height="40" rx="5" ry="5" fill="none" stroke={color} strokeWidth="2.5" />
        
        {/* Camera Top Part (Viewfinder/Flash) */}
        <path d="M15 10 L20 0 L40 0 L45 10 Z" fill="none" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
        
        {/* Lens Outer Ring */}
        <circle cx="30" cy="30" r="14" fill="none" stroke={color} strokeWidth="2" />
        
        {/* Lens Inner - Aperture Effect */}
        <circle cx="30" cy="30" r="6" fill={color} />
        
        {/* Flash/Sensor Dot */}
        <circle cx="52" cy="18" r="2.5" fill={color} />
        
        {/* Stripe detail on body */}
        <path d="M0 28 L60 28" stroke={color} strokeWidth="0.5" opacity="0.5" />
      </g>

      {/* Text Group */}
      <g transform="translate(85, 0)">
        {/* Main Brand Name - Stylish Serif */}
        <text 
          x="0" 
          y="55" 
          fontFamily="'Playfair Display', 'Times New Roman', serif" 
          fontSize="42" 
          fontWeight="bold" 
          fill={color}
          letterSpacing="1.5"
        >
          AVI CREATION
        </text>
        
        {/* Tagline - Modern Sans */}
        <text 
          x="2" 
          y="78" 
          fontFamily="'Montserrat', sans-serif" 
          fontSize="14" 
          letterSpacing="6" 
          fill={color} 
          opacity="0.85"
          fontWeight="500"
        >
          PHOTOGRAPHY
        </text>
      </g>
    </svg>
  );
};

export default Logo;
