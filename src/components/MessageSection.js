"use client";

import { useEffect, useRef, useState } from "react";

export default function MessageSection() {
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
      <div className="max-w-3xl mx-auto">
        <div
          className={`glass rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden ${
            visible ? "animate-scale-in" : "opacity-0"
          }`}
        >
          {/* Decorative corners */}
          <div className="absolute top-3 left-4 text-2xl opacity-20">🌿</div>
          <div className="absolute top-3 right-4 text-2xl opacity-20 scale-x-[-1]">🌿</div>
          <div className="absolute bottom-3 left-4 text-2xl opacity-20 rotate-180">🌿</div>
          <div className="absolute bottom-3 right-4 text-2xl opacity-20 rotate-180 scale-x-[-1]">🌿</div>

          <span className="text-5xl mb-5 block animate-heartbeat">💝</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--text-primary)] mb-6">
            Dear Mom
          </h2>
          <div className="divider-line mb-6"></div>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-4">
            Words are never enough to express how grateful I am for everything you do. 
            Your love has been my greatest strength, and your kindness the light that guides me every day.
          </p>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6">
            This small collection of memories is a reminder of how beautiful life is because you&apos;re in it. 
            I love you more than words can say. 💕
          </p>
          <p className="font-serif text-xl text-[var(--accent)] font-semibold italic">
            — With all my love
          </p>
        </div>
      </div>
    </section>
  );
}
