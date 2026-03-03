'use client';

import { motion } from 'framer-motion';
import { Perfume } from '@/lib/perfumes';
import { Droplets, Wind, Sparkles } from 'lucide-react';

interface ResultPageProps {
  perfume: Perfume;
  onRestart: () => void;
}

export default function ResultPage({ perfume, onRestart }: ResultPageProps) {
  return (
    <div className="min-h-screen bg-cream relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-32 right-32 w-96 h-96 rounded-full bg-moss/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-80 h-80 rounded-full bg-amber/10 blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Perfume Illustration - Minimalist bottle */}
            <motion.div
              className="flex justify-center mb-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg
                  width="200"
                  height="280"
                  viewBox="0 0 200 280"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-charcoal/15"
                >
                  {/* Bottle cap */}
                  <rect x="70" y="20" width="60" height="30" stroke="currentColor" strokeWidth="1" />
                  
                  {/* Bottle neck */}
                  <path
                    d="M 75 50 L 75 80 L 50 90 L 50 250 L 150 250 L 150 90 L 125 80 L 125 50 Z"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                  />
                  
                  {/* Liquid */}
                  <motion.rect
                    x="52"
                    y="180"
                    width="96"
                    height="68"
                    fill="currentColor"
                    opacity="0.08"
                    animate={{
                      opacity: [0.08, 0.12, 0.08],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Decorative line */}
                  <line x1="100" y1="120" x2="100" y2="160" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                </svg>
              </motion.div>
            </motion.div>

            {/* Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-xs tracking-widest uppercase text-charcoal/30 mb-6 font-light">
                你的香气肖像
              </p>
              <h1 className="text-6xl md:text-7xl font-serif text-charcoal mb-6 tracking-wide">
                {perfume.name}
              </h1>
              <p className="text-2xl text-charcoal/50 font-light tracking-wide">
                {perfume.brand}
              </p>
            </motion.div>

            {/* Literary Description */}
            <motion.div
              className="mb-20 text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -left-4 top-0 text-6xl text-charcoal/5 font-serif">"</div>
                <p className="text-lg md:text-xl text-charcoal/70 leading-loose font-light tracking-wide px-8">
                  {perfume.description}
                </p>
                <div className="absolute -right-4 bottom-0 text-6xl text-charcoal/5 font-serif">"</div>
              </div>
            </motion.div>

            {/* Notes Section - Artistic Layout */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h3 className="text-center text-sm tracking-widest uppercase text-charcoal/40 mb-12 font-light">
                香气层次
              </h3>
              
              <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
                {/* Top Notes */}
                <div className="text-center group">
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 rounded-full border border-charcoal/10 
                               flex items-center justify-center group-hover:border-charcoal/20 
                               transition-colors duration-500"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Droplets size={32} strokeWidth={1} className="text-charcoal/20" />
                  </motion.div>
                  <h4 className="text-xs tracking-widest uppercase text-charcoal/40 mb-4 font-light">
                    前调
                  </h4>
                  <div className="space-y-2">
                    {perfume.notes.top.map((note, index) => (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                        className="text-charcoal/60 font-light text-sm tracking-wide"
                      >
                        {note}
                      </motion.p>
                    ))}
                  </div>
                </div>

                {/* Middle Notes */}
                <div className="text-center group">
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 rounded-full border border-charcoal/10 
                               flex items-center justify-center group-hover:border-charcoal/20 
                               transition-colors duration-500"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Sparkles size={32} strokeWidth={1} className="text-charcoal/20" />
                  </motion.div>
                  <h4 className="text-xs tracking-widest uppercase text-charcoal/40 mb-4 font-light">
                    中调
                  </h4>
                  <div className="space-y-2">
                    {perfume.notes.middle.map((note, index) => (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0 + index * 0.1 }}
                        className="text-charcoal/60 font-light text-sm tracking-wide"
                      >
                        {note}
                      </motion.p>
                    ))}
                  </div>
                </div>

                {/* Base Notes */}
                <div className="text-center group">
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 rounded-full border border-charcoal/10 
                               flex items-center justify-center group-hover:border-charcoal/20 
                               transition-colors duration-500"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Wind size={32} strokeWidth={1} className="text-charcoal/20" />
                  </motion.div>
                  <h4 className="text-xs tracking-widest uppercase text-charcoal/40 mb-4 font-light">
                    后调
                  </h4>
                  <div className="space-y-2">
                    {perfume.notes.base.map((note, index) => (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 + index * 0.1 }}
                        className="text-charcoal/60 font-light text-sm tracking-wide"
                      >
                        {note}
                      </motion.p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Attributes - Minimalist Tags */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h3 className="text-center text-sm tracking-widest uppercase text-charcoal/40 mb-8 font-light">
                气质特征
              </h3>
              <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                {Object.entries(perfume.attributes).map(([key, values]) =>
                  values.slice(0, 2).map((value, index) => (
                    <motion.span
                      key={`${key}-${index}`}
                      className="px-5 py-2 border border-charcoal/10 text-xs text-charcoal/50 
                                 tracking-widest bg-white/30 backdrop-blur-sm font-light
                                 hover:border-charcoal/20 hover:text-charcoal/70 
                                 transition-all duration-500"
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.3 + index * 0.05 }}
                    >
                      {value}
                    </motion.span>
                  ))
                )}
              </div>
            </motion.div>

            {/* Recommended Scenes */}
            <motion.div
              className="mb-20 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <h3 className="text-sm tracking-widest uppercase text-charcoal/40 mb-6 font-light">
                推荐穿着场景
              </h3>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-charcoal/60 font-light">
                {perfume.attributes.scene.map((scene, index) => (
                  <span key={index} className="tracking-wide">
                    {scene}
                    {index < perfume.attributes.scene.length - 1 && (
                      <span className="mx-3 text-charcoal/20">·</span>
                    )}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Action Button */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onRestart}
                className="group relative px-12 py-4 border border-charcoal/10 
                           hover:border-charcoal/20 transition-all duration-700 overflow-hidden"
              >
                <span className="relative z-10 text-xs tracking-widest uppercase text-charcoal/60 
                                 group-hover:text-charcoal transition-colors duration-500 font-light">
                  重新探索
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-charcoal/3 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </motion.button>
            </motion.div>

            {/* Footer Note */}
            <motion.p
              className="text-center mt-16 text-xs text-charcoal/30 tracking-widest font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              建议前往专柜试香 · 感受真实的香气层次
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
