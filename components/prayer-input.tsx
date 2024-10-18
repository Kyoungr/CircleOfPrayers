'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ScrollArea } from '@/components/ui/scroll-area';

const colors = {
  forestGreen: '#2E4A32',
  terracotta: '#D98951',
  sandstoneBeige: '#E4DCCF',
  warmGray: '#A49A89',
  richBrown: '#5C4033',
};

type Sparkle = {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
};

export default function PrayerInputComponent({
  onSubmit,
}: {
  onSubmit: (prayer: string) => void;
}) {
  const [prayer, setPrayer] = useState('');
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();

  useEffect(() => {
    const createSparkle = (): Sparkle => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      size: Math.random() * 4 + 1,
      opacity: Math.random() * 0.5 + 0.5,
    });

    const initialSparkles = Array.from({ length: 50 }, createSparkle);
    setSparkles(initialSparkles);

    const intervalId = setInterval(() => {
      setSparkles((prevSparkles) =>
        prevSparkles.map((sparkle) => ({
          ...sparkle,
          x: (sparkle.x + sparkle.vx + 100) % 100,
          y: (sparkle.y + sparkle.vy + 100) % 100,
        }))
      );
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  const handleSubmit = () => {
    if (prayer.trim()) {
      onSubmit(prayer.trim());
      setPrayer('');
      router.push('/dashboard');
    }
  };

  const showSubmitButton = /amen[.!]*$/i.test(prayer.trim());

  return (
    <div
      className='min-h-screen flex items-center justify-center relative overflow-hidden'
      style={{
        backgroundColor: 'white',
        boxShadow:
          'inset 0 0 100px rgba(255, 255, 255, 0.5), inset 0 0 200px rgba(255, 255, 255, 0.3), inset 0 0 300px rgba(255, 255, 255, 0.1)',
      }}
    >
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className='absolute rounded-full'
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            backgroundColor: colors.terracotta,
            opacity: sparkle.opacity,
            transition: 'left 0.05s linear, top 0.05s linear',
          }}
        />
      ))}
      <div className='w-full max-w-3xl z-10 flex flex-col items-center'>
        <ScrollArea className='w-full rounded-lg' style={{ height: '300px' }}>
          <textarea
            ref={textareaRef}
            value={prayer}
            onChange={(e) => setPrayer(e.target.value)}
            placeholder='Share your prayer...'
            className='w-full p-4 text-lg resize-none focus:outline-none bg-transparent'
            style={{
              color: colors.richBrown,
              minHeight: '100%',
              border: 'none',
              outline: 'none',
              WebkitAppearance: 'none',
              MozAppearance: 'none',
            }}
            aria-label='Prayer input'
          />
        </ScrollArea>
        <button
          onClick={handleSubmit}
          className='mt-4 px-12 py-3 rounded-full text-white font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none'
          style={{
            background: `linear-gradient(45deg, ${colors.forestGreen}, ${colors.terracotta})`,
            boxShadow: `0 0 20px ${colors.terracotta}80, 0 0 40px ${colors.terracotta}40, 0 0 60px ${colors.terracotta}20`,
            animation: 'pulse 2s infinite',
            opacity: showSubmitButton ? 1 : 0,
            visibility: showSubmitButton ? 'visible' : 'hidden',
          }}
          aria-hidden={!showSubmitButton}
          tabIndex={showSubmitButton ? 0 : -1}
        >
          Offer Prayer
        </button>
      </div>
      <style jsx>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 20px ${colors.terracotta}80,
              0 0 40px ${colors.terracotta}40, 0 0 60px ${colors.terracotta}20;
          }
          50% {
            box-shadow: 0 0 25px ${colors.terracotta}90,
              0 0 50px ${colors.terracotta}50, 0 0 75px ${colors.terracotta}30;
          }
          100% {
            box-shadow: 0 0 20px ${colors.terracotta}80,
              0 0 40px ${colors.terracotta}40, 0 0 60px ${colors.terracotta}20;
          }
        }
      `}</style>
    </div>
  );
}
