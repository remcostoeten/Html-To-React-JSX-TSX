'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { uiShowcaseLinks } from '@/config/data';

export default function UiElementsDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const variants = {
        open: { opacity: 1, height: 'auto', display: 'block' },
        closed: { opacity: 0, height: 0, display: 'none' },
    };

    return (
        <div className="relative">
            <div
                className="flex w-full items-center justify-center px-3 py-3  transition text-cream row-reverse"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="ml-2">Ui</div>
                {isOpen ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={variants}
                        transition={{ duration: 0.3 }}
                        className="fixed left-0 w-full rounded-md bg-offblack shadow-lg shadow-white/[0.06] backdrop-blur-[0.5rem] text-cream"
                        onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}
                    >
                        <ul className="showAlternativeCursor z-max grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            {uiShowcaseLinks.map((component) => (
                                <li key={component.href}>
                                    <Link href={component.href} title={component.title}>
                                        {component.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}