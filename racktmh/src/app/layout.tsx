import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { SiteShell } from "@/components/SiteShell";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Rotaract Club of Kathmandu Height",
    template: "%s | Rotaract Club of Kathmandu Height",
  },
  description:
    "A premium multipage website for Rotaract Club of Kathmandu Height, built around service, leadership, and fellowship.",
  metadataBase: new URL("https://racktmh.local"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full font-body text-[color:var(--foreground)]">
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const stored = localStorage.getItem('racktmh-theme'); const theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); document.documentElement.dataset.theme = theme; } catch (error) { document.documentElement.dataset.theme = 'light'; } })();`,
          }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
