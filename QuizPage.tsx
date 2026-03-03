'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { questions } from '@/lib/questions';
import { Perfume } from '@/lib/perfumes';
import { calculateMatch, initializeScores, updateScores, UserScores } from '@/lib/matching';

interface QuizPageProps {
  onComplete: (perfume: Perfume) => void;
}

export default function QuizPage({ onComplete }: QuizPageProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<UserScores>(initializeScores());
  const [isTransitioning, setIsTransitioning] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  const handleAnswer = (optionIndex: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const selectedOption = question.options[optionIndex];
    const newScores = updateScores(scores, selectedOption.attributes);
    setScores(newScores);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setIsTransitioning(false);
      } else {
        const matchedPerfume = calculateMatch(newScores);
        onComplete(matchedPerfume);
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-cream relative overflow-hidden">
      {/* Progress Bar with shimmer */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-charcoal/5 z-50">
        <motion.div
          className="h-full relative overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-moss/40 via-amber/50 to-moss/40" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>

      {/* Question Counter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-8 left-8 text-xs text-charcoal/30 tracking-widest uppercase z-40 font-light"
      >
        {String(currentQuestion + 1).padStart(2, '0')} / {String(questions.length).padStart(2, '0')}
      </motion.div>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen px-6 py-24">
        <div className="max-w-4xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 60, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -40, y: -20 }}
              transition={{ 
                duration: 0.7, 
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              {/* Question Emoji */}
              <motion.div
                className="flex justify-center mb-10"
                initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
              >
                <motion.div
                  animate={{ 
                    y: [0, -12, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-7xl filter drop-shadow-sm"
                >
                  {question.emoji}
                </motion.div>
              </motion.div>

              {/* Question Text */}
              <motion.h2
                className="text-4xl md:text-5xl font-serif text-charcoal mb-20 text-center 
                           leading-relaxed tracking-wide px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {question.text}
              </motion.h2>

              {/* Options */}
              <div className="space-y-3 max-w-3xl mx-auto">
                {question.options.map((option, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.4 + index * 0.08,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    whileHover={{ 
                      x: 8,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(index)}
                    disabled={isTransitioning}
                    className="group relative w-full text-left px-8 py-6 
                               border border-charcoal/8 hover:border-charcoal/15
                               transition-all duration-500 overflow-hidden
                               bg-white/30 hover:bg-white/50 backdrop-blur-sm
                               disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {/* Subtle gradient on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-moss/5 to-transparent opacity-0 
                                 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    {/* Option Emoji with animation */}
                    <motion.span 
                      className="relative z-10 inline-flex items-center justify-center text-2xl mr-4"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {option.emoji}
                    </motion.span>

                    {/* Option Letter */}
                    <span className="relative z-10 inline-flex items-center justify-center w-7 h-7 
                                     rounded-full border border-charcoal/15 text-charcoal/40 
                                     text-xs mr-4 font-light tracking-wider
                                     group-hover:border-charcoal/25 group-hover:text-charcoal/60 
                                     transition-all duration-300">
                      {String.fromCharCode(65 + index)}
                    </span>

                    {/* Option Text */}
                    <span className="relative z-10 text-base md:text-lg text-charcoal/70 
                                     group-hover:text-charcoal transition-colors duration-300 
                                     font-light tracking-wide">
                      {option.text}
                    </span>

                    {/* Hover Arrow */}
                    <motion.div
                      className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 
                                 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: -5 }}
                      whileHover={{ x: 0 }}
                    >
                      <svg
                        className="w-4 h-4 text-charcoal/30"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </motion.div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Decorative floating element */}
      <motion.div
        className="fixed bottom-12 right-12 w-40 h-40 rounded-full bg-moss/5 blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
