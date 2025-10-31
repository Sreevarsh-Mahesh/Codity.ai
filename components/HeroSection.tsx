import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function HeroSection() {
  // Expanded code lines with more variety for better coverage
  const codeLines = [
    'function reviewCode(code) {',
    '  return AI.analyze(code, { bugs: true });',
    '}',
    'const analyze = async (pr) => {',
    '  const issues = await scan(pr);',
    '  return issues;',
    '};',
    'class CodeReviewer {',
    '  detectBugs(code) {',
    '    return AI.scan(code);',
    '  }',
    '}',
    'const review = (changes) => {',
    '  return findIssues(changes);',
    '};',
    'function quickReview(files) {',
    '  return analyzeSecurity(files);',
    '}',
    'const checker = new BugDetector();',
    'checker.review(mainBranch);',
    'async function checkCode(pr) {',
    '  const report = await generate(pr);',
    '  return report;',
    '}',
    'const detector = {',
    '  scan: (code) => findBugs(code),',
    '};',
    'function deepAnalysis(codebase) {',
    '  return comprehensiveReview(codebase);',
    '}',
    'const review = reviewCode(pr);',
    'function scanSecurity(pr) {',
    '  return detectVulnerabilities(pr);',
    '}',
    'const aiReview = AI.review(pr);',
    'await aiReview.generateReport();',
    'const issues = await scanner.detect(pr);',
    'issues.forEach(fixBug);',
    'class BugScanner {',
    '  async analyze(code) {',
    '    return this.scan(code);',
    '  }',
    '}',
    'const scanner = new BugScanner();',
    'scanner.analyze(codebase);',
    'function detectIssues(changes) {',
    '  return AI.analyze(changes);',
    '}',
    'const reviewService = {',
    '  processPR: async (pr) => {',
    '    return await analyze(pr);',
    '  }',
    '};',
    'reviewService.processPR(pr);',
    'class SecurityAnalyzer {',
    '  check(code) {',
    '    return vulnerabilities(code);',
    '  }',
    '}',
    'const security = new SecurityAnalyzer();',
    'security.check(mainBranch);',
    'async function runChecks(files) {',
    '  const results = await Promise.all(files.map(scan));',
    '  return results;',
    '}',
    'const checks = await runChecks(prFiles);',
    'checks.forEach(displayResults);',
    'function reviewPR(pullRequest) {',
    '  const changes = pullRequest.getFiles();',
    '  return analyze(changes);',
    '}',
    'const analysis = await reviewPR(pr);',
    'analysis.forEach(issue => {',
    '  console.log(issue);',
    '});',
    'class CodeAnalyzer {',
    '  constructor(config) {',
    '    this.config = config;',
    '  }',
    '  async review(code) {',
    '    return this.analyze(code);',
    '  }',
    '}',
    'const analyzer = new CodeAnalyzer();',
    'await analyzer.review(codebase);',
    'function findBugs(changes) {',
    '  return changes.filter(isBug);',
    '}',
    'function isBug(change) {',
    '  return change.type === "bug";',
    '}',
    'const bugs = findBugs(changes);',
    'bugs.forEach(fix);',
  ];

  return (
    <section className="hero">
      <div className="hero-code-background">
        {/* Render code multiple times to fill the space */}
        {[...Array(6)].map((_, repeatIndex) => (
          <React.Fragment key={repeatIndex}>
            {codeLines.map((line, i) => (
              <div key={`${repeatIndex}-${i}`} className="code-line" data-line={i + 1} style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="code-number">{(i + 1).toString().padStart(3, '0')}</span>
                <span className="code-content">{line}</span>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
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