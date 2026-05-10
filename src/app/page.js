import Hero from "@/components/Hero";
import Slideshow from "@/components/Slideshow";
import QuoteSection from "@/components/QuoteSection";
import Highlights from "@/components/Highlights";
import MessageSection from "@/components/MessageSection";
import { images } from "@/lib/images";

export default function Home() {

  // Pick first 8 for the slideshow
  const slideshowImages = images.slice(0, 8);

  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Slideshow Section */}
      <section id="slideshow" className="py-16 px-4">
        <div className="text-center mb-10">
          <span className="text-3xl mb-3 block">🎞️</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--text-primary)] mb-3">
            A Walk Down Memory Lane
          </h2>
          <div className="divider-line"></div>
        </div>
        <Slideshow images={slideshowImages} />
      </section>

      {/* Quotes */}
      <QuoteSection />

      {/* Highlights Grid */}
      <Highlights images={images} />

      {/* Personal Message */}
      <MessageSection />
    </>
  );
}
