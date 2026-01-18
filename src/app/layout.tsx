import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import { ClientLayout } from "@/components/ClientLayout";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Akalappuzha Tourism | Kerala Backwaters Experience",
  description: "Experience the serene beauty of Kerala backwaters with our premium houseboat, shikara, and speedboat services in Alappuzha.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${montserrat.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
