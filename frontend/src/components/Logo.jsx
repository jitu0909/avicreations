import React from 'react';

const Logo = ({ color = '#000', width = 280 }) => {
  return (
    <svg 
      width={width} 
      viewBox="0 0 500 120" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Avi Creation Photography Logo"
    >
      <defs>
        <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="royalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="50%" stopColor={color === '#ffffff' ? '#f8f8f8' : color} />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
      </defs>

      {/* Camera Icon Group - More Stylized and Royal */}
      <g transform="translate(15, 30)">
        {/* Main Lens Body */}
        <circle cx="35" cy="35" r="32" fill="none" stroke={color} strokeWidth="1.5" opacity="0.3" />
        <circle cx="35" cy="35" r="28" fill="none" stroke={color} strokeWidth="3" />
        
        {/* Aperture Blades Effect */}
        <path d="M35 7 L35 21 M55 25 L43 32 M55 45 L43 38 M35 63 L35 49 M15 45 L27 38 M15 25 L27 32" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Lens Glass Reflection */}
        <path d="M48 22 A18 18 0 0 1 48 48" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        
        {/* Inner Lens */}
        <circle cx="35" cy="35" r="10" fill={color} />
        <circle cx="32" cy="32" r="3" fill="white" opacity="0.4" />
        
        {/* Artistic Camera Frame Corner */}
        <path d="M0 20 L0 5 A5 5 0 0 1 5 0 L20 0" fill="none" stroke={color} strokeWidth="3" />
        <path d="M50 70 L65 70 A5 5 0 0 0 70 65 L70 50" fill="none" stroke={color} strokeWidth="3" />
      </g>

      {/* Text Group - Larger and more prominent */}
      <g transform="translate(100, 15)">
        {/* "AVI" - Distinctive Style */}
        <text 
          x="0" 
          y="50" 
          fontFamily="'Playfair Display', serif" 
          fontSize="56" 
          fontWeight="900" 
          fill={color}
          letterSpacing="2"
        >
          AVI
        </text>
        
        {/* "CREATION" - Spaced and Elegant */}
        <text 
          x="115" 
          y="50" 
          fontFamily="'Playfair Display', serif" 
          fontSize="48" 
          fontWeight="400" 
          fill={color}
          letterSpacing="4"
          opacity="0.9"
        >
          CREATION
        </text>
        
        {/* Divider Line */}
        <line x1="2" y1="68" x2="380" y2="68" stroke={color} strokeWidth="1.5" opacity="0.4" />
        
        {/* Tagline - Professional & Premium */}
        <text 
          x="2" 
          y="95" 
          fontFamily="'Montserrat', sans-serif" 
          fontSize="18" 
          letterSpacing="12" 
          fill={color} 
          opacity="0.8"
          fontWeight="600"
          textTransform="uppercase"
        >
          CINEMATIC FILMS
        </text>
      </g>
    </svg>
  );
};

export default Logo;
