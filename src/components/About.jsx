import { motion } from 'framer-motion';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { GiCoffeeCup, GiCoffeeMug } from 'react-icons/gi';
import { MdOutlinePeople } from 'react-icons/md';
import { FaQuoteLeft } from 'react-icons/fa';

const stats = [
  { icon: <GiCoffeeCup className="text-2xl" />, value: '10,000+', label: 'Cups Brewed' },
  { icon: <MdOutlinePeople className="text-2xl" />, value: '5,000+', label: 'Happy Customers' },
  { icon: <GiCoffeeMug className="text-2xl" />, value: '30+', label: 'Menu Items' },
  { icon: <HiOutlineLocationMarker className="text-2xl" />, value: '4.9★', label: 'Google Rating' },
];

export default function About({ dark }) {
  return (
    <section id="about" className={`py-24 ${dark ? 'bg-warm-dark' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Image Side ── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-warm-lg h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&q=85"
                alt="Brew Haven Café cozy interior in Dhanbad"
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 ${dark ? 'bg-coffee-900/25' : 'bg-cream/10'}`} />
            </div>

            {/* Floating accent card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className={`absolute -bottom-8 -right-6 rounded-2xl p-5 shadow-warm-lg border ${
                dark ? 'bg-coffee-800 border-gold/30' : 'bg-warm-card border-cream-600/40'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-coffee-600 flex items-center justify-center shadow-gold">
                  <GiCoffeeCup className="text-cream-100 text-xl" />
                </div>
                <div>
                  <div className={`font-display font-bold text-lg ${dark ? 'text-cream' : 'text-coffee-700'}`}>
                    Since 2018
                  </div>
                  <div className={`text-xs font-sans ${dark ? 'text-cream/50' : 'text-coffee-400'}`}>
                    Brewing memories in Dhanbad
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Small secondary image */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -top-6 -left-6 w-32 h-32 rounded-2xl overflow-hidden shadow-warm border-4 border-white dark:border-coffee-800"
            >
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&q=80"
                alt="Artisan latte"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Glow */}
            <div className="absolute -top-8 -left-8 w-40 h-40 rounded-full bg-gold/15 blur-2xl pointer-events-none" />
          </motion.div>

          {/* ── Text Side ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-block text-gold font-sans text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Our Story
            </span>
            <h2 className={`font-display text-4xl md:text-5xl font-bold mb-6 leading-tight ${dark ? 'text-cream' : 'text-coffee-700'}`}>
              A Little Corner{' '}
              <span className="italic text-gold">of Warmth</span>{' '}
              in Dhanbad
            </h2>
            <div className="section-divider mb-8" style={{ marginLeft: 0 }} />

            {/* Quote block */}
            <div className={`relative rounded-2xl p-5 mb-6 border-l-4 border-gold ${dark ? 'bg-coffee-800/40' : 'bg-cream-50'}`}>
              <FaQuoteLeft className={`text-2xl mb-2 opacity-30 ${dark ? 'text-gold' : 'text-coffee-400'}`} />
              <p className={`text-sm leading-relaxed italic ${dark ? 'text-cream/80' : 'text-coffee-600'}`}>
                "Brew Haven Café is a cozy space in the heart of Dhanbad where people come together
                over great coffee and delicious food."
              </p>
            </div>

            <div className={`space-y-4 text-sm leading-relaxed ${dark ? 'text-cream/70' : 'text-coffee-500'}`}>
              <p>
                Founded by{' '}
                <strong className={dark ? 'text-cream font-semibold' : 'text-coffee-700 font-semibold'}>
                  Aditya Anand
                </strong>
                , the café is built on the idea of creating a warm and welcoming environment where
                every visit feels special. From the carefully curated menu to the thoughtfully
                designed interiors — every detail is crafted with love.
              </p>
              <p>
                Whether you're a student looking for a quiet corner to study, a professional
                catching up with colleagues, or friends making memories over momos and cold coffee —
                Brew Haven is your home away from home in Dhanbad.
              </p>
            </div>

            {/* Founder signature */}
            <div className={`mt-8 pt-6 border-t flex items-center gap-4 ${dark ? 'border-gold/20' : 'border-cream-600/40'}`}>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-coffee-600 flex items-center justify-center text-white font-bold font-sans shadow-gold">
                AA
              </div>
              <div>
                <p className={`font-display font-semibold text-base ${dark ? 'text-cream' : 'text-coffee-700'}`}>
                  Aditya Anand
                </p>
                <p className={`text-xs font-sans ${dark ? 'text-gold' : 'text-coffee-400'}`}>
                  Founder, Brew Haven Café
                </p>
              </div>
              <p className={`ml-auto font-display italic text-sm ${dark ? 'text-cream/40' : 'text-coffee-300'}`}>
                "Coffee is our art."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className={`rounded-2xl p-6 text-center border transition-all duration-300 ${
                dark
                  ? 'bg-coffee-800/50 border-gold/15 hover:border-gold/40'
                  : 'bg-cream-50 border-coffee-100 hover:border-gold/50 hover:shadow-warm'
              }`}
            >
              <div className={`flex justify-center mb-3 ${dark ? 'text-gold' : 'text-coffee-600'}`}>
                {stat.icon}
              </div>
              <div className={`font-display text-3xl font-bold mb-1 ${dark ? 'text-cream' : 'text-coffee-700'}`}>
                {stat.value}
              </div>
              <div className={`text-xs font-sans ${dark ? 'text-cream/50' : 'text-coffee-400'}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
