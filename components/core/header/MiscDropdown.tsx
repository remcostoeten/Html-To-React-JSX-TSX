'use client';
import { folderPrefix, miscLinks } from '@/config/data';
import { ChevronUpIcon } from '@heroicons/react/solid';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -16 },
};

export default function MiscDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <div
                className="flex w-full items-center justify-center px-3 py-3  transition text-cream row-reverse"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="ml-2">Misc</div>
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
                        className="fixed left-0 w-full rounded-md shadow-lg bg-offblack  shadow-white/[0.06] backdrop-blur-[0.5rem] text-white"
                        onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}
                    >
                        <ul className="showAlternativeCursor z-max grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            {miscLinks.map((component) => (
                                <Link key={component.href} href={component.href} title={component.title}>
                                    {component.title}
                                </Link>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}