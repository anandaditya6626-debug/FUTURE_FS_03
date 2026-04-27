import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import TodaySpecial from './components/TodaySpecial';
import About from './components/About';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollProgress from './components/ScrollProgress';
import BookingModal from './components/BookingModal';
import StickyOrderBtn from './components/StickyOrderBtn';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('brewHavenDark') === 'true';
    }
    return false;
  });

  // Apply dark class
  useEffect(() => {
    const root = document.documentElement;
    dark ? root.classList.add('dark') : root.classList.remove('dark');
    localStorage.setItem('brewHavenDark', dark);
  }, [dark]);

  // Section reveal via IntersectionObserver
  useEffect(() => {
    if (loading) return;
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.section-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [loading]);

  // Lock body scroll while preloader is active
  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [loading]);

  return (
    <>
      {/* ── Preloader ── */}
      <Preloader onDone={() => setLoading(false)} />

      {/* ── Main Site ── */}
      <div
        className={`min-h-screen transition-colors duration-500 ${
          dark ? 'dark bg-warm-dark text-cream' : 'bg-warm-bg text-coffee'
        } ${loading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        style={{ transition: 'opacity 0.5s ease' }}
      >
        {/* Progress bar */}
        <ScrollProgress />

        {/* Toast Notifications */}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3500,
            style: {
              background: dark ? '#2d1508' : '#fff8f0',
              color: dark ? '#f5e6c8' : '#6b3a1f',
              border: `1px solid ${dark ? 'rgba(201,168,76,0.3)' : 'rgba(107,58,31,0.15)'}`,
              borderRadius: '14px',
              padding: '12px 20px',
              boxShadow: '0 8px 30px rgba(107,58,31,0.15)',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '13px',
            },
          }}
        />

        {/* Navbar */}
        <Navbar
          dark={dark}
          toggleDark={() => setDark(d => !d)}
          onBooking={() => setBookingOpen(true)}
        />

        {/* Page Sections */}
        <main>
          <Hero dark={dark} onBooking={() => setBookingOpen(true)} />

          <div className="section-reveal">
            <Menu dark={dark} />
          </div>

          <div className="section-reveal">
            <TodaySpecial dark={dark} />
          </div>

          <div className="section-reveal">
            <About dark={dark} />
          </div>

          <div className="section-reveal">
            <Gallery dark={dark} />
          </div>

          <div className="section-reveal">
            <Reviews dark={dark} />
          </div>

          <div className="section-reveal">
            <Contact dark={dark} />
          </div>
        </main>

        <Footer dark={dark} onBooking={() => setBookingOpen(true)} />

        {/* Floating WhatsApp */}
        <WhatsAppFloat />

        {/* Sticky Order / Book Buttons */}
        <StickyOrderBtn dark={dark} onBooking={() => setBookingOpen(true)} />

        {/* Table Booking Modal */}
        <BookingModal
          open={bookingOpen}
          onClose={() => setBookingOpen(false)}
          dark={dark}
        />
      </div>
    </>
  );
}
