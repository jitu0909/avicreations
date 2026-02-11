import React from 'react';

const Logo = ({ color = '#000', width = 300 }) => {
  return (
    <svg 
      width={width} 
      viewBox="0 0 500 120" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Avi Creation Photography Logo"
    >
      {/* Abstract Lens/Shutter Element - Minimalist & Premium */}
      <g transform="translate(10, 30)">
        {/* Outer Ring */}
        <circle cx="35" cy="35" r="32" fill="none" stroke={color} strokeWidth="1.5" />
        
        {/* Abstract Shutter Blades - Sharp and Clean */}
        <path d="M35 3 L35 15 M58 18 L48 26 M67 35 L55 35 M58 52 L48 44 M35 67 L35 55 M12 52 L22 44 M3 35 L15 35 M12 18 L22 26" 
              stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Inner Lens Point */}
        <circle cx="35" cy="35" r="4" fill={color} />
        
        {/* Subtle Lens Reflection Line */}
        <path d="M52 18 A22 22 0 0 1 52 52" fill="none" stroke={color} strokeWidth="0.5" opacity="0.4" />
      </g>

      {/* Brand Name Group */}
      <g transform="translate(95, 20)">
        {/* "AVI" - High-End Serif */}
        <text 
          x="0" 
          y="45" 
          fontFamily="'Playfair Display', serif" 
          fontSize="64" 
          fontWeight="700" 
          fill={color}
          letterSpacing="-1"
        >
          AVI
        </text>
        
        {/* "CREATION" - Elegant Spaced Sans-Serif */}
        <text 
          x="120" 
          y="45" 
          fontFamily="'Montserrat', sans-serif" 
          fontSize="42" 
          fontWeight="300" 
          fill={color}
          letterSpacing="8"
        >
          CREATION
        </text>
        
        {/* Minimalist Divider Line */}
        <rect x="2" y="65" width="380" height="1" fill={color} opacity="0.3" />
        
        {/* Premium Tagline */}
        <text 
          x="2" 
          y="90" 
          fontFamily="'Montserrat', sans-serif" 
          fontSize="16" 
          letterSpacing="18" 
          fill={color} 
          fontWeight="400"
          opacity="0.9"
        >
          PHOTOGRAPHY
        </text>
      </g>
    </svg>
  );
};

export default Logo;
