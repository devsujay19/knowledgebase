"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";

export function AuroraBackgroundMain() {
    return (
        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
                <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
                    Things<br />I&apos;ve Learnt so far.
                </div>
                <div className="font-extralight text-[25px] md:text-base dark:text-neutral-200 pt-4">
                    The human mind holds a vast amount of knowledge during every events near it, but sharing it all can be overwhelming. This app captures some of my insights that might be helpful and interesting to others.
                </div>
            </motion.div>
        </AuroraBackground>
    );
};