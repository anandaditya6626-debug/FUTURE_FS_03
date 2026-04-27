import { motion } from 'framer-motion';
import { reviews } from '../data/cafeData';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

function StarRating({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar key={i} className={i < count ? 'star-filled text-sm' : 'text-gray-300 text-sm'} />
      ))}
    </div>
  );
}

export default function Reviews({ dark }) {
  return (
    <section
      id="reviews"
      className={`py-24 ${dark ? 'bg-warm-dark' : 'bg-white'}`}
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
            💬 What Guests Say
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`font-display text-4xl md:text-5xl font-bold mb-4 ${dark ? 'text-cream' : 'text-coffee-700'}`}
          >
            Guest Reviews
          </motion.h2>
          <div className="section-divider mb-4" />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-base ${dark ? 'text-cream/60' : 'text-coffee-400'}`}
          >
            Real words from real coffee lovers in Dhanbad.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((rev, i) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className={`review-card relative rounded-2xl p-7 border ${
                dark
                  ? 'bg-coffee-800/60 border-gold/15'
                  : 'bg-cream-50 border-coffee-100'
              }`}
            >
              {/* Quote icon */}
              <FaQuoteLeft className={`text-3xl mb-4 opacity-20 ${dark ? 'text-gold' : 'text-coffee-400'}`} />

              <p className={`text-base leading-relaxed mb-6 ${dark ? 'text-cream/80' : 'text-coffee-600'}`}>
                "{rev.text}"
              </p>

              {/* Stars */}
              <StarRating count={rev.rating} />

              {/* Author */}
              <div className="flex items-center gap-4 mt-5 pt-5 border-t border-current/10">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${rev.color} flex items-center justify-center text-white font-bold font-sans text-sm`}>
                  {rev.avatar}
                </div>
                <div>
                  <p className={`font-semibold font-sans text-sm ${dark ? 'text-cream' : 'text-coffee-700'}`}>
                    {rev.name}
                  </p>
                  <p className={`text-xs ${dark ? 'text-cream/50' : 'text-coffee-400'}`}>
                    {rev.role}
                  </p>
                </div>
                <div className="ml-auto">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <FaStar key={j} className="text-gold text-xs" />
                    ))}
                  </div>
                  <p className={`text-xs text-right mt-0.5 ${dark ? 'text-cream/40' : 'text-coffee-300'}`}>
                    Google Review
                  </p>
                </div>
              </div>

              {/* Glow accent */}
              <div className="absolute -top-1 -left-1 w-8 h-8 rounded-full bg-gold/30 blur-lg pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Overall Rating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={`mt-14 text-center rounded-3xl p-10 border ${
            dark
              ? 'bg-gradient-to-br from-coffee-800/80 to-coffee-900/50 border-gold/20'
              : 'bg-gradient-to-br from-cream to-cream-200 border-coffee-200/60'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-gold text-2xl" />
            ))}
          </div>
          <div className={`font-display text-5xl font-bold mb-2 ${dark ? 'text-cream' : 'text-coffee-700'}`}>
            4.9 / 5
          </div>
          <p className={`text-sm ${dark ? 'text-cream/50' : 'text-coffee-400'}`}>
            Based on 500+ Google reviews · Dhanbad's top-rated café
          </p>
        </motion.div>
      </div>
    </section>
  );
}
