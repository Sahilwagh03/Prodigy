import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import SmoothScrollProvider from "@/components/smooth-scroll-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Home/sections/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import "./globals.css";
import { preload } from "react-dom";

preload("/dotted-bg.webp", { as: "image", fetchPriority: "high" });

const inter = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.prodigymedia.in"),

  title: {
    default:
      "Digital Marketing Agency in India | SEO, Website Development & Branding | Prodigy Media",
    template: "%s | Prodigy Media",
  },

  description:
    "Prodigy Media is a leading digital marketing agency helping businesses grow through SEO, Google Ads, Social Media Marketing, Website Development, Custom Software Development, Branding, UI/UX Design, and Performance Marketing across India.",

  applicationName: "Prodigy Media",

  keywords: [
    "Digital Marketing Agency",
    "Digital Marketing Agency India",
    "SEO Company",
    "SEO Services",
    "Search Engine Optimization",
    "Google Ads Agency",
    "PPC Management",
    "Social Media Marketing",
    "Social Media Agency",
    "Performance Marketing",
    "Website Design",
    "Website Development",
    "Web Development Company",
    "Custom Software Development",
    "Software Development Company",
    "Next.js Development",
    "React Development",
    "UI UX Design",
    "Brand Identity",
    "Brand Strategy",
    "Content Marketing",
    "Lead Generation",
    "Marketing Agency",
    "Digital Branding",
    "Business Growth",
    "Online Marketing",
    "Creative Agency",
    "Prodigy Media",
  ],

  authors: [
    {
      name: "Prodigy Media",
      url: "https://www.prodigymedia.in",
    },
  ],

  creator: "Prodigy Media",
  publisher: "Prodigy Media",

  alternates: {
    canonical: "https://www.prodigymedia.in",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  category: "Business",

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/android-chrome-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  openGraph: {
    title:
      "Digital Marketing Agency | SEO, Branding, Website & Software Development",

    description:
      "Grow your business with expert SEO, Google Ads, Social Media Marketing, Website Development, Branding, UI/UX Design, and Custom Software Solutions from Prodigy Media.",

    url: "https://www.prodigymedia.in",
    siteName: "Prodigy Media",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Prodigy Media Digital Marketing Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Digital Marketing Agency | SEO, Web Development & Branding | Prodigy Media",

    description:
      "Helping businesses increase traffic, leads and revenue with SEO, Google Ads, Social Media Marketing, Website Development and Branding.",

    images: ["/opengraph-image.png"],
  },

  manifest: "/manifest.json",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.prodigymedia.in/#organization",
      name: "Prodigy Media",

      url: "https://www.prodigymedia.in",

      logo: {
        "@type": "ImageObject",
        url: "https://www.prodigymedia.in/icon.png",
        width: 512,
        height: 512,
      },

      image: "https://www.prodigymedia.in/opengraph-image.png",

      description:
        "Prodigy Media is a digital marketing agency specializing in SEO, Website Development, Google Ads, Social Media Marketing, Branding, UI/UX Design and Custom Software Development.",

      sameAs: [
        "https://www.instagram.com/prodigymedia.in",
      ],

      knowsAbout: [
        "SEO",
        "Search Engine Optimization",
        "Google Ads",
        "PPC",
        "Website Development",
        "Web Design",
        "Software Development",
        "Next.js",
        "React",
        "Brand Identity",
        "Brand Strategy",
        "Social Media Marketing",
        "Performance Marketing",
        "Digital Marketing",
        "Lead Generation",
        "UI UX Design",
      ],
    },

    {
      "@type": "WebSite",
      "@id": "https://www.prodigymedia.in/#website",

      url: "https://www.prodigymedia.in",

      name: "Prodigy Media",

      publisher: {
        "@id": "https://www.prodigymedia.in/#organization",
      },

      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://www.prodigymedia.in/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },

    {
      "@type": "LocalBusiness",

      "@id": "https://www.prodigymedia.in/#localbusiness",

      name: "Prodigy Media",

      image: "https://www.prodigymedia.in/opengraph-image.png",

      url: "https://www.prodigymedia.in",

      priceRange: "$$",

      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },

      areaServed: [
        {
          "@type": "Country",
          name: "India",
        },
      ],

      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },

      hasOfferCatalog: {
        "@type": "OfferCatalog",

        name: "Digital Marketing Services",

        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SEO Services",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Google Ads Management",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Social Media Marketing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Website Design",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Website Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Software Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Brand Identity",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Performance Marketing",
            },
          },
        ],
      },
    },
  ],
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
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
            <WhatsAppButton />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}