'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import './Navbar.css';

export default function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [hovered, setHovered] = useState<string | null>(null);
  const blobRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(savedTheme || systemTheme);
    document.documentElement.setAttribute('data-theme', savedTheme || systemTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const navLinks = [
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const handleMouseEnter = (href: string, element: HTMLDivElement | null) => {
    if (element) {
      const rect = element.getBoundingClientRect();
      const container = element.closest('.gooey-nav-center');
      if (container) {
        const containerRect = container.getBoundingClientRect();
        const blob = blobRefs.current[href];
        if (blob) {
          blob.style.width = `${rect.width}px`;
          blob.style.left = `${rect.left - containerRect.left}px`;
          blob.style.opacity = '1';
        }
      }
    }
    setHovered(href);
  };

  const handleMouseLeave = (href: string) => {
    const blob = blobRefs.current[href];
    if (blob) {
      blob.style.opacity = '0';
    }
    setHovered(null);
  };

  return (
    <nav className="gooey-nav">
      <div className="gooey-nav-container">
        <div className="nav-left">
          <Link href="/" className="logo">
            <Image 
              src="/logo-main.svg" 
              alt="Codity" 
              width={32} 
              height={37} 
              style={{width: '32px', height: 'auto'}}
            />
            <span>codity</span>
          </Link>
        </div>
        <div className="gooey-nav-center">
          <div className="gooey-blob-container">
            {navLinks.map((link) => (
              <div
                key={link.href}
                ref={(el) => { blobRefs.current[link.href] = el; }}
                className="gooey-blob"
              />
            ))}
          </div>
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="nav-link-wrapper"
              onMouseEnter={(e) => handleMouseEnter(link.href, e.currentTarget)}
              onMouseLeave={() => handleMouseLeave(link.href)}
            >
              <Link
                href={link.href}
                className={`nav-link ${pathname === link.href ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>
        <div className="nav-right">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <svg className="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
            <svg className="moon-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </button>
          <Link href="#" className="nav-link">Log in</Link>
          <Link href="#" className="btn-signup">Sign up</Link>
        </div>
      </div>
    </nav>
  );
}