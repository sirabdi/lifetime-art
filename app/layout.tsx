import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/component/header";
import Footer from "@/component/footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnimationProvider } from "@/provider/animationContext";

import { SpeedInsights } from "@vercel/speed-insights/next";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `LifetimeArt | Expert Home Improvement & Renovation Services in London`,
  description: `LifetimeArt specializes in high-quality home improvement, renovations, and restorations in London. Transform your space with our expert team—kitchens, bathrooms, extensions, loft conversions, and more. Discover craftsmanship you can trust.`,
  icons: {
    icon: "/logo-company.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <AnimationProvider>
          <Header />
          {children}
          <SpeedInsights />
          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}
