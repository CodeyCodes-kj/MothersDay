import fs from "fs/promises";
import path from "path";
import GalleryGrid from "@/components/GalleryGrid";
import Link from "next/link";

export const metadata = {
  title: "Photo Gallery — Mother's Day",
  description: "Browse all our cherished Mother's Day memories.",
};

async function getImages() {
  const assetDir = path.join(process.cwd(), "public", "asset");
  try {
    const files = await fs.readdir(assetDir);
    return files
      .filter((f) => /\.(jpg|jpeg|png|gif|webp)$/i.test(f))
      .map((f) => `/asset/${encodeURIComponent(f)}`);
  } catch {
    return [];
  }
}

export default async function GalleryPage() {
  const images = await getImages();

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="pt-14 pb-10 px-4 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors mb-6"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[var(--text-primary)] mb-4 animate-fade-in-up">
          📷 Photo Gallery
        </h1>
        <p className="text-[var(--text-secondary)] max-w-lg mx-auto mb-4 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          All {images.length} photos from our beautiful collection of memories
        </p>
        <div className="divider-line"></div>
      </section>

      {/* Gallery */}
      <section className="px-4 pb-20 max-w-7xl mx-auto">
        <GalleryGrid images={images} />
      </section>
    </div>
  );
}
