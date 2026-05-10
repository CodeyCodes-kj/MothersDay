import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Happy Mother's Day 💐",
  description:
    "A beautiful tribute to the most amazing woman in the world. Happy Mother's Day!",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${outfit.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col relative">
        {/* Soft ambient blobs */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-pink-200/25 blur-3xl animate-float-slow" />
          <div
            className="absolute top-1/3 -right-20 w-[350px] h-[350px] rounded-full bg-pink-300/15 blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-10 left-1/4 w-[300px] h-[300px] rounded-full bg-pink-100/30 blur-3xl animate-float-slow"
            style={{ animationDelay: "4s" }}
          />
        </div>

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
