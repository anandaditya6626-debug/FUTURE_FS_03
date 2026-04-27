import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState(false);

  useEffect(() => {
    // Show after slight delay so it doesn't appear immediately on load
    const timer = setTimeout(() => setVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="fixed bottom-7 right-7 z-[9999] flex items-center gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {tooltip && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.9 }}
                className="bg-white dark:bg-coffee-800 shadow-warm-lg rounded-xl px-4 py-2.5 border border-green-200 dark:border-green-500/30 pointer-events-none"
              >
                <p className="text-coffee dark:text-cream font-sans text-xs font-semibold whitespace-nowrap">
                  Chat with us on WhatsApp!
                </p>
                <p className="text-coffee/50 dark:text-cream/50 font-sans text-[10px]">
                  Avg. reply time: 2 minutes
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <a
            id="whatsapp-float-btn"
            href="https://wa.me/919999999999?text=Hi%2C+I%27d+like+to+place+an+order."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Brew Haven on WhatsApp"
            onMouseEnter={() => setTooltip(true)}
            onMouseLeave={() => setTooltip(false)}
            className="whatsapp-btn"
          >
            {/* Ping rings */}
            <span className="absolute w-full h-full rounded-full bg-green-400/40 animate-ping" />
            <FaWhatsapp className="text-white text-3xl relative z-10" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
