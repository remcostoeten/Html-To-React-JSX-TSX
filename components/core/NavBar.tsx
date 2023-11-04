'use client';
import Link from "next/link"
import React, { useState } from "react";
import ToolsDropdown from "./header/ToolsDropdown";
import UiElementsDropdown from "./header/UiElementsDropdown";
import { motion } from "framer-motion";
import MiscDropdown from "./header/MiscDropdown";
import { topSlideIn } from "@/lib/animations";

export default function NavBar() {

    const links = [
        { name: "Home", hash: "/" },
    ];

    return (
        <>
            <motion.nav variants={topSlideIn} className="header hidden sm:flex items-center justify-center z-10 fixed black-block rounded-full top-0 black-box px-10 left-1/2 h-14 -translate-x-1/2   mt-8 shadow-lg shadow-white/[0.06] backdrop-blur-3xl pr-8 ">
                <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-cream sm:w-max sm:flex-nowrap sm:gap-5">
                    {links.map((link, index) => (
                        <React.Fragment key={link.hash}>
                            <motion.li
                                data-cursor-hover
                                className="relative flex items-center justify-center h-3/4"
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                            >
                                <Link
                                    className="flex w-full items-center justify-center py-3  transition  pl-4 pr-4 h-9"
                                    href={link.hash}
                                >
                                    {link.name}

                                    <motion.span
                                        className="black-block absolute inset-0  rounded-full -z-10"
                                        layoutId="activeSection"
                                        transition={{
                                            type: "spring",
                                            stiffness: 255,
                                            damping: 55,
                                        }}
                                    ></motion.span>
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
                                        <MiscDropdown />
                                    </motion.li>
                                    <motion.li
                                        data-type="tools"
                                        className="mouse"
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                    >
                                        <ToolsDropdown />
                                    </motion.li>
                                    <motion.li
                                        data-type="showcase"
                                        className="mouse"
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                    >
                                        <UiElementsDropdown />
                                    </motion.li>
                                </>
                            )}
                        </React.Fragment>
                    ))}
                </ul>
            </motion.nav></>
    );
}