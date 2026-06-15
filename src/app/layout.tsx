import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { siteConfig } from "@/data/site";
import { Toaster } from "@/components/ui/sonner";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Vivek Kumar | Frontend Developer",
    template: `%s | Vivek Kumar`,
  },

  description: siteConfig.description,

  metadataBase: new URL(siteConfig.url),

  openGraph: {
    title: "Vivek Kumar | Frontend Developer",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "Vivek Kumar",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vivek Kumar Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vivek Kumar | Frontend Developer",
    description: siteConfig.description,
    images: ["/images/og-image.png"],
  },

  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Portfolio",
    "Web Developer",
  ],

  authors: [
    {
      name: "Vivek Kumar",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
