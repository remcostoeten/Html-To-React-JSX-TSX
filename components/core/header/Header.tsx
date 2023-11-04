'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { links } from '@/config/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-contex';
import ToolsDropdown from './ToolsDropdown';
import MiscMenu from './MiscDropdown';
import UiElementsDropdown from './UiElementsDropdown';
import { topSlideIn } from '@/utils/animations';

export default function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    return (
        <>
            <header className="header relative z-50 header hidden md:flex showAlternativeCursor">
                <motion.div
                    className="header black-block width-fill fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none shadow-lg shadow-white/[0.06] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem]  sm:rounded-full "
                    initial={{ y: -100, x: "-50%", opacity: 0 }}
                    animate={{ y: 0, x: "-50%", opacity: 1 }}
                ></motion.div>

                <motion.nav initial={{ opacity: 0 }} className="header items-center justify-center border-shadow  flex w fixed top-[0.15rem] left-1/2 h-16 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
                    <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-max sm:flex-nowrap sm:gap-5">
                        {links.map((link, index) => (
                            <React.Fragment key={link.hash}>
                                <motion.li
                                    className="relative flex items-center justify-center h-3/4"
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                >
                                    <Link
                                        className={clsx("flex w-full items-center justify-center py-3 hover:text-gray-200 transition dark:-text-white pl-4 pr-4 h-9", {
                                            "": activeSection === link.name,
                                        })}
                                        href={link.hash}
                                        onClick={() => {
                                            setActiveSection(link.name);
                                            setTimeOfLastClick(Date.now());
                                        }}
                                    >
                                        {link.name}

                                        {link.name === activeSection && (
                                            <motion.span
                                                className="black-block absolute inset-0
                                                 border rounded-full -z-10"
                                                layoutId="activeSection"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 380,
                                                    damping: 30,
                                                }}
                                            ></motion.span>
                                        )}
                                    </Link>
                                </motion.li>
                                {index === 2 && (
                                    <>
                                        <motion.li
                                            data-type="video"
                                            className="mouse"
                                            initial={{ y: -100, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                        >
                                            <MiscMenu />
                                        </motion.li>
                                        <motion.li
                                            data-type="tools"
                                            initial={{ y: -100, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                        >
                                            <ToolsDropdown />
                                        </motion.li>
                                        <motion.li
                                            data-type="showcase"
                                            initial={{ y: -100, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}>
                                            <UiElementsDropdown />
                                        </motion.li>
                                    </>
                                )}
                            </React.Fragment>
                        ))}
                    </ul>
                </motion.nav>
            </header>
        </>
    );
}