"use client";

export default function Gallery({ images }) {
  return (
    <section id="gallery" className="w-full py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] mb-6 drop-shadow-sm">
          Our Cherished Moments
        </h2>
        <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto rounded-full"></div>
      </div>
      
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {images.map((img, index) => (
          <div 
            key={index} 
            className="break-inside-avoid hover-image-wrapper bg-white/50 dark:bg-black/20 rounded-2xl shadow-sm border border-white/40 dark:border-white/10 p-2 backdrop-blur-sm"
          >
            <div className="relative rounded-xl overflow-hidden w-full h-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={img} 
                alt={`Beautiful Mother's Day Memory ${index + 1}`} 
                className="hover-image w-full h-auto object-cover rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
