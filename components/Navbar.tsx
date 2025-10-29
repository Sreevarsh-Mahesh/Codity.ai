'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(savedTheme || systemTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <Link href="/" className="logo">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M10 8C8 8 7 9 7 10V13C7 14 6 15 5 15C6 15 7 16 7 17V20C7 21 8 22 10 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
              <path d="M22 8C24 8 25 9 25 10V13C25 14 26 15 27 15C26 15 25 16 25 17V20C25 21 24 22 22 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
              <circle cx="13" cy="15" r="1.5" fill="currentColor"/>
              <circle cx="16" cy="15" r="1.5" fill="currentColor"/>
              <circle cx="19" cy="15" r="1.5" fill="currentColor"/>
            </svg>
            <span>codity</span>
          </Link>
        </div>
        <div className="nav-center">
          <Link href="/features" className={`nav-link ${pathname === '/features' ? 'active' : ''}`}>Features</Link>
          <Link href="/pricing" className={`nav-link ${pathname === '/pricing' ? 'active' : ''}`}>Pricing</Link>
          <Link href="/blog" className={`nav-link ${pathname === '/blog' ? 'active' : ''}`}>Blog</Link>
          <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
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
