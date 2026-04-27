import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { HiOutlineCalendar } from 'react-icons/hi';

export default function StickyOrderBtn({ onBooking, dark }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past the hero (~90vh)
      setVisible(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 280, damping: 26 }}
          className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[9000] flex items-center gap-3"
        >
          {/* Book a Table */}
          <motion.button
            onClick={onBooking}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            id="sticky-book-btn"
            className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold shadow-warm-lg border backdrop-blur-sm transition-all duration-300 ${
              dark
                ? 'bg-coffee-800/90 border-gold/30 text-gold hover:bg-coffee-700/90'
                : 'bg-white/90 border-coffee-200 text-coffee-700 hover:bg-cream-50'
            }`}
          >
            <HiOutlineCalendar className="text-sm" />
            Book Table
          </motion.button>

          {/* Order Now */}
          <motion.a
            href="https://wa.me/919999999999?text=Hi%2C+I%27d+like+to+place+an+order."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            id="sticky-order-btn"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold btn-primary shadow-warm-lg"
          >
            <FaWhatsapp className="text-base" />
            Order Now
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
