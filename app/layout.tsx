import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";

import { Providers } from "./providers";
import ClientWrapper from "./client-wrapper";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/data/config";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@soorya",
  },
  icons: {
    icon: "/favicon.png",
  },
  verification: {
    google: "3VwSwn-JuoSDk4ISNgCGUQmJJWAQ8jfz-GOaysK4obk",
  },
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className="dark" lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://riteshbonthalakoti.vercel.app/#website",
                  url: "https://riteshbonthalakoti.vercel.app",
                  name: "Ritesh Bonthalakoti | Portfolio",
                  description:
                    "Electronics & Communication Engineering student building at the intersection of AI, embedded hardware, and full-stack development.",
                  publisher: {
                    "@id":
                      "https://riteshbonthalakoti.vercel.app/#person",
                  },
                },
                {
                  "@type": "Person",
                  "@id": "https://riteshbonthalakoti.vercel.app/#person",
                  name: "Ritesh Bonthalakoti",
                  url: "https://riteshbonthalakoti.vercel.app",
                  image:
                    "https://riteshbonthalakoti.vercel.app/images/headshot-ritesh.png",
                  jobTitle:
                    "AI & Embedded Systems Engineer | Entrepreneur",
                  description:
                    "Electronics & Communication Engineering student from Visakhapatnam, India. Building at the intersection of AI, embedded hardware, and full-stack development. Co-founder of startups, hackathon leader, and collaborator with IIT Bombay, Infosys, and PUSULA International.",
                  knowsAbout: [
                    "Artificial Intelligence",
                    "Machine Learning",
                    "Embedded Systems",
                    "ESP32",
                    "IoT",
                    "Full-Stack Development",
                    "React",
                    "Next.js",
                    "Python",
                    "Entrepreneurship",
                  ],
                  alumniOf: {
                    "@type": "EducationalOrganization",
                    name: "Diploma in Electronics & Communication Engineering",
                  },
                  sameAs: [
                    "https://github.com/ritesh-1918",
                    "https://linkedin.com/in/ritesh1908",
                    "https://instagram.com/ritesh_191800",
                    "https://ritesh1918.substack.com",
                  ],
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Visakhapatnam",
                    addressCountry: "IN",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${grotesk.variable} ${mono.variable} font-sans antialiased min-h-screen flex flex-col bg-black text-white`}
      >
        <Providers>
          <ClientWrapper />
          <Navbar />
          <main className="flex-1 pt-24 bg-black text-white">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
