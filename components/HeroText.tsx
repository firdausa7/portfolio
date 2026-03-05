'use client'

import { motion } from 'motion/react'
import { Download } from 'lucide-react'

const roleWords = ["I'm", "a", "Software", "Developer"]
const quoteWords = ["I", "want", "to", "make", "things", "and", "make", "a", "Difference"]

export default function HeroText() {
    return (
        <div className="flex flex-col space-y-4 md:space-y-6">
            {/* Animated "I'm a Software Developer" */}
            <p className="text-base sm:text-xl md:text-3xl font-medium text-[#4a4a4a] dark:text-[#a0a0a0] flex flex-wrap gap-x-[0.35em]">
                {roleWords.map((word, i) => {
                    const isHighlighted = word === "Software" || word === "Developer"
                    return (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.2 + i * 0.12,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className={isHighlighted ? "text-[#ffffff] dark:text-[#ededed] underline decoration-accent decoration-2 underline-offset-4" : ""}
                        >
                            {word}
                        </motion.span>
                    )
                })}
            </p>

            {/* Animated quote */}
            <p className="text-sm sm:text-base md:text-xl text-[#6b6b6b] dark:text-[#808080] max-w-lg italic leading-relaxed flex flex-wrap gap-x-[0.3em]">
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.9 }}
                >
                    &ldquo;
                </motion.span>
                {quoteWords.map((word, i) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.4,
                            delay: 1.0 + i * 0.07,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className={word === "Difference" ? "not-italic font-semibold text-white dark:text-[#ededed]" : ""}
                    >
                        {word}
                    </motion.span>
                ))}
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1.0 + quoteWords.length * 0.07 }}
                >
                    &rdquo;
                </motion.span>
            </p>

            {/* Download Resume Button */}
            <motion.a
                href="/resume.pdf"
                download="Firdausa_Salat_Resume.pdf"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 rounded-full bg-accent text-white text-sm font-semibold hover:bg-accent/90 transition-colors w-fit"
            >
                <Download size={16} />
                Download Resume
            </motion.a>
        </div>
    )
}
