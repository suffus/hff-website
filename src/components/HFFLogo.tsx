import React from 'react';
import Image from 'next/image';

interface HFFLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function HFFLogo({ className = '', size = 'md' }: HFFLogoProps) {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <Image
        src="/hff-tree.png"
        alt="Human Freedom Foundation Logo"
        width={size === 'sm' ? 24 : size === 'md' ? 40 : size === 'lg' ? 48 : 64}
        height={size === 'sm' ? 24 : size === 'md' ? 40 : size === 'lg' ? 48 : 64}
        className="w-full h-full object-contain"
        priority
      />
    </div>
  );
}