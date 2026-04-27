import { GiCoffeeCup } from 'react-icons/gi';
import {
  FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaWhatsapp,
} from 'react-icons/fa';
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineClock, HiOutlineCalendar } from 'react-icons/hi';
import { motion } from 'framer-motion';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Our Menu', href: '#menu' },
  { label: 'Today\'s Special', href: '#special' },
  { label: 'About Us', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: <FaInstagram />, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
  { icon: <FaFacebookF />, href: '#', label: 'Facebook', color: 'hover:text-blue-400' },
  { icon: <FaTwitter />, href: '#', label: 'Twitter', color: 'hover:text-sky-400' },
  { icon: <FaYoutube />, href: '#', label: 'YouTube', color: 'hover:text-red-400' },
  { icon: <FaWhatsapp />, href: 'https://wa.me/919999999999?text=Hi%2C+I%27d+like+to+place+an+order.', label: 'WhatsApp', color: 'hover:text-green-400' },
];

const handleScroll = (href) => {
  const id = href.replace('#', '');
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer({ dark, onBooking }) {
  return (
    <footer className={`${dark ? 'bg-coffee-900 border-t border-gold/10' : 'bg-coffee-700 border-t border-coffee-600/50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-coffee-400 flex items-center justify-center shadow-gold">
                <GiCoffeeCup className="text-cream-100 text-xl" />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-cream block leading-none">
                  Brew Haven
                </span>
                <span className="text-[10px] font-sans tracking-[0.25em] text-gold uppercase">
                  Café
                </span>
              </div>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed mb-6 font-sans">
              Where every sip feels like home. Premium coffee, handcrafted food & cozy vibes in the heart of Dhanbad.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-cream/60 transition-all duration-300 hover:bg-white/20 hover:scale-110 ${s.color}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-cream text-base mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={e => { e.preventDefault(); handleScroll(link.href); }}
                    className="text-cream/50 hover:text-gold text-sm font-sans transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-cream text-base mb-5">
              Visit Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <HiOutlineLocationMarker className="text-gold text-xl flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-cream/80 text-sm font-sans leading-relaxed">
                    Main Road, Near City Mall,<br />
                    Dhanbad, Jharkhand – 826001
                  </p>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <HiOutlinePhone className="text-gold text-xl flex-shrink-0" />
                <a href="tel:+919999999999" className="text-cream/70 hover:text-gold text-sm font-sans transition-colors">
                  +91 99999 99999
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <HiOutlineClock className="text-gold text-xl flex-shrink-0" />
                <p className="text-cream/70 text-sm font-sans">
                  Mon–Sun · 9:00 AM – 10:00 PM
                </p>
              </li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h4 className="font-display font-semibold text-cream text-base mb-5">
              Stay Connected
            </h4>
            <p className="text-cream/50 text-sm mb-4 font-sans leading-relaxed">
              Get daily specials, offers, and new menu updates straight on WhatsApp.
            </p>

            {/* Book a Table */}
            <button
              onClick={onBooking}
              className="mb-3 w-full flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-gold/15 border border-gold/40 text-gold text-sm font-semibold font-sans hover:bg-gold/25 transition-all duration-300 hover:scale-[1.02]"
            >
              <HiOutlineCalendar className="text-lg" />
              Book a Table
            </button>

            <a
              href="https://wa.me/919999999999?text=Hi%2C+I%27d+like+to+get+updates+from+Brew+Haven+Caf%C3%A9!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-green-500/20 border border-green-500/40 text-green-400 text-sm font-semibold font-sans hover:bg-green-500/30 transition-all duration-300 hover:scale-[1.02]"
            >
              <FaWhatsapp className="text-lg" />
              Join WhatsApp Updates
            </a>

            {/* Open status pill */}
            <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-gold text-xs font-semibold font-sans">Open Now · Until 10 PM</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cream/40 text-xs font-sans text-center">
              © 2024 Brew Haven Café. All rights reserved. Made with ☕ in Dhanbad.
            </p>
            <div className="flex gap-5">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
                <a key={item} href="#" className="text-cream/30 hover:text-cream/60 text-xs font-sans transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
