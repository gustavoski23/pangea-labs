import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pangea Labs — Global payouts for everyone, anywhere",
  description:
    "Stablecoin settlement, international payouts, business banking rails and compliance infrastructure in one ecosystem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
