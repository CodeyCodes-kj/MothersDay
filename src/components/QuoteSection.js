"use client";

import { useEffect, useRef, useState } from "react";

const quotes = [
  {
    text: "A mother's arms are more comforting than anyone else's.",
    author: "Princess Diana",
  },
  {
    text: "Life doesn't come with a manual, it comes with a mother.",
    author: "Unknown",
  },
  {
    text: "The influence of a mother in the lives of her children is beyond calculation.",
    author: "James E. Faust",
  },
];

export default function QuoteSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-3xl mb-3 block">✨</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--text-primary)] mb-3">
            Words of Love
          </h2>
          <div className="divider-line"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <div
              key={i}
              className={`glass rounded-2xl p-8 text-center transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${
                visible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <span className="text-4xl block mb-4 opacity-30">&ldquo;</span>
              <p className="text-[var(--text-secondary)] italic text-lg leading-relaxed mb-5 font-serif">
                {q.text}
              </p>
              <div className="w-10 h-0.5 bg-[var(--accent-soft)] mx-auto rounded-full mb-3"></div>
              <p className="text-sm font-semibold text-[var(--accent)]">
                — {q.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
