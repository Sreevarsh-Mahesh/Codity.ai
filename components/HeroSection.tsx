import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-top">
        <div className="hero-content">
          <h1 className="hero-title">
            Spend less time reviewing, more time building!
          </h1>
          <p className="hero-subtitle">
            AI-powered code reviewer to help spot the toughest bugs and save hours.<br />
            Ship better code faster with intelligent code reviews.
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
              src="/logo-glow.svg" 
              alt="Codity Logo" 
              width={250} 
              height={285} 
              className="main-animated-logo"
              priority
              style={{width: '250px', height: 'auto'}}
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
            
            <div className="rotating-ring ring-1"></div>
            <div className="rotating-ring ring-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}