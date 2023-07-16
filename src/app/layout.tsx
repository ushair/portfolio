import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const myFont = localFont({
  src: [
    {
      path: "./lib/fonts/Gilroy-Light.otf",
      weight: "300",
    },
    {
      path: "./lib/fonts/Gilroy-ExtraBold.otf",
      weight: "800",
    },
  ],
});

export const metadata: Metadata = {
  title: "Ushair | Portfolio",
  description: "Ushair's developer life",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={myFont.className}>
      <body>{children}</body>
    </html>
  );
}
