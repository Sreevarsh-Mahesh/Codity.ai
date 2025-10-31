"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Card 1 Visual: Code Navigation
const CodeNavigationVisual = () => {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { type: "spring", duration: 1.5, bounce: 0 },
                opacity: { duration: 0.01 }
            }
        }
    };
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } }
    };

    return (
        <div className="relative flex items-center justify-center w-full h-32 my-4">
            <motion.svg width="140" height="60" viewBox="0 0 140 60" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.8 }}>
                <motion.circle cx="30" cy="30" r="16" fill="#027FF7" variants={fadeIn} />
                <motion.circle cx="30" cy="30" r="6" fill="white" variants={fadeIn} />
                <motion.path d="M46 30 H 80" stroke="#027FF7" strokeWidth="2" variants={draw} />
                <motion.path d="M80 30 C 90 30, 90 20, 100 20" stroke="#027FF7" strokeWidth="2" fill="none" variants={draw} />
                <motion.path d="M80 30 C 90 30, 90 40, 100 40" stroke="#027FF7" strokeWidth="2" fill="none" variants={draw} />
                <motion.rect x="100" y="10" width="40" height="20" rx="4" fill="#F3F4F6" variants={fadeIn} />
                <motion.rect x="100" y="30" width="40" height="20" rx="4" fill="#F3F4F6" variants={fadeIn} />
            </motion.svg>
        </div>
    );
};

// Card 2 Visual: AI Understanding
const AiUnderstandingVisual = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2,
            }
        }
    };

    const nodeVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }
    };
    
    const pathVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: { 
            pathLength: 1, 
            opacity: 1, 
            transition: { duration: 1, ease: "easeInOut" }
        }
    };

    const magnifyVariants = {
        hidden: { x: -20, y: 10, scale: 0.8, opacity: 0 },
        visible: {
            x: 0, y: 0, scale: 1, opacity: 1,
            transition: {
                delay: 0.8,
                duration: 1,
                opacity: { duration: 0.5 }
            }
        }
    };
    
    const highlightVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: [1, 1.3, 1],
            opacity: [0, 0.5, 0],
            transition: {
                delay: 1.5,
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1,
                ease: 'easeInOut'
            }
        }
    };

    return (
        <div className="relative flex items-center justify-center w-full h-32 my-4">
            <motion.div
                className="relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                variants={containerVariants}
            >
                {/* Background Graph */}
                <svg width="120" height="100" viewBox="0 0 120 100" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 dark:opacity-40">
                    <motion.path d="M60 20 L 30 50 L 10 80" fill="none" stroke="currentColor" strokeWidth="1.5" variants={pathVariants} />
                    <motion.path d="M30 50 L 50 80" fill="none" stroke="currentColor" strokeWidth="1.5" variants={pathVariants} />
                    <motion.path d="M60 20 L 90 50 L 110 80" fill="none" stroke="currentColor" strokeWidth="1.5" variants={pathVariants} />
                    <motion.circle cx="60" cy="20" r="5" fill="currentColor" variants={nodeVariants} />
                    <motion.circle cx="30" cy="50" r="5" fill="currentColor" variants={nodeVariants} />
                    <motion.circle cx="90" cy="50" r="5" fill="currentColor" variants={nodeVariants} />
                    <motion.circle cx="10" cy="80" r="5" fill="currentColor" variants={nodeVariants} />
                    <motion.circle cx="50" cy="80" r="5" fill="currentColor" variants={nodeVariants} />
                    <motion.circle cx="110" cy="80" r="5" fill="currentColor" variants={nodeVariants} />
                </svg>

                {/* Magnifying Glass */}
                <motion.svg width="60" height="60" viewBox="0 0 60 60" variants={magnifyVariants} >
                     <motion.circle cx="35" cy="25" r="10" fill="hsla(var(--primary), 0.2)" stroke="hsl(var(--primary))" strokeWidth="2" variants={highlightVariants} />
                    <circle cx="25" cy="25" r="12" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" />
                    <line x1="34" y1="34" x2="45" y2="45" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" />
                </motion.svg>
            </motion.div>
        </div>
    );
};


// Card 3 Visual: Jira Sync
const JiraSyncVisual = () => {
    const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    const pop = { hidden: { scale: 0 }, visible: { scale: 1 } };

    return (
        <div className="relative flex items-center justify-center w-full h-32 my-4">
            <motion.div 
              className="flex items-center gap-2" 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.8 }}
              transition={{ staggerChildren: 0.3, delayChildren: 0.2 }}
            >
                <motion.div className="text-sm bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded" variants={fadeIn}>Jira</motion.div>
                <motion.div className="flex items-center" variants={fadeIn}>
                    <span className="w-3 h-px bg-gray-400"></span>
                    <span className="w-3 h-px bg-gray-400 ml-1"></span>
                    <span className="w-3 h-px bg-gray-400 ml-1"></span>
                </motion.div>
                <motion.div
                    className="relative w-8 h-8 flex items-center justify-center"
                    variants={pop}
                    transition={{ type: 'spring', stiffness: 300, damping: 10, delay: 0.5 }}
                >
                    <div className="absolute inset-0 bg-blue-500 rounded-full"></div>
                    <svg className="relative w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                </motion.div>
                 <motion.div className="flex items-center" variants={fadeIn}>
                    <span className="w-3 h-px bg-gray-400"></span>
                    <span className="w-3 h-px bg-gray-400 ml-1"></span>
                    <span className="w-3 h-px bg-gray-400 ml-1"></span>
                </motion.div>
                <motion.div className="text-sm bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded" variants={fadeIn}>Code</motion.div>
            </motion.div>
        </div>
    );
};


// Card 4 Visual: Noise Cancelling
const NoiseClarityVisual = () => {
    const noisyPath = "M0 50 Q 10 30, 20 50 T 40 60 T 60 40 T 80 55 T 100 45 T 120 52 T 140 50";
    const cleanPath = "M0 50 L140 50";

    const containerVariants = {
        hidden: {},
        visible: { transition: { delay: 0.5, duration: 1.2, ease: 'easeInOut' } }
    };
    
    return (
        <div className="relative flex items-center justify-center w-full h-32 my-4">
            <motion.div
                className="w-full max-w-[140px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                variants={containerVariants}
            >
                <svg viewBox="0 0 140 100" className="w-full h-auto overflow-visible">
                    {/* Noisy wave */}
                    <path
                        d={noisyPath}
                        fill="none"
                        stroke="hsl(var(--muted-foreground))"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                    />

                    {/* Clean wave revealed by clip-path */}
                    <g>
                        <motion.path
                            d={cleanPath}
                            fill="none"
                            stroke="hsl(var(--primary))"
                            strokeWidth="3"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.5 }}
                        />
                         <defs>
                            <motion.clipPath
                                id="clipPath"
                                initial={{ x: "100%" }}
                                animate={{ x: "0%" }}
                            >
                                <rect x="0" y="0" width="100%" height="100%" />
                            </motion.clipPath>
                        </defs>
                    </g>
                    
                    {/* Scanner Line */}
                    <motion.line
                        y1="0" y2="100"
                        stroke="hsl(var(--primary))"
                        strokeWidth="2"
                        initial={{ x: "100%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.5 }}
                    />
                </svg>
            </motion.div>
        </div>
    );
};


export default function WhyCodity() {
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
    
    const cardInfo = [
        {
            title: "Talk to Your Code",
            subtext: [
                "Ask anything.",
                "Find functions, compare branches, plan new features.",
                "Instant answers, repo-aware."
            ],
            visual: <CodeNavigationVisual />,
            icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.33333 1.33331H10.6667C13.3333 1.33331 14.6667 2.66665 14.6667 5.33331V8.66665C14.6667 11.3333 13.3333 12.6666 10.6667 12.6666H10.4133C10.1533 12.6666 9.90667 12.8 9.74 13.02L8.58 14.54C8.26 14.9466 7.74 14.9466 7.42 14.54L6.26 13.02C6.09333 12.8 5.84667 12.6666 5.58667 12.6666H5.33333C2.66667 12.6666 1.33333 11.3333 1.33333 8.66665V5.33331C1.33333 2.66665 2.66667 1.33331 5.33333 1.33331Z" stroke="#027FF7" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
        },
        {
            title: "Understands Your Codebase",
            subtext: [
                "Not just your PR — your whole project.",
                "Structure, patterns, history — fully in context."
            ],
            visual: <AiUnderstandingVisual />,
            icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5332 3.03333C5.5332 1.89999 4.6332 0.999992 3.49987 0.999992C2.36654 0.999992 1.46654 1.89999 1.46654 3.03333C1.46654 4.16666 2.36654 5.06666 3.49987 5.06666" stroke="#027FF7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.5333 10.9C14.5333 9.76667 13.6333 8.86667 12.5 8.86667C11.3667 8.86667 10.4667 9.76667 10.4667 10.9C10.4667 12.0333 11.3667 12.9333 12.5 12.9333" stroke="#027FF7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.5332 12.9333C5.5332 11.8 4.6332 10.9 3.49987 10.9C2.36654 10.9 1.46654 11.8 1.46654 12.9333C1.46654 14.0667 2.36654 14.9667 3.49987 14.9667" stroke="#027FF7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.5 5.06665V10.9" stroke="#027FF7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.5 8.86667V5.06667C12.5 4.58667 12.1133 4.2 11.6333 4.2H5.53333" stroke="#027FF7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            title: "Seamless Jira Sync",
            subtext: [
                "Auto-links tickets, summarizes changes,",
                "and flags missing features — automatically."
            ],
            visual: <JiraSyncVisual />,
            icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.33335 8.00002C5.33335 6.52669 6.52669 5.33335 8.00002 5.33335H10.08C11.2334 5.33335 12.18 6.28002 12.18 7.43335C12.18 8.58669 11.2334 9.53335 10.08 9.53335H10" stroke="#027FF7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.6667 8C10.6667 9.47333 9.47333 10.6667 8 10.6667H5.92C4.76667 10.6667 3.82 9.72 3.82 8.56667C3.82 7.41333 4.76667 6.46667 5.92 6.46667H6" stroke="#027FF7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            title: "Less Noise, More Clarity",
            subtext: [
                "Built for focus — not fatigue.",
                "Only the comments that matter."
            ],
            visual: <NoiseClarityVisual />,
            icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.66663 8.33335V7.66669C2.66663 4.93335 3.33329 4.66669 4.99996 4.66669C6.66663 4.66669 7.33329 4.93335 7.33329 7.66669V8.33335" stroke="#027FF7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.33329 7.66669C7.33329 10.4 7.99996 10.6667 9.66663 10.6667C11.3333 10.6667 12 10.4 12 7.66669V7" stroke="#027FF7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 7.66669C12 4.93335 12.6666 4.66669 14.3333 4.66669" stroke="#027FF7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.6667 1.33331H1.33333L1.33333 4.66665V11.3333L14.6667 11.3333V1.33331Z" stroke="#027FF7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        }
    ];

    return (
        <section id="why-codity" className="py-20 bg-background dark:bg-black">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-headline">
                        Why Codity?
                    </h2>
                    <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16">
                        Discover the edge that turns code reviews from chore to superpower.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {cardInfo.map((card, i) => (
                        <motion.div
                            key={card.title}
                            variants={cardVariants}
                            initial="initial"
                            whileInView="animate"
                            custom={i}
                            viewport={{ once: true, amount: 0.2 }}
                            className="h-full"
                        >
                            <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:border-primary/20 bg-white dark:bg-gray-900/50">
                                <CardHeader>
                                    <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                                        {card.icon}
                                        {card.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-col flex-grow justify-between pt-0">
                                    {card.visual}
                                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 list-disc list-inside">
                                        {card.subtext.map((line, j) => (
                                            <li key={j}>{line}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

