import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData, menuCategories } from '../data/cafeData';
import { FaWhatsapp } from 'react-icons/fa';

// Ripple effect hook
function useRipple() {
  const [ripples, setRipples] = useState([]);
  const trigger = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples(r => [...r, { id, x, y }]);
    setTimeout(() => setRipples(r => r.filter(rp => rp.id !== id)), 700);
  };
  return { ripples, trigger };
}

const tabIcons = {
  'Coffee': '☕',
  'Snacks & Quick Bites': '🍞',
  'Special Items': '⭐',
  'Desserts': '🍮',
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.92 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.45, delay: i * 0.06, ease: [0.34, 1.56, 0.64, 1] },
  }),
};

function MenuCard({ item, index, dark }) {
  const { ripples, trigger } = useRipple();

  const handleOrder = (e) => {
    trigger(e);
    const msg = encodeURIComponent(`Hi! I'd like to order: ${item.name} (₹${item.price})`);
    setTimeout(() => window.open(`https://wa.me/919999999999?text=${msg}`, '_blank'), 150);
  };

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={cardVariants}
      whileHover={{ y: -10, transition: { duration: 0.3, ease: 'easeOut' } }}
      className={`group relative rounded-2xl overflow-hidden border flex flex-col cursor-pointer transition-shadow duration-300 ${
        dark
          ? 'bg-coffee-800/60 border-gold/10 hover:border-gold/40 hover:shadow-[0_20px_60px_rgba(201,168,76,0.15)]'
          : 'bg-white border-coffee-100/80 hover:border-gold/40 hover:shadow-[0_20px_60px_rgba(107,58,31,0.15)]'
      }`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Badge */}
        {item.badge && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, delay: index * 0.06 + 0.2 }}
            className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg"
          >
            {item.badge}
          </motion.span>
        )}

        {/* Price */}
        <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-gold text-sm font-bold px-3 py-1 rounded-full border border-gold/30">
          ₹{item.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className={`font-display font-semibold text-base mb-1.5 ${dark ? 'text-cream' : 'text-coffee-700'}`}>
          {item.name}
        </h3>
        <p className={`text-xs leading-relaxed flex-1 mb-4 ${dark ? 'text-cream/55' : 'text-coffee-400'}`}>
          {item.description}
        </p>

        {/* Order button with ripple */}
        <button
          onClick={handleOrder}
          className={`relative overflow-hidden w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
            dark
              ? 'bg-gold/15 hover:bg-gold text-gold hover:text-coffee-900 border border-gold/30 hover:border-gold'
              : 'bg-coffee-50 hover:bg-gold text-coffee-600 hover:text-coffee-900 border border-coffee-200 hover:border-gold hover:shadow-gold'
          }`}
          aria-label={`Order ${item.name} on WhatsApp`}
        >
          {/* Ripples */}
          {ripples.map(rp => (
            <span
              key={rp.id}
              style={{ left: rp.x, top: rp.y }}
              className="absolute w-0 h-0 rounded-full bg-white/40 animate-[ripple_0.7s_ease-out_forwards] pointer-events-none"
            />
          ))}
          <FaWhatsapp className="text-sm" />
          Order This
        </button>
      </div>

      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(201,168,76,0.25)' }} />
    </motion.div>
  );
}

export default function Menu({ dark }) {
  const [activeTab, setActiveTab] = useState('Coffee');

  return (
    <section id="menu" className={`py-24 ${dark ? 'bg-warm-dark' : 'bg-warm-bg'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-block text-gold font-sans text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          >
            ☕ Explore Flavours
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className={`font-display text-4xl md:text-5xl font-bold mb-4 ${dark ? 'text-cream' : 'text-coffee-700'}`}
          >
            Our Menu
          </motion.h2>
          <div className="section-divider mb-5" />
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className={`max-w-md mx-auto text-sm ${dark ? 'text-cream/60' : 'text-coffee-400'}`}
          >
            Crafted with love, served with warmth — every item on our menu tells a story.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menuCategories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setActiveTab(cat)}
              whileTap={{ scale: 0.95 }}
              id={`menu-tab-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              className={`px-5 py-2.5 rounded-2xl font-sans font-semibold text-sm transition-all duration-300 border ${
                activeTab === cat
                  ? 'bg-gradient-to-r from-gold to-gold-light text-coffee-900 border-gold shadow-gold'
                  : dark
                    ? 'bg-coffee-800/50 border-gold/15 text-cream/60 hover:text-cream hover:border-gold/40'
                    : 'bg-white border-coffee-100 text-coffee-500 hover:text-coffee hover:border-gold/40 hover:shadow-warm'
              }`}
            >
              {tabIcons[cat]} {cat}
            </motion.button>
          ))}
        </div>

        {/* Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {menuData[activeTab].map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} dark={dark} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a
            href="https://wa.me/919999999999?text=Hi%2C+I%27d+like+to+see+the+full+menu+and+place+an+order!"
            target="_blank" rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2.5 px-9 py-4 rounded-full text-sm font-semibold"
          >
            <FaWhatsapp className="text-lg" />
            View Full Menu on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
