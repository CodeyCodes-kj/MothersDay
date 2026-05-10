"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col justify-center items-center text-center px-4 pt-16 pb-10 overflow-hidden">
      {/* Decorative petals */}
      <div className="absolute top-8 left-8 text-5xl opacity-20 animate-float" style={{ animationDelay: "0s" }}>🌸</div>
      <div className="absolute top-16 right-12 text-4xl opacity-15 animate-float" style={{ animationDelay: "1.5s" }}>🌷</div>
      <div className="absolute bottom-12 left-16 text-3xl opacity-20 animate-float-slow" style={{ animationDelay: "3s" }}>🌺</div>
      <div className="absolute bottom-8 right-8 text-4xl opacity-15 animate-float-slow" style={{ animationDelay: "0.5s" }}>💮</div>

      <div className="max-w-3xl z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-pink-100/80 text-[var(--accent)] text-sm font-semibold px-4 py-1.5 rounded-full mb-6 animate-fade-in border border-pink-200/50">
          <span>💐</span>
          <span>Happy Mother&apos;s Day 2026</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-[var(--text-primary)] mb-5 leading-tight animate-fade-in-up">
          Thank You,{" "}
          <span className="text-[var(--accent)] relative inline-block">
            Mom
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 120 8" fill="none">
              <path d="M2 6C30 2 90 2 118 6" stroke="var(--accent-soft)" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-[var(--text-secondary)] mb-4 animate-fade-in-up leading-relaxed max-w-xl mx-auto" style={{ animationDelay: "0.2s" }}>
          For every sacrifice, every prayer, and every moment of unconditional love — this is for you.
        </p>

        <div className="divider-line my-8"></div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#slideshow"
            className="bg-[var(--accent)] hover:bg-pink-700 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
          >
            <span>View Memories</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
          <Link
            href="/gallery"
            className="border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
          >
            <span>Photo Gallery</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
