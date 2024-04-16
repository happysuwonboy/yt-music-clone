import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/providers/themeProvider';
import Sidebar from '@/components/Sidebar';
import PlayerWraaper from '@/components/player/PlayerWraaper';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clone YT-Music",
  description: "This is Youtube-Music clone project for practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >

          <Sidebar>
            {children}
          </Sidebar>

          <PlayerWraaper />

        </ThemeProvider>
      </body>
    </html>
  );
}
