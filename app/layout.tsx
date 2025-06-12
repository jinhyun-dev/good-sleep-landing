import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Good Sleep - Better Sleep, Better Life",
  description: "Transform your sleep with AI-powered tracking, personalized meditation content, and daily insights designed for modern professionals and digital nomads.",
  keywords: ["sleep tracker", "meditation", "AI", "healthcare", "wellness", "sleep quality"],
  authors: [{ name: "Good Sleep Team" }],
  creator: "Good Sleep",
  publisher: "Good Sleep",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://goodsleep.app"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Good Sleep - Better Sleep, Better Life",
    description: "Transform your sleep with AI-powered tracking, personalized meditation content, and daily insights.",
    url: "https://goodsleep.app",
    siteName: "Good Sleep",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Good Sleep - Sleep Healthcare App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Good Sleep - Better Sleep, Better Life",
    description: "Transform your sleep with AI-powered tracking, personalized meditation content, and daily insights.",
    images: ["/og-image.jpg"],
    creator: "@goodsleepapp",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#8B5CF6" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}