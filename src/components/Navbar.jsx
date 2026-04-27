import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { GiCoffeeCup } from 'react-icons/gi';
import { HiOutlineCalendar } from 'react-icons/hi';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ dark, toggleDark, onBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map(l => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.25 }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? dark
              ? 'glass-dark shadow-warm border-b border-gold/20'
              : 'glass shadow-warm border-b border-coffee-200/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <a href="#home" onClick={e => { e.preventDefault(); handleNav('#home'); }}
              className="flex items-center gap-2.5 group" aria-label="Brew Haven Café Home">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-9 h-9 rounded-full bg-gradient-to-br from-gold to-coffee-600 flex items-center justify-center shadow-gold"
              >
                <GiCoffeeCup className="text-cream-100 text-lg" />
              </motion.div>
              <div className="flex flex-col leading-none">
                <span className={`font-display font-bold text-lg ${dark ? 'text-cream' : 'text-coffee-700'} transition-colors`}>
                  Brew Haven
                </span>
                <span className="text-[10px] font-sans tracking-[0.25em] text-gold uppercase font-medium">
                  Café · Dhanbad
                </span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={e => { e.preventDefault(); handleNav(link.href); }}
                  className={`relative px-4 py-2 text-sm font-medium font-sans rounded-lg group transition-colors duration-200 ${
                    active === link.href.replace('#', '')
                      ? 'text-gold'
                      : dark ? 'text-cream/70 hover:text-cream' : 'text-coffee/70 hover:text-coffee'
                  }`}
                >
                  {link.label}
                  <motion.span
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gold rounded-full"
                    animate={{ width: active === link.href.replace('#', '') ? 20 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              ))}
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-2">
              {/* Book a Table */}
              <button
                id="navbar-book-btn"
                onClick={onBooking}
                className={`hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-300 ${
                  dark
                    ? 'border-gold/40 text-gold hover:bg-gold/15'
                    : 'border-coffee-300 text-coffee-600 hover:border-gold hover:text-gold hover:bg-gold/5'
                }`}
              >
                <HiOutlineCalendar className="text-sm" />
                Book a Table
              </button>

              {/* Order Now */}
              <a
                href="https://wa.me/919999999999?text=Hi%2C+I%27d+like+to+place+an+order."
                target="_blank" rel="noopener noreferrer"
                id="nav-order-btn"
                className="hidden md:flex btn-primary items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold"
              >
                Order Now
              </a>

              {/* Dark Mode Toggle */}
              <motion.button
                onClick={toggleDark}
                whileTap={{ scale: 0.85 }}
                id="dark-mode-toggle"
                aria-label="Toggle dark mode"
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                  dark ? 'bg-gold/20 text-gold hover:bg-gold/30' : 'bg-coffee-100 text-coffee hover:bg-coffee-200'
                }`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={dark ? 'sun' : 'moon'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {dark ? <FiSun className="text-base" /> : <FiMoon className="text-base" />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(o => !o)}
                id="mobile-menu-toggle"
                aria-label="Toggle mobile menu"
                className={`md:hidden w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                  dark ? 'bg-gold/20 text-cream hover:bg-gold/30' : 'bg-coffee-100 text-coffee hover:bg-coffee-200'
                }`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={mobileOpen ? 'x' : 'menu'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {mobileOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className={`fixed inset-y-0 right-0 z-50 w-72 flex flex-col pt-20 px-6 pb-8 md:hidden ${
                dark ? 'bg-coffee-900/95 backdrop-blur-xl border-l border-gold/20' : 'bg-cream-50/95 backdrop-blur-xl border-l border-coffee-200/50'
              }`}
            >
              <div className="space-y-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={e => { e.preventDefault(); handleNav(link.href); }}
                    initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className={`flex items-center gap-3 py-3.5 px-4 rounded-xl font-sans font-medium text-sm transition-colors ${
                      active === link.href.replace('#', '')
                        ? 'bg-gold/15 text-gold'
                        : dark ? 'text-cream/70 hover:text-cream hover:bg-white/5' : 'text-coffee hover:bg-coffee-100'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <div className="mt-8 space-y-3">
                <button
                  onClick={() => { setMobileOpen(false); onBooking(); }}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold border transition-all ${
                    dark ? 'border-gold/40 text-gold hover:bg-gold/10' : 'border-coffee-300 text-coffee-600 hover:bg-cream-100'
                  }`}
                >
                  <HiOutlineCalendar /> Book a Table
                </button>
                <a
                  href="https://wa.me/919999999999?text=Hi%2C+I%27d+like+to+place+an+order."
                  target="_blank" rel="noopener noreferrer"
                  className="btn-primary block text-center px-6 py-3 rounded-xl text-sm font-semibold"
                >
                  Order Now
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
