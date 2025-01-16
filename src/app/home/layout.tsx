import type { Metadata } from "next";
import { ThemeProvider } from '../../context/ThemeContext';
import "../globals.css";

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
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
