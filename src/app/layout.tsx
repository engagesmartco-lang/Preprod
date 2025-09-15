import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EngageSmart - AI Customer Retention Platform | Turn One-Time Buyers Into Repeat Customers",
  description: "Stop losing customers! EngageSmart's AI creates customer personas and sends personalized messages at the perfect time. Increase retention by 127% with automated customer engagement for Shopify stores.",
  keywords: "customer retention, AI customer engagement, churn prediction, e-commerce retention, Shopify customer retention, marketing automation, customer personas, repeat customers, customer lifetime value, retention marketing",
  authors: [{ name: "EngageSmart" }],
  creator: "EngageSmart",
  publisher: "EngageSmart",
  verification: {
    google: "88uck1FqCywauLEmPje5t0Fsjug42oLNsSmQWM2CeW8",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "EngageSmart - AI Customer Retention Platform | Turn One-Time Buyers Into Repeat Customers",
    description: "Stop losing customers! EngageSmart's AI creates customer personas and sends personalized messages at the perfect time. Increase retention by 127% with automated customer engagement.",
    type: "website",
    siteName: "EngageSmart",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "EngageSmart - AI Customer Retention Platform",
    description: "Stop losing customers! AI-powered customer retention that turns one-time buyers into repeat customers.",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_APP_URL || "https://engagesmart.com",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
