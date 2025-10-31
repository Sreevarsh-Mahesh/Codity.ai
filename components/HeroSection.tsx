import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import PrismaticBurst from '@/components/PrismaticBurst';

export default function HeroSection() {
  return (
    <section className="hero-simple" style={{ position: 'relative' }}>
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
        <PrismaticBurst
          animationType="rotate3d"
          intensity={2}
          speed={0.5}
          distort={1.0}
          paused={false}
          offset={{ x: 0, y: 0 }}
          hoverDampness={0.25}
          rayCount={24}
          mixBlendMode="lighten"
          colors={['#027FF7', '#7c3aed', '#ffffff']}
        />
      </div>
      <div className="hero-simple-content">
        <div className="hero-logo-wrapper">
          <Image 
            src="/logo-main.svg" 
            alt="Codity Logo" 
            width={128} 
            height={148} 
            priority
            className="hero-logo"
          />
        </div>
        <p className="hero-description">
          AI-powered code reviewer to help spot the toughest bugs and save hours.
          <br />
          Ship better code faster with intelligent code reviews.
        </p>
        <div className="hero-actions">
          <Link href="#" className="btn-primary">Try it out</Link>
        </div>
      </div>
    </section>
  );
}