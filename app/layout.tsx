import "../global.css";
import { Sora } from "next/font/google";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://omjishukla.com"),
  title: {
    default: "Omji Shukla - Portfolio",
    template: "%s | Omji Shukla",
  },
  description: "Software Engineer building robust and scalable market-making systems at Pi42, a crypto derivatives exchange.",
  openGraph: {
    title: "Omji Shukla - Portfolio",
    description:
      "Software Engineer building robust and scalable market-making systems at Pi42, a crypto derivatives exchange.",
    url: "https://omjishukla.com",
    siteName: "Omji Shukla",
    images: [
      {
        url: "https://omjishukla.com/og.png",
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
    title: "Omji Shukla",
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
