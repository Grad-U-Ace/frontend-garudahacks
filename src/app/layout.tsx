import "./globals.css";

import { Darker_Grotesque } from "next/font/google";

import BgShaderGradient from "./components/BgShaderGradient";
import Sidebar from "./components/Sidebar";
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
        <body className="flex h-svh">
          <BgShaderGradient />
          <Sidebar />
          <main className="flex h-svh grow flex-col items-center justify-center gap-5 p-5">
            <div className="flex size-full items-center justify-center rounded-xl bg-white/5 backdrop-blur-[120px] shadow-inner-sm shadow-white/20">
              {children}
            </div>
          </main>
          {/* Footer */}
        </body>
      </Providers>
    </html>
  );
}
