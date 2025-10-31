import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import BlurText from '@/components/ui/shadcn-io/blur-text';
import DecryptedText from '@/components/ui/shadcn-io/decrypted-text';
import PrismaticBurst from '@/components/PrismaticBurst';

export default function HeroSection() {
  return (
    <section className="hero" style={{ position: 'relative' }}>
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
      <div className="hero-top">
        <div className="hero-content">
          <BlurText
            text="Spend less time reviewing, more time building!"
            delay={150}
            animateBy="words"
            direction="top"
            className="hero-title"
          />
          <p className="hero-subtitle">
            <DecryptedText
              text="AI-powered code reviewer to help spot the toughest bugs and save hours."
              speed={60}
              maxIterations={15}
              sequential={false}
              className=""
              encryptedClassName="opacity-50"
              animateOn="hover"
            />
            <br />
            <DecryptedText
              text="Ship better code faster with intelligent code reviews."
              speed={60}
              maxIterations={15}
              sequential={false}
              className=""
              encryptedClassName="opacity-50"
              animateOn="hover"
            />
          </p>
          <div className="hero-actions">
            <Link href="#" className="btn-primary">Try it out</Link>
            <Link href="#" className="btn-secondary">
              No credit card required
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
        
        <div className="hero-logo-animation">
          <div className="animated-logo-container">
            <Image 
              src="/logo-hero.svg" 
              alt="Codity Logo" 
              width={383} 
              height={436} 
              className="main-animated-logo"
              priority
              style={{width: '280px', height: 'auto'}}
            />
            
            <div className="particle particle-1">
              <div className="particle-glow"></div>
            </div>
            <div className="particle particle-2">
              <div className="particle-glow"></div>
            </div>
            <div className="particle particle-3">
              <div className="particle-glow"></div>
            </div>
            <div className="particle particle-4">
              <div className="particle-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}