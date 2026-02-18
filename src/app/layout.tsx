import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moiz Ahmed - Portfolio",
  description: "Full Stack Developer & Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
