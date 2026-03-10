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
  title: "Prodigy | Web Design, Software & Digital Marketing Agency",
  description:
    "Prodigy is a modern digital agency building high-performance websites, scalable software solutions, and result-driven digital marketing strategies for ambitious brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
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
