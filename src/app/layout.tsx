import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andrés Bojacá",
  description: "Portafolio desarrollador",
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
