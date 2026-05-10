export default function Footer() {
  return (
    <footer className="w-full border-t border-pink-200/40 bg-white/50 backdrop-blur-md mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <span className="text-4xl mb-4 block animate-heartbeat">❤️</span>
        <p className="font-serif text-xl italic text-[var(--text-secondary)] mb-2">
          &ldquo;All that I am, or ever hope to be, I owe to my angel mother.&rdquo;
        </p>
        <p className="text-sm text-[var(--text-muted)] mb-6">— Abraham Lincoln</p>
        <div className="divider-line mb-6"></div>
        <p className="text-sm text-[var(--text-muted)]">
          Made with 💕 for the most amazing Mom in the world
        </p>
      </div>
    </footer>
  );
}
