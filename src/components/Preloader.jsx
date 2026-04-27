import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GiCoffeeCup } from 'react-icons/gi';

export default function Preloader({ onDone }) {
  const [phase, setPhase] = useState('fill'); // fill → text → exit

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('text'), 1000);
    const t2 = setTimeout(() => setPhase('exit'), 2400);
    const t3 = setTimeout(() => {
      onDone();
      setPhase('done');
    }, 2900);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-gradient-to-br from-coffee-900 via-coffee-800 to-warm-dark"
        >
          {/* Animated Cup */}
          <div className="relative mb-8 flex flex-col items-center">
            {/* Steam particles */}
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 0, scaleX: 1 }}
                animate={phase === 'fill' || phase === 'text' ? {
                  opacity: [0, 0.7, 0],
                  y: [-4, -36],
                  scaleX: [1, 1.4, 0.8],
                } : {}}
                transition={{ duration: 1.4, delay: i * 0.4, repeat: Infinity, ease: 'easeOut' }}
                className="absolute bg-cream/30 rounded-full blur-sm w-2 h-6"
                style={{ left: `${28 + i * 18}%`, top: '-28px' }}
              />
            ))}

            {/* Cup body */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative"
            >
              {/* Cup SVG */}
              <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
                {/* Saucer */}
                <ellipse cx="48" cy="84" rx="38" ry="7" fill="#4a2510" />
                {/* Cup */}
                <path d="M16 38 L22 76 Q48 82 74 76 L80 38Z" fill="#6b3a1f" />
                <path d="M16 38 L22 76 Q48 82 74 76 L80 38Z" fill="url(#cupGrad)" />
                {/* Handle */}
                <path d="M80 46 Q96 46 96 58 Q96 70 80 70" stroke="#8b5e3c" strokeWidth="5" fill="none" strokeLinecap="round" />
                {/* Rim */}
                <ellipse cx="48" cy="38" rx="32" ry="7" fill="#8b5e3c" />
                {/* Coffee fill — animated */}
                <motion.ellipse
                  cx="48" cy="38" rx="28" ry="5.5"
                  fill="#c9a84c"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
                {/* Shimmer */}
                <motion.path
                  d="M34 42 Q48 36 62 42"
                  stroke="rgba(255,255,255,0.25)" strokeWidth="2" fill="none" strokeLinecap="round"
                  animate={{ opacity: [0.2, 0.8, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <defs>
                  <linearGradient id="cupGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#8b5e3c" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#4a2510" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>

          {/* Brand text */}
          <AnimatePresence>
            {(phase === 'text' || phase === 'exit') && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h1 className="font-display text-3xl font-bold text-cream tracking-wide">
                  Brew Haven
                </h1>
                <p className="font-sans text-gold text-sm tracking-[0.3em] uppercase mt-1">
                  Café · Dhanbad
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Loading dots */}
          <div className="flex gap-2 mt-8">
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-gold/60"
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
