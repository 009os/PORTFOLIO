import "../global.css";
import { Sora } from "next/font/google";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "chronark.com",
    template: "%s | chronark.com",
  },
  description: "Co-founder of unkey.dev and founder of planetfall.io",
  openGraph: {
    title: "chronark.com",
    description:
      "Co-founder of unkey.dev and founder of planetfall.io",
    url: "https://chronark.com",
    siteName: "chronark.com",
    images: [
      {
        url: "https://chronark.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
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
  twitter: {
    title: "Chronark",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sora.variable}>
      <head>
        <Analytics />
      </head>
      <body
        className="bg-black"
      >
        {children}
      </body>
    </html>
  );
}
