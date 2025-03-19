'use client';

import { Heart } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface AnimatedMessageProps {
  message: string;
  className?: string;
}

export default function AnimatedMessage({
  message,
  className = '',
}: AnimatedMessageProps) {
  const scrollingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add custom animation styles
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes scrollMessage {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100vw); }
      }
      .scrolling-message {
        animation: scrollMessage 15s linear infinite;
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div
      className={`relative overflow-hidden bg-green-700 text-white py-2 h-8 flex items-center ${className}`}
    >
      <div
        ref={scrollingRef}
        className='flex items-center space-x-4 whitespace-nowrap absolute scrolling-message'
      >
        <Heart className='h-4 w-4 text-white' />
        <span className='font-medium text-sm md:text-base'>{message}</span>
        <Heart className='h-4 w-4 text-white' />
      </div>
    </div>
  );
}
