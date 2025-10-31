"use client";

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

// Neural Orb Visual - Card 1
const NeuralOrbVisual = () => {
    const [gradientId] = useState(() => `orb-${Math.random().toString(36).substring(2, 9)}`);
    
    return (
        <div className="relative flex items-center justify-center w-full h-48 my-4 overflow-hidden">
            {/* Grid background */}
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-4">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-center opacity-0 animate-fade-in-up"
                        style={{ animationDelay: `${i * 100}ms` }}
                    >
                        <div className="w-16 h-8 bg-gray-200 rounded-md dark:bg-gray-800" />
                    </div>
                ))}
            </div>
            
            {/* Pulsing blue orb */}
            <div className="relative z-10 w-32 h-32 animate-pulse-orb">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                        <radialGradient id={gradientId} cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#0077FF" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#00BFFF" stopOpacity="0.8" />
                        </radialGradient>
                    </defs>
                    <circle cx="50" cy="50" r="50" fill={`url(#${gradientId})`} />
                    <circle cx="50" cy="50" r="38" fill="#0077FF" />
                    <circle cx="50" cy="50" r="26" fill="#005DDB" />
                </svg>
            </div>
        </div>
    );
};

// Feedback Visual - Card 2
const FeedbackVisual = () => {
    const [isStructured, setIsStructured] = useState(false);

    const items = [
        { id: 1, text: "Refactor for clarity", messy: "what is this?", pos: "top-0 left-10" },
        { id: 2, text: "Add error handling", messy: "fix it", pos: "top-10 right-0" },
        { id: 3, text: "Improve performance", messy: "??", pos: "top-20 left-0" },
    ];

    return (
        <div
            className="relative w-full h-48 my-4 flex items-center justify-center cursor-pointer"
            onMouseEnter={() => setIsStructured(true)}
            onMouseLeave={() => setIsStructured(false)}
        >
            <div className={cn(
                "w-full transition-all duration-500",
                isStructured ? "space-y-2" : "relative h-full"
            )}>
                {items.map((item) => (
                    <motion.div
                        key={item.id}
                        layout
                        transition={{ duration: 0.5, type: 'spring', bounce: 0.3 }}
                        className={cn(
                            "transition-all duration-500",
                            isStructured
                                ? "flex items-center p-2 rounded-md bg-green-100 dark:bg-green-800/50"
                                : cn(
                                    "absolute p-2 text-sm bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg shadow",
                                    item.pos
                                  )
                        )}
                    >
                        {isStructured ? (
                            <>
                                <Check className="w-5 h-5 mr-3 text-green-600 dark:text-green-400 flex-shrink-0" />
                                <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
                            </>
                        ) : (
                            item.messy
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

// Code Snippet Visual - Card 3
const CodeSnippetVisual = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} className="relative w-full h-48 my-4 flex items-center justify-center">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-xs text-gray-700 dark:text-gray-300 w-full relative overflow-hidden">
                {/* Background code lines */}
                <div className="absolute -top-6 left-4 text-gray-700 dark:text-gray-700 text-xs font-mono opacity-30">
                    <div>046 function detectIssues (changes) {'{'}</div>
                    <div>047 &nbsp;&nbsp;return AI.analyze (changes);</div>
                </div>

                {/* Ready to Ship badge */}
                <div
                    className={cn(
                        "absolute top-2 right-2 transition-all duration-500 ease-out",
                        isVisible
                            ? "opacity-100 translate-y-0 scale-100"
                            : "opacity-0 translate-y-2 scale-95"
                    )}
                    style={{ transitionDelay: isVisible ? "0.8s" : "0s" }}
                >
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500 text-white">
                        Ready to Ship!
                    </span>
                </div>

                {/* Code */}
                <code className="block">
                    <span className="text-purple-500">function</span>{" "}
                    <span className="text-blue-500">checkUser</span>(user) {"{"}
                    <br />
                    &nbsp;&nbsp;<span className="text-purple-500">if</span> (user.name) {"{"}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span
                        className={cn(
                            "rounded px-1 transition-all duration-500",
                            isVisible
                                ? "bg-green-500/30 dark:bg-green-500/40"
                                : "bg-red-400 dark:bg-red-600/50"
                        )}
                        style={{ transitionDelay: isVisible ? "0.3s" : "0s" }}
                    >
                        return user.name;
                    </span>
                    <br />
                    &nbsp;&nbsp;{"}"}{" "}
                    <span className="text-gray-400">// Missing else block?</span>
                    <br />
                    &nbsp;&nbsp;
                    <span
                        className={cn(
                            "rounded px-1 transition-all duration-500",
                            isVisible
                                ? "bg-green-500/30 dark:bg-green-500/40"
                                : "bg-red-400 dark:bg-red-600/50"
                        )}
                        style={{ transitionDelay: isVisible ? "0.6s" : "0s" }}
                    >
                        return 'guest';
                    </span>
                    <br />
                    {"}"}
                </code>
            </div>
        </div>
    );
};

export default function WhatIsCodity() {
    return (
        <section id="what-is-codity" className="py-16 md:py-24 bg-gray-50 dark:bg-black">
            <div className="container mx-auto max-w-7xl px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-headline">
                        What is Codity?
                    </h2>
                    <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Effortless, Ultra-fast AI Code reviews. Minus the noise. Contextual awareness of your entire
                        codebase. Tech debt? Not on our watch.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1: Understands your codebase */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="h-full"
                    >
                        <Card className="h-full flex flex-col transition-shadow hover:shadow-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/50 border-gray-200 dark:border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    Understands your codebase like a teammate
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col flex-grow justify-between">
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    It understands your codebase like a teammate — learning your structure, logic, and
                                    style so reviews feel natural and contextual.
                                </p>
                                <NeuralOrbVisual />
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Card 2: Turns messy reviews */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="h-full"
                    >
                        <Card className="h-full flex flex-col transition-shadow hover:shadow-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/50 border-gray-200 dark:border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    Turns messy reviews into structured feedback
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col flex-grow justify-between">
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    Turns messy reviews into structured, context-aware feedback — so you see what matters,
                                    not noise.
                                </p>
                                <FeedbackVisual />
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Card 3: Helps teams ship */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="h-full"
                    >
                        <Card className="h-full flex flex-col transition-shadow hover:shadow-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/50 border-gray-200 dark:border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    Helps teams ship cleaner, safer code
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col flex-grow justify-between">
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    Helps teams ship cleaner, safer code — confidently and consistently.
                                </p>
                                <CodeSnippetVisual />
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
