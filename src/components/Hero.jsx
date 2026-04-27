import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';
import { HiOutlineCalendar } from 'react-icons/hi';

const CoffeeBean = ({ style, delay = 0, size = 24 }) => (
  <motion.div
    style={style}
    animate={{ y: [0, -22, -8, -22, 0], rotate: [0, 120, 240, 360], scale: [1, 1.06, 0.94, 1.06, 1] }}
    transition={{ duration: 7 + delay, ease: 'easeInOut', repeat: Infinity, delay }}
    className="absolute opacity-30 dark:opacity-20 pointer-events-none"
  >
    <svg width={size} height={size * 1.4} viewBox="0 0 40 56" fill="none">
      <ellipse cx="20" cy="28" rx="18" ry="26" fill="#c9a84c" />
      <path d="M20 4 Q32 28 20 52 Q8 28 20 4Z" fill="#6b3a1f" opacity="0.6" />
      <ellipse cx="20" cy="28" rx="18" ry="26" stroke="#6b3a1f" strokeWidth="1.5" fill="none" />
    </svg>
  </motion.div>
);

const Steam = ({ left, delay }) => (
  <motion.div
    className="absolute bottom-0 rounded-full bg-white/25 blur-sm pointer-events-none"
    style={{ left, width: 8, height: 30 }}
    animate={{ y: [0, -80], opacity: [0, 0.55, 0], scaleX: [1, 1.5, 2.2] }}
    transition={{ duration: 2.8, delay, repeat: Infinity, ease: 'easeOut' }}
  />
);

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.75, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] } }),
};

export default function Hero({ dark, onBooking }) {
  const [offset, setOffset] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const onScroll = () => { if (heroRef.current) setOffset(window.scrollY * 0.32); };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0" style={{ transform: `translateY(${offset}px)` }}>
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=90"
          alt="Brew Haven Café interior"
          className="w-full h-full object-cover object-center scale-110"
        />
      </div>

      {/* Multi-layer overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/45 via-black/60 to-black/92" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-coffee-900/30 via-transparent to-coffee-900/20" />

      {/* Floating beans */}
      <CoffeeBean style={{ top: '14%', left: '7%' }} delay={0} size={34} />
      <CoffeeBean style={{ top: '20%', right: '9%' }} delay={1.5} size={26} />
      <CoffeeBean style={{ top: '62%', left: '4%' }} delay={2.8} size={20} />
      <CoffeeBean style={{ top: '72%', right: '7%' }} delay={0.9} size={30} />
      <CoffeeBean style={{ top: '38%', right: '2.5%' }} delay={3.6} size={18} />
      <CoffeeBean style={{ top: '8%', left: '52%' }} delay={1.3} size={16} />
      <CoffeeBean style={{ top: '50%', left: '2%' }} delay={4.2} size={14} />

      {/* Steam effect */}
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 z-20 w-24 h-16 pointer-events-none">
        <Steam left="15%" delay={0} />
        <Steam left="40%" delay={0.9} />
        <Steam left="70%" delay={1.8} />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-5xl mx-auto">
        {/* Now Serving Badge */}
        <motion.div
          custom={0} initial="hidden" animate="visible" variants={textVariants}
          className="inline-flex items-center gap-2 mb-7 px-5 py-2 rounded-full border border-gold/50 bg-gold/10 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-gold font-sans text-xs font-semibold tracking-[0.2em] uppercase">
            Now Serving in Dhanbad
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1} initial="hidden" animate="visible" variants={textVariants}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
        >
          Where Every Sip{' '}
          <br className="hidden sm:block" />
          <span className="text-gradient italic">Feels Like Home</span>{' '}☕
        </motion.h1>

        {/* Subtext */}
        <motion.p
          custom={2} initial="hidden" animate="visible" variants={textVariants}
          className="font-sans text-base md:text-xl text-cream-200/90 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Freshly brewed coffee, delicious bites, and cozy vibes in the heart of Dhanbad.
        </motion.p>

        {/* CTA Row */}
        <motion.div
          custom={3} initial="hidden" animate="visible" variants={textVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            id="hero-whatsapp-btn"
            href="https://wa.me/919999999999?text=Hi%2C+I%27d+like+to+place+an+order."
            target="_blank" rel="noopener noreferrer"
            className="btn-primary flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold min-w-[200px] justify-center"
          >
            <FaWhatsapp className="text-xl" />
            Order on WhatsApp
          </a>

          <button
            id="hero-explore-btn"
            onClick={() => handleScroll('menu')}
            className="btn-outline flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold min-w-[200px] justify-center"
          >
            Explore Menu
          </button>

          <button
            id="hero-book-btn"
            onClick={onBooking}
            className="flex items-center gap-2.5 px-7 py-4 rounded-full text-sm font-semibold min-w-[200px] justify-center border border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300"
          >
            <HiOutlineCalendar className="text-lg" />
            Book a Table
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}
          className="absolute -bottom-4 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => handleScroll('menu')}
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 2.2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-cream/50 hover:text-cream transition-colors"
            aria-label="Scroll to menu"
          >
            <span className="text-[10px] font-sans tracking-[0.25em] uppercase">Scroll</span>
            <HiArrowDown className="text-xl" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
