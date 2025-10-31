"use client";

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

// Card 1 Visual: Neural Orb and background icons
const NeuralOrbVisual = () => {
    const icons = Array.from({ length: 12 });
    const [gradientId, setGradientId] = useState('orbGradient');

    useEffect(() => {
        // Generate a unique ID only on the client to prevent hydration mismatch
        setGradientId(`orbGradient-${Math.random().toString(36).substring(2, 9)}`);
    }, []);

    const iconVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
    };

    const orbVariants = {
      initial: { scale: 0.9 },
      animate: {
        scale: [0.95, 1.05, 0.95],
        transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
      },
    };

    return (
        <div className="relative flex items-center justify-center w-full h-48 my-4 overflow-hidden">
            <motion.div
                className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-4"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ staggerChildren: 0.1 }}
            >
                {icons.map((_, i) => (
                    <motion.div key={i} variants={iconVariants} className="flex items-center justify-center">
                        <div className="w-16 h-8 bg-gray-200 rounded-md dark:bg-gray-800" />
                    </motion.div>
                ))}
            </motion.div>
            <motion.div
                className="relative flex items-center justify-center w-32 h-32"
                variants={orbVariants}
                initial="initial"
                animate="animate"
            >
                <motion.svg
                    className="absolute w-full h-full"
                    viewBox="0 0 100 100"
                >
                    <defs>
                        <radialGradient id={gradientId} cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                            <stop offset="0%" stopColor="#0077FF" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#00BFFF" stopOpacity="0.8" />
                        </radialGradient>
                    </defs>
                    <circle cx="50" cy="50" r="50" fill={`url(#${gradientId})`} />
                    <circle cx="50" cy="50" r="38" fill="#0077FF" />
                    <circle cx="50" cy="50" r="26" fill="#005DDB" />
                </motion.svg>
            </motion.div>
        </div>
    );
};


// Card 2 Visual: Messy vs Structured feedback
const FeedbackVisual = () => {
    const [isStructured, setIsStructured] = useState(false);

    const feedbackItems = [
        { id: "fb1", text: "Refactor for clarity", messyText: "what is this?", messyPos: "top-0 left-10" },
        { id: "fb2", text: "Add error handling", messyText: "fix it", messyPos: "top-10 right-0" },
        { id: "fb3", text: "Improve performance", messyText: "??", messyPos: "top-20 left-0" },
    ];

    return (
        <div 
            className="relative w-full h-48 my-4 flex items-center justify-center cursor-pointer"
            onMouseEnter={() => setIsStructured(true)}
            onMouseLeave={() => setIsStructured(false)}
        >
            <motion.div layout className={cn("w-full transition-all duration-500", isStructured ? 'space-y-2' : 'relative h-full')}>
                {feedbackItems.map((item) => (
                    <motion.div
                        key={item.id}
                        layout
                        transition={{ layout: { duration: 0.5, type: 'spring', bounce: 0.3 } }}
                        className={cn(isStructured ? 
                            'flex items-center p-2 rounded-md bg-green-100 dark:bg-green-800/50' :
                            'absolute p-2 text-sm bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg shadow',
                            !isStructured && item.messyPos
                        )}
                    >
                        {isStructured ? (
                            <>
                                <motion.div layout="position">
                                    <Check className="w-5 h-5 mr-3 text-green-600 dark:text-green-400" />
                                </motion.div>
                                <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
                            </>
                        ) : (
                            item.messyText
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

// Card 3 Visual: Code Snippet
const CodeSnippetVisual = () => {
    const cardRef = useRef(null);
    const animationRef = useRef<gsap.core.Timeline | null>(null);

    const startAnimation = () => {
        if (animationRef.current) {
            animationRef.current.restart();
        } else {
            animationRef.current = gsap.timeline({
                defaults: { duration: 0.5, ease: 'power2.out' }
            })
            .to('.code-underline', {
                backgroundColor: '#22C55E', // green-500
                stagger: 0.3,
            }).fromTo(
                '.code-badge',
                { opacity: 0, y: 10, scale: 0.8 },
                { opacity: 1, y: 0, scale: 1, ease: 'back.out(1.7)' },
                "-=0.2"
            );
        }
    };
    
    const resetAnimation = () => {
        if (animationRef.current) {
            animationRef.current.revert();
            animationRef.current = null;
        }
        gsap.set('.code-underline', {clearProps: "backgroundColor"});
        gsap.set('.code-badge', {clearProps: "opacity,y,scale"});
    };

    useEffect(() => {
        if (!cardRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                   startAnimation();
                } else {
                   resetAnimation();
                }
            },
            { threshold: 0.8 }
        );

        observer.observe(cardRef.current);
        
        return () => {
            observer.disconnect();
            resetAnimation();
        };
    }, []);

    return (
        <div ref={cardRef} className="relative w-full h-48 my-4 flex items-center justify-center">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-xs text-gray-700 dark:text-gray-300 w-full relative overflow-hidden">
                <div className="absolute top-2 right-2 code-badge opacity-0">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                       Ready to Ship!
                    </span>
                </div>
                <code>
                    <span className="text-purple-500">function</span> <span className="text-blue-500">checkUser</span>(user) {'{'}<br />
                    &nbsp;&nbsp;<span className="text-purple-500">if</span> (user.name) {'{'}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-underline bg-red-400 dark:bg-red-600/50 rounded px-1">return user.name;</span><br />
                    &nbsp;&nbsp;{'}'} <span className="text-gray-400">// Missing else block?</span><br/>
                    &nbsp;&nbsp;<span className="code-underline bg-red-400 dark:bg-red-600/50 rounded px-1">return 'guest';</span><br />
                    {'}'}
                </code>
            </div>
        </div>
    );
};

export default function WhatIsCodity() {
    const cardVariants = {
        initial: { opacity: 0, y: 50 },
        animate: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: 'easeOut',
            },
        }),
    };

    return (
        <section id="what-is-codity" className="py-16 md:py-24 bg-gray-50 dark:bg-black">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-headline">
                        What is Codity?
                    </h2>
                    <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
                        Effortless, Ultra-fast AI Code reviews. Minus the noise. Contextual awareness of your entire codebase. Tech debt? Not on our watch.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <motion.div variants={cardVariants} initial="initial" whileInView="animate" custom={0} viewport={{ once: true }} whileHover={{ scale: 1.02, y: -5 }} className="h-full">
                        <Card className="h-full flex flex-col transition-shadow hover:shadow-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/50 border-gray-200 dark:border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    Understands your codebase like a teammate
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col flex-grow justify-between">
                                <p className="text-gray-600 dark:text-gray-300">
                                    It understands your codebase like a teammate — learning your structure, logic, and style so reviews feel natural and contextual.
                                </p>
                                <NeuralOrbVisual />
                            </CardContent>
                        </Card>
                    </motion.div>
                    
                    <motion.div variants={cardVariants} initial="initial" whileInView="animate" custom={1} viewport={{ once: true }} whileHover={{ scale: 1.02, y: -5 }} className="h-full">
                        <Card className="h-full flex flex-col transition-shadow hover:shadow-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/50 border-gray-200 dark:border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    Turns messy reviews into structured feedback
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col flex-grow justify-between">
                                <p className="text-gray-600 dark:text-gray-300">
                                    Turns messy reviews into structured, context-aware feedback — so you see what matters, not noise.
                                </p>
                                <FeedbackVisual />
                            </CardContent>
                        </Card>
                    </motion.div>
                    
                    <motion.div variants={cardVariants} initial="initial" whileInView="animate" custom={2} viewport={{ once: true }} whileHover={{ scale: 1.02, y: -5 }} className="h-full">
                        <Card className="h-full flex flex-col transition-shadow hover:shadow-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/50 border-gray-200 dark:border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    Helps teams ship cleaner, safer code
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col flex-grow justify-between">
                                <p className="text-gray-600 dark:text-gray-300">
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
