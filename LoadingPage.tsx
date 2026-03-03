'use client';

import { motion } from 'framer-motion';

export default function LoadingPage() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6 relative overflow-hidden">
      {/* Smoke/Mist effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-charcoal/5 blur-3xl"
            style={{
              width: `${150 + i * 40}px`,
              height: `${150 + i * 40}px`,
            }}
            animate={{
              y: [0, -40, -80],
              scale: [1, 1.3, 1.5],
              opacity: [0.3, 0.5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Droplet Animation */}
        <div className="mb-16 flex justify-center">
          <div className="relative w-32 h-40">
            <svg
              viewBox="0 0 100 140"
              className="w-full h-full text-charcoal/15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="35" y="10" width="30" height="20" stroke="currentColor" strokeWidth="0.5" />
              <path
                d="M 38 30 L 38 45 L 25 50 L 25 125 L 75 125 L 75 50 L 62 45 L 62 30 Z"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
              />
              <motion.rect
                x="27"
                y="90"
                width="46"
                height="33"
                fill="currentColor"
                opacity="0.1"
                animate={{
                  y: [90, 85, 90],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </svg>

            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 -translate-x-1/2 w-1.5 h-2 rounded-full bg-charcoal/20"
                style={{ top: '30%' }}
                animate={{
                  y: [0, 60],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: "easeIn",
                }}
              />
            ))}
          </div>
        </div>

        <motion.h2
          className="text-3xl md:text-4xl font-serif text-charcoal mb-8 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          正在调配你的专属香气
        </motion.h2>

        <div className="flex justify-center items-center gap-2 mb-12">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-charcoal/30"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <motion.p
          className="text-sm text-charcoal/40 font-light tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          分析气质维度
        </motion.p>
      </div>
    </div>
  );
}
