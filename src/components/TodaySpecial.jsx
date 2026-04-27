import { motion } from 'framer-motion';
import { todaySpecial } from '../data/cafeData';
import { FaWhatsapp } from 'react-icons/fa';
import { HiOutlineClock, HiOutlineFire } from 'react-icons/hi';

export default function TodaySpecial({ dark }) {
  const handleOrder = () => {
    const msg = encodeURIComponent(`Hi! I'd like to order today's special: ${todaySpecial.name} (₹${todaySpecial.price})`);
    window.open(`https://wa.me/919999999999?text=${msg}`, '_blank');
  };

  return (
    <section
      id="special"
      className={`py-24 ${
        dark
          ? 'bg-gradient-to-br from-coffee-900 via-coffee-800 to-warm-dark'
          : 'bg-gradient-to-br from-cream-200 via-cream to-coffee-100/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-gold font-sans text-sm font-semibold tracking-widest uppercase mb-3"
          >
            ✨ Limited Daily
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`font-display text-4xl md:text-5xl font-bold mb-4 ${dark ? 'text-cream' : 'text-coffee-700'}`}
          >
            Today's Special
          </motion.h2>
          <div className="section-divider mb-4" />
        </div>

        {/* Special Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`relative rounded-3xl overflow-hidden max-w-5xl mx-auto shadow-warm-lg glow-pulse ${
            dark ? 'bg-coffee-800/80 border border-gold/30' : 'bg-white border border-cream-600/30'
          }`}
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative h-80 md:h-auto overflow-hidden">
              <motion.img
                src={todaySpecial.image}
                alt={todaySpecial.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/30 md:to-black/50" />
              {/* Animated pulse badge */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-5 left-5 bg-gold text-coffee-900 text-sm font-bold px-4 py-2 rounded-full shadow-gold"
              >
                {todaySpecial.badge}
              </motion.div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="flex items-center gap-2 mb-3">
                <HiOutlineFire className="text-gold text-xl" />
                <span className="text-gold font-sans text-sm font-semibold tracking-wider uppercase">
                  Chef's Recommendation
                </span>
              </div>

              <h3 className={`font-display text-2xl md:text-3xl font-bold mb-4 ${dark ? 'text-cream' : 'text-coffee-700'}`}>
                {todaySpecial.name}
              </h3>

              <p className={`text-base leading-relaxed mb-6 ${dark ? 'text-cream/70' : 'text-coffee-500'}`}>
                {todaySpecial.description}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-display text-4xl font-bold text-gold">
                  ₹{todaySpecial.price}
                </span>
                <span className={`text-lg line-through ${dark ? 'text-cream/30' : 'text-coffee-300'}`}>
                  ₹{todaySpecial.originalPrice}
                </span>
                <span className="bg-green-500/20 text-green-600 dark:text-green-400 text-xs font-bold px-2.5 py-1 rounded-full border border-green-500/30">
                  25% OFF
                </span>
              </div>

              {/* Availability */}
              <div className={`flex items-center gap-2 mb-8 text-sm ${dark ? 'text-cream/50' : 'text-coffee-400'}`}>
                <HiOutlineClock className="text-base" />
                <span>Available today · 9 AM – 10 PM · Limited cups</span>
              </div>

              {/* CTA */}
              <button
                id="special-order-btn"
                onClick={handleOrder}
                className="btn-primary flex items-center justify-center gap-3 py-4 rounded-2xl text-base font-semibold animate-pulse-gold"
              >
                <FaWhatsapp className="text-xl" />
                Order Today's Special
              </button>
            </div>
          </div>

          {/* Decorative glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-coffee-400/10 blur-2xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
