import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from '../data/cafeData';
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

function Lightbox({ images, index, onClose, onPrev, onNext }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="lightbox-backdrop"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xl transition-all z-10"
          aria-label="Close lightbox"
        >
          <HiX />
        </button>

        <button
          onClick={e => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-2xl transition-all z-10"
          aria-label="Previous image"
        >
          <HiChevronLeft />
        </button>

        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative max-w-4xl max-h-[80vh] mx-4"
          onClick={e => e.stopPropagation()}
        >
          <img
            src={images[index].src.replace('w=600', 'w=1000')}
            alt={images[index].alt}
            className="rounded-2xl object-contain max-h-[75vh] max-w-full shadow-2xl"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
            <p className="text-white font-display font-semibold text-lg drop-shadow-lg">
              {images[index].caption}
            </p>
            <p className="text-white/60 text-sm mt-1">{index + 1} / {images.length}</p>
          </div>
        </motion.div>

        <button
          onClick={e => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-2xl transition-all z-10"
          aria-label="Next image"
        >
          <HiChevronRight />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Gallery({ dark }) {
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const openLightbox = (i) => setLightboxIdx(i);
  const closeLightbox = () => setLightboxIdx(null);
  const prevImage = () => setLightboxIdx(i => (i - 1 + galleryImages.length) % galleryImages.length);
  const nextImage = () => setLightboxIdx(i => (i + 1) % galleryImages.length);

  return (
    <section id="gallery" className={`py-24 ${dark ? 'bg-coffee-900/80' : 'bg-cream-200/40'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-gold font-sans text-sm font-semibold tracking-widest uppercase mb-3"
          >
            📸 Captured Moments
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`font-display text-4xl md:text-5xl font-bold mb-4 ${dark ? 'text-cream' : 'text-coffee-700'}`}
          >
            Our Gallery
          </motion.h2>
          <div className="section-divider mb-4" />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-base max-w-md mx-auto ${dark ? 'text-cream/60' : 'text-coffee-400'}`}
          >
            A glimpse into the warmth, flavour, and soul of Brew Haven Café.
          </motion.p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              onClick={() => openLightbox(i)}
              className={`gallery-item relative cursor-pointer rounded-2xl ${
                i === 0 ? 'row-span-2' :
                i === 3 ? 'col-span-2' :
                i === 6 ? 'row-span-2' : ''
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="gallery-overlay rounded-2xl" />
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <span className="text-white font-sans text-xs font-semibold bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  {img.caption}
                </span>
              </div>
              {/* Hover overlay with caption */}
              <div className="absolute inset-0 flex items-end p-4 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-display text-sm font-semibold drop-shadow-lg">
                  {img.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <Lightbox
          images={galleryImages}
          index={lightboxIdx}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  );
}
