import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Footer from "@/pages/Home/sections/footer";
import SmoothScrollProvider from "@/components/smooth-scroll-provider";
import Navbar from "@/components/Navbar";

const inter = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.prodigymedia.in"),
  title: {
    default: "Prodigy | Web Design, Software & Digital Marketing Agency",
    template: "%s | Prodigy",
  },
  description:
    "Prodigy is a premium digital agency building high-performance websites, custom software, and results-driven digital marketing strategies for ambitious brands.",
  keywords: [
    "Web Design Agency",
    "Software Development",
    "Digital Marketing",
    "Brand Identity",
    "Prodigy Media",
    "UI/UX Design",
    "Next.js Development",
    "SEO Services",
    "E-commerce Development"
  ],
  authors: [{ name: "Prodigy Team" }],
  creator: "Prodigy",
  publisher: "Prodigy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.prodigymedia.in",
  },
  openGraph: {
    title: "Prodigy | Web Design, Software & Digital Marketing Agency",
    description:
      "We design high-performance websites, engineer custom software solutions, and develop data-driven marketing strategies that accelerate brand growth.",
    url: "https://www.prodigymedia.in",
    siteName: "Prodigy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/aesthetic-logo-big.svg",
        width: 1200,
        height: 630,
        alt: "Prodigy Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prodigy | Web Design, Software & Digital Marketing Agency",
    description:
      "We design high-performance websites, engineer custom software solutions, and develop data-driven marketing strategies that accelerate brand growth.",
    images: ["/aesthetic-logo-big.svg"],
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Prodigy",
  "url": "https://www.prodigymedia.in",
  "logo": "https://www.prodigymedia.in/apple-touch-icon.png",
  "sameAs": [
    "https://www.instagram.com/prodigymedia.in"
  ],
  "description": "Prodigy is a modern digital agency building high-performance websites, scalable software solutions, and result-driven digital marketing strategies.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <Navbar />
            {children}
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

