import React from 'react';

const Logo = ({ color = '#000', width = 320 }) => {
  return (
    <svg 
      width={width} 
      viewBox="0 0 520 120" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Avi Creation Photography Logo"
    >
      {/* Camera Icon - Sharp and Modern */}
      <g transform="translate(10, 25)">
        {/* Main Camera Body */}
        <rect x="0" y="12" width="65" height="42" rx="3" ry="3" fill="none" stroke={color} strokeWidth="3" />
        
        {/* Pentaprism (Top part) */}
        <path d="M18 12 L24 4 L41 4 L47 12" fill="none" stroke={color} strokeWidth="3" strokeLinejoin="round" />
        
        {/* Lens Detail - Sharp Rings */}
        <circle cx="32.5" cy="33" r="16" fill="none" stroke={color} strokeWidth="2.5" />
        <circle cx="32.5" cy="33" r="8" fill={color} />
        
        {/* Shutter Button */}
        <rect x="48" y="8" width="8" height="4" fill={color} />
        
        {/* Viewfinder Detail */}
        <rect x="25" y="7" width="15" height="3" fill={color} opacity="0.5" />
      </g>

      {/* Brand Text - Bold and Elegant */}
      <g transform="translate(90, 15)">
        <text 
          x="0" 
          y="52" 
          fontFamily="'Playfair Display', serif" 
          fontSize="58" 
          fontWeight="900" 
          fill={color}
          style={{ textTransform: 'uppercase' }}
        >
          AVI
        </text>
        
        <text 
          x="105" 
          y="52" 
          fontFamily="'Playfair Display', serif" 
          fontSize="58" 
          fontWeight="300" 
          fill={color}
          style={{ textTransform: 'uppercase' }}
          letterSpacing="2"
        >
          CREATION
        </text>
        
        {/* Sharp Underline */}
        <rect x="2" y="72" width="410" height="2" fill={color} />
        
        {/* Professional Tagline */}
        <text 
          x="4" 
          y="100" 
          fontFamily="'Montserrat', sans-serif" 
          fontSize="20" 
          letterSpacing="14" 
          fill={color} 
          fontWeight="600"
          style={{ textTransform: 'uppercase' }}
        >
          PHOTOGRAPHY
        </text>
      </g>
    </svg>
  );
};

export default Logo;
