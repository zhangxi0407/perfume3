'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CoverPageProps {
  onStart: () => void;
}

export default function CoverPage({ onStart }: CoverPageProps) {
  const [titleChars, setTitleChars] = useState<string[]>([]);
  const title = "寻找属于你的灵魂气味";

  useEffect(() => {
    setTitleChars(title.split(''));
  }, []);

  // Floating scent molecules
  const molecules = ['✨', '🌸', '🍃', '💫', '🌿', '🪷'];

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated background gradient orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-moss/10 to-transparent blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-tr from-amber/10 to-transparent blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
          x: [0, -20, 0],
          y: [0, 30, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Floating scent molecules */}
      {molecules.map((emoji, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl opacity-20"
          style={{
            left: `${15 + index * 15}%`,
            top: `${20 + (index % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(index) * 20, 0],
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5,
          }}
        >
          {emoji}
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center max-w-4xl relative z-10"
      >
        {/* Animated Title */}
        <div className="mb-16">
          {/* Decorative top element */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-6xl opacity-20"
            >
              ✦
            </motion.div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-serif text-charcoal mb-10 tracking-wide leading-tight">
            {titleChars.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.5 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>
          
          {/* Elegant divider with animation */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 60, opacity: 0.2 }}
              transition={{ duration: 1.2, delay: 1.5 }}
              className="h-px bg-charcoal"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="w-1.5 h-1.5 rounded-full bg-charcoal"
            />
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 60, opacity: 0.2 }}
              transition={{ duration: 1.2, delay: 1.5 }}
              className="h-px bg-charcoal"
            />
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="text-base md:text-lg text-charcoal/60 font-light leading-loose tracking-wide max-w-2xl mx-auto"
          >
            每一种香气都是一段故事的开始
            <br />
            让我们通过二十五个问题，为你找到那个独特的嗅觉印记
          </motion.p>
        </div>

        {/* Start button with enhanced animation */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.3 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 40px rgba(45, 45, 45, 0.1)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="group relative px-20 py-6 border border-charcoal/15 
                     hover:border-charcoal/30 transition-all duration-700 
                     overflow-hidden bg-white/40 backdrop-blur-sm"
        >
          <span className="relative z-10 text-sm tracking-widest uppercase font-medium text-charcoal/80 
                           group-hover:text-charcoal transition-colors duration-500">
            开始探索
          </span>
          
          {/* Multiple layer hover effects */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-moss/5 via-amber/5 to-moss/5"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
          
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'radial-gradient(circle at center, rgba(74, 93, 78, 0.05) 0%, transparent 70%)'
            }}
          />
        </motion.button>

        {/* Brand names with stagger animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.6 }}
          className="mt-20 flex items-center justify-center gap-4 text-xs text-charcoal/30 
                     tracking-widest uppercase font-light"
        >
          {['Diptyque', 'L\'Artisan', 'Le Labo', 'Aesop'].map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8 + index * 0.1 }}
              className="flex items-center gap-4"
            >
              <span className="hover:text-charcoal/50 transition-colors duration-300 cursor-default">
                {brand}
              </span>
              {index < 3 && (
                <motion.span 
                  className="w-1 h-1 rounded-full bg-charcoal/20"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative bottom element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="mt-12 text-charcoal/10 text-2xl"
        >
          <motion.span
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ◇
          </motion.span>
        </motion.div>
      </motion.div>
    </div>
  );
}
