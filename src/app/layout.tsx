import "./globals.css";

import { Darker_Grotesque } from "next/font/google";

import { Providers } from "./providers";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "imonolith Template",
  description: "All hail the monolith",
};

const darkerGrotesque = Darker_Grotesque({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={darkerGrotesque.className}>
      <Providers
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className="flex flex-col">
          {/* Navbar */}
          {children}
          {/* Footer */}
        </body>
      </Providers>
    </html>
  );
}
