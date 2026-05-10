"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 glass border-b border-pink-200/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl animate-heartbeat">💐</span>
            <span className="text-xl font-serif font-bold text-[var(--accent)] tracking-wide group-hover:text-pink-700 transition-colors">
              Mother&apos;s Day
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/gallery"
              className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors font-medium"
            >
              Gallery
            </Link>
            <Link
              href="/gallery"
              className="bg-[var(--accent)] hover:bg-pink-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg hover:scale-105"
            >
              View All Photos
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-pink-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-pink-200/40 bg-white/90 backdrop-blur-lg animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="block text-[var(--text-secondary)] hover:text-[var(--accent)] font-medium py-2"
            >
              Home
            </Link>
            <Link
              href="/gallery"
              onClick={() => setOpen(false)}
              className="block text-[var(--text-secondary)] hover:text-[var(--accent)] font-medium py-2"
            >
              Gallery
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
