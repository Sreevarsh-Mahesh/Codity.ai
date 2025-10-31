'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';

interface DecryptingBackgroundProps {
  className?: string;
  density?: 'low' | 'medium' | 'high';
}

const codeSymbols = [
  'const', 'function', 'async', 'await', 'return', 'import', 'export',
  '{', '}', '(', ')', '[', ']', ';', ':', '=', '=>', '==', '===', '!==',
  '<', '>', '<=', '>=', '&&', '||', '!', '?', '.', ',', '...',
  'if', 'else', 'for', 'while', 'switch', 'case', 'break', 'continue',
  'class', 'extends', 'super', 'this', 'new', 'typeof', 'instanceof',
  'true', 'false', 'null', 'undefined', 'NaN', 'Infinity',
  'var', 'let', 'console', 'log', 'error', 'warn',
  'Promise', 'resolve', 'reject', 'then', 'catch', 'finally',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
];

const specialSymbols = [
  '!', '@', '#', '$', '%', '^', '&', '*', '+', '-', '=', '_',
  '|', '\\', '/', '~', '`', '?', '<', '>', '.', ',', ';', ':',
  '[', ']', '{', '}', '(', ')',
];

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+0123456789';

function DecryptingSymbol({ 
  text, 
  x, 
  y, 
  delay 
}: { 
  text: string; 
  x: number; 
  y: number; 
  delay: number;
}) {
  const [displayText, setDisplayText] = useState<string>(text);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isScrambling, setIsScrambling] = useState<boolean>(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let currentIteration = 0;
    const maxIterations = 15;
    const speed = 60;
    let restartTimeout: NodeJS.Timeout;

    const startDecryption = () => {
      setIsHovering(true);
      setIsScrambling(true);
      currentIteration = 0;

      interval = setInterval(() => {
        setDisplayText((prev) => {
          const scrambled = text
            .split('')
            .map((char) => {
              if (char === ' ') return ' ';
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join('');
          return scrambled;
        });
        
        currentIteration++;
        if (currentIteration >= maxIterations) {
          clearInterval(interval);
          setIsScrambling(false);
          setDisplayText(text);
          
          // Restart after revealing
          restartTimeout = setTimeout(() => {
            startDecryption();
          }, 2000 + Math.random() * 3000);
        }
      }, speed);
    };

    // Initial start with delay
    const initialTimeout = setTimeout(() => {
      startDecryption();
    }, delay);

    return () => {
      if (interval) clearInterval(interval);
      if (restartTimeout) clearTimeout(restartTimeout);
      if (initialTimeout) clearTimeout(initialTimeout);
    };
  }, [text, delay]);

  const isRevealed = !isScrambling && isHovering;

  return (
    <motion.span
      ref={containerRef}
      className="decrypting-symbol"
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        fontSize: '0.75rem',
        fontFamily: 'monospace',
        color: isRevealed ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.08)',
        opacity: isRevealed ? 1 : 0.6,
        transition: 'opacity 0.3s ease, color 0.3s ease',
        pointerEvents: 'none',
        userSelect: 'none',
        whiteSpace: 'nowrap',
      }}
    >
      {displayText.split('').map((char, index) => (
        <span
          key={index}
          style={{
            color: isRevealed ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.08)',
          }}
        >
          {char}
        </span>
      ))}
    </motion.span>
  );
}

export default function DecryptingBackground({ 
  className = '', 
  density = 'medium' 
}: DecryptingBackgroundProps) {
  const [symbols, setSymbols] = useState<Array<{ text: string; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const densityMap = {
      low: 30,
      medium: 60,
      high: 100
    };

    const count = densityMap[density];
    const allSymbols = [...codeSymbols, ...specialSymbols];
    
    const newSymbols = Array.from({ length: count }, () => ({
      text: allSymbols[Math.floor(Math.random() * allSymbols.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2000,
    }));

    setSymbols(newSymbols);
  }, [density]);

  return (
    <div 
      className={`decrypting-background ${className}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      {symbols.map((symbol, index) => (
        <DecryptingSymbol
          key={index}
          text={symbol.text}
          x={symbol.x}
          y={symbol.y}
          delay={symbol.delay}
        />
      ))}
    </div>
  );
}
