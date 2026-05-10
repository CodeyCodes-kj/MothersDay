"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Highlights({ images }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  // Pick 6 evenly spread images for the highlights
  const picks = [];
  if (images.length > 0) {
    const step = Math.max(1, Math.floor(images.length / 6));
    for (let i = 0; i < images.length && picks.length < 6; i += step) {
      picks.push(images[i]);
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 px-4 bg-pink-50/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-3xl mb-3 block">📸</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--text-primary)] mb-3">
            Cherished Moments
          </h2>
          <div className="divider-line mb-4"></div>
          <p className="text-[var(--text-muted)] max-w-lg mx-auto">
            A glimpse into the beautiful memories we&apos;ve created together
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {picks.map((img, i) => (
            <div
              key={i}
              className={`img-card bg-white rounded-2xl overflow-hidden border border-pink-100/60 ${
                visible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img}
                alt={`Memory ${i + 1}`}
                className="w-full aspect-square object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className={`inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-pink-700 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg ${
              visible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.7s" }}
          >
            See All Photos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
