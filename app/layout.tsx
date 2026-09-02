import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pangea Labs",
  description:
    "We connect blockchain to the real economy. Payments, remittances and asset tokenization with real-time settlement, privacy and built-in compliance.",
  openGraph: {
    title: "Pangea Labs — Global payouts for everyone, anywhere",
    description:
      "We connect blockchain to the real economy. Payments, remittances and asset tokenization with real-time settlement, privacy and built-in compliance.",
    url: "https://pangealabs.space",
    siteName: "Pangea Labs",
    images: [
      {
        url: "https://pangealabs.space/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Pangea Labs — Global payouts for everyone, anywhere",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pangea Labs — Global payouts for everyone, anywhere",
    description:
      "We connect blockchain to the real economy. Payments, remittances and asset tokenization with real-time settlement, privacy and built-in compliance.",
    images: ["https://pangealabs.space/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark inter_786c1081-module__J60SBq__variable source_serif_4_485e3d60-module__g3zn-q__variable h-full antialiased"
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="https://pangealabs.space/_next/static/immutable/chunks/0q-7mokw7v250.css"
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
