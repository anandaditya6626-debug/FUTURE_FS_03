import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineClock,
  HiOutlineMail,
} from 'react-icons/hi';
import toast from 'react-hot-toast';

const contactInfo = [
  {
    icon: <HiOutlineLocationMarker className="text-2xl" />,
    title: 'Location',
    lines: ['Main Road, Near City Mall', 'Dhanbad, Jharkhand – 826001'],
  },
  {
    icon: <HiOutlinePhone className="text-2xl" />,
    title: 'Phone',
    lines: ['+91 99999 99999', '+91 98765 43210'],
  },
  {
    icon: <HiOutlineClock className="text-2xl" />,
    title: 'Opening Hours',
    lines: ['Monday – Sunday', '9:00 AM – 10:00 PM'],
  },
  {
    icon: <HiOutlineMail className="text-2xl" />,
    title: 'Email',
    lines: ['hello@brewhaven.in', 'orders@brewhaven.in'],
  },
];

export default function Contact({ dark }) {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleWhatsApp = (e) => {
    e.preventDefault();
    if (!form.name || !form.message) {
      toast.error('Please fill in your name and message!', {
        style: { fontFamily: 'Poppins, sans-serif', fontSize: '14px' },
      });
      return;
    }
    setSending(true);
    const text = encodeURIComponent(
      `Hi! I'm ${form.name}${form.phone ? ` (${form.phone})` : ''}.\n\n${form.message}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/919999999999?text=${text}`, '_blank');
      setSending(false);
      setForm({ name: '', phone: '', message: '' });
      toast.success('Opening WhatsApp...', {
        icon: '☕',
        style: { fontFamily: 'Poppins, sans-serif', fontSize: '14px' },
      });
    }, 600);
  };

  return (
    <section id="contact" className={`py-24 ${dark ? 'bg-coffee-900/60' : 'bg-cream-200/40'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-gold font-sans text-sm font-semibold tracking-widest uppercase mb-3"
          >
            📍 Find Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`font-display text-4xl md:text-5xl font-bold mb-4 ${dark ? 'text-cream' : 'text-coffee-700'}`}
          >
            Get in Touch
          </motion.h2>
          <div className="section-divider mb-4" />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-base ${dark ? 'text-cream/60' : 'text-coffee-400'}`}
          >
            We'd love to hear from you. Visit us, call us, or drop a message!
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info + Map */}
          <div className="space-y-6">
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`rounded-2xl p-5 border transition-all duration-300 hover:scale-[1.02] ${
                    dark
                      ? 'bg-coffee-800/60 border-gold/15 hover:border-gold/40'
                      : 'bg-white border-coffee-100 hover:border-gold/40 hover:shadow-warm'
                  }`}
                >
                  <div className={`mb-3 ${dark ? 'text-gold' : 'text-coffee-600'}`}>
                    {info.icon}
                  </div>
                  <h4 className={`font-display font-semibold text-sm mb-1 ${dark ? 'text-cream' : 'text-coffee-700'}`}>
                    {info.title}
                  </h4>
                  {info.lines.map((l, j) => (
                    <p key={j} className={`text-xs leading-relaxed ${dark ? 'text-cream/60' : 'text-coffee-400'}`}>
                      {l}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Embedded Google Map */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl overflow-hidden h-64 border-2 border-gold/20 shadow-warm"
            >
              <iframe
                title="Brew Haven Café Location – Dhanbad, Jharkhand"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58434.78135251694!2d86.39803126830537!3d23.79461141738734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bc97a9f24e7d%3A0x702f30603704250!2sDhanbad%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1714231800000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`rounded-3xl p-8 border ${
              dark ? 'bg-coffee-800/60 border-gold/20' : 'bg-white border-coffee-100 shadow-warm'
            }`}
          >
            <h3 className={`font-display text-2xl font-bold mb-2 ${dark ? 'text-cream' : 'text-coffee-700'}`}>
              Send Us a Message
            </h3>
            <p className={`text-sm mb-6 ${dark ? 'text-cream/50' : 'text-coffee-400'}`}>
              We'll reply via WhatsApp within minutes.
            </p>

            <form onSubmit={handleWhatsApp} className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className={`block text-xs font-semibold mb-1.5 ${dark ? 'text-cream/70' : 'text-coffee-600'}`}
                >
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Priya Sharma"
                  className={`w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 border-2 ${
                    dark
                      ? 'bg-coffee-700/50 border-gold/20 text-cream placeholder-cream/30 focus:border-gold/60'
                      : 'bg-cream-50 border-coffee-100 text-coffee-700 placeholder-coffee-300 focus:border-gold/60'
                  }`}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className={`block text-xs font-semibold mb-1.5 ${dark ? 'text-cream/70' : 'text-coffee-600'}`}
                >
                  Phone Number (optional)
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className={`w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 border-2 ${
                    dark
                      ? 'bg-coffee-700/50 border-gold/20 text-cream placeholder-cream/30 focus:border-gold/60'
                      : 'bg-cream-50 border-coffee-100 text-coffee-700 placeholder-coffee-300 focus:border-gold/60'
                  }`}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className={`block text-xs font-semibold mb-1.5 ${dark ? 'text-cream/70' : 'text-coffee-600'}`}
                >
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Hi! I'd like to reserve a table / place an order / ask about your menu..."
                  className={`w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 border-2 resize-none ${
                    dark
                      ? 'bg-coffee-700/50 border-gold/20 text-cream placeholder-cream/30 focus:border-gold/60'
                      : 'bg-cream-50 border-coffee-100 text-coffee-700 placeholder-coffee-300 focus:border-gold/60'
                  }`}
                  required
                />
              </div>

              <button
                id="contact-submit-btn"
                type="submit"
                disabled={sending}
                className="w-full btn-primary flex items-center justify-center gap-3 py-4 rounded-2xl text-sm font-semibold disabled:opacity-70"
              >
                <FaWhatsapp className="text-xl" />
                {sending ? 'Opening WhatsApp...' : 'Send via WhatsApp'}
              </button>

              <p className={`text-xs text-center ${dark ? 'text-cream/30' : 'text-coffee-300'}`}>
                Clicking above opens WhatsApp with your pre-filled message.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
