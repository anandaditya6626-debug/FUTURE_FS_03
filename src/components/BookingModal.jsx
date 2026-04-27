import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { HiX, HiOutlineCalendar, HiOutlinePhone, HiOutlineUser, HiOutlineClock } from 'react-icons/hi';
import toast from 'react-hot-toast';

export default function BookingModal({ open, onClose, dark }) {
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '', guests: '2' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.date || !form.time) {
      toast.error('Please fill in all required fields!');
      return;
    }
    setSubmitting(true);
    const msg = encodeURIComponent(
      `Hi! I'd like to book a table at Brew Haven Café.\n\n` +
      `📛 Name: ${form.name}\n` +
      `📱 Phone: ${form.phone}\n` +
      `📅 Date: ${form.date}\n` +
      `🕐 Time: ${form.time}\n` +
      `👥 Guests: ${form.guests}\n\n` +
      `Please confirm my reservation. Thank you!`
    );
    setTimeout(() => {
      window.open(`https://wa.me/919999999999?text=${msg}`, '_blank');
      setSubmitting(false);
      setForm({ name: '', phone: '', date: '', time: '', guests: '2' });
      onClose();
      toast.success('Booking request sent via WhatsApp! ☕', {
        icon: '🎉',
        duration: 4000,
      });
    }, 700);
  };

  const inputClass = `w-full px-4 py-3 rounded-xl text-sm outline-none border-2 transition-all duration-300 font-sans ${
    dark
      ? 'bg-coffee-700/50 border-gold/20 text-cream placeholder-cream/30 focus:border-gold/60 focus:bg-coffee-700/70'
      : 'bg-cream-50 border-coffee-100 text-coffee-700 placeholder-coffee-300 focus:border-gold/60 focus:bg-white'
  }`;

  const labelClass = `block text-xs font-semibold mb-1.5 ${dark ? 'text-cream/70' : 'text-coffee-600'}`;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[9990] bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 40 }}
            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
            className={`fixed z-[9991] inset-x-4 top-1/2 -translate-y-1/2 max-w-lg mx-auto rounded-3xl p-8 shadow-2xl border ${
              dark
                ? 'bg-coffee-900 border-gold/25'
                : 'bg-white border-coffee-100'
            }`}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-7">
              <div>
                <h2 className={`font-display text-2xl font-bold ${dark ? 'text-cream' : 'text-coffee-700'}`}>
                  Reserve a Table
                </h2>
                <p className={`text-xs mt-1 font-sans ${dark ? 'text-cream/50' : 'text-coffee-400'}`}>
                  We'll confirm your booking via WhatsApp instantly.
                </p>
              </div>
              <button
                onClick={onClose}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                  dark ? 'bg-coffee-700 text-cream/70 hover:text-cream hover:bg-coffee-600' : 'bg-cream-100 text-coffee-400 hover:text-coffee hover:bg-cream-200'
                }`}
                aria-label="Close booking modal"
              >
                <HiX className="text-base" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="booking-name" className={labelClass}>
                  <HiOutlineUser className="inline mr-1" /> Your Name *
                </label>
                <input
                  id="booking-name" type="text" name="name" value={form.name}
                  onChange={handleChange} placeholder="e.g. Aditya Anand"
                  className={inputClass} required
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="booking-phone" className={labelClass}>
                  <HiOutlinePhone className="inline mr-1" /> Phone Number *
                </label>
                <input
                  id="booking-phone" type="tel" name="phone" value={form.phone}
                  onChange={handleChange} placeholder="+91 98765 43210"
                  className={inputClass} required
                />
              </div>

              {/* Date + Time */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="booking-date" className={labelClass}>
                    <HiOutlineCalendar className="inline mr-1" /> Date *
                  </label>
                  <input
                    id="booking-date" type="date" name="date" value={form.date}
                    onChange={handleChange} min={new Date().toISOString().split('T')[0]}
                    className={inputClass} required
                  />
                </div>
                <div>
                  <label htmlFor="booking-time" className={labelClass}>
                    <HiOutlineClock className="inline mr-1" /> Time *
                  </label>
                  <input
                    id="booking-time" type="time" name="time" value={form.time}
                    onChange={handleChange} min="09:00" max="21:30"
                    className={inputClass} required
                  />
                </div>
              </div>

              {/* Guests */}
              <div>
                <label htmlFor="booking-guests" className={labelClass}>
                  Number of Guests
                </label>
                <select
                  id="booking-guests" name="guests" value={form.guests}
                  onChange={handleChange} className={inputClass}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                  <option value="9+">9+ Guests (Group)</option>
                </select>
              </div>

              {/* Notice */}
              <div className={`rounded-xl px-4 py-3 text-xs leading-relaxed ${dark ? 'bg-gold/10 text-cream/60' : 'bg-cream-100 text-coffee-400'}`}>
                ⏰ We're open <strong>9 AM – 10 PM</strong>, Monday to Sunday. Walk-ins also welcome!
              </div>

              {/* Submit */}
              <button
                id="booking-submit-btn"
                type="submit"
                disabled={submitting}
                className="w-full btn-primary flex items-center justify-center gap-2.5 py-4 rounded-2xl text-sm font-semibold disabled:opacity-70"
              >
                <FaWhatsapp className="text-lg" />
                {submitting ? 'Sending via WhatsApp...' : 'Confirm Reservation on WhatsApp'}
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
