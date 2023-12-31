import "./globals.css";

import NavBarComponent from "@/components/NavBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recipe App",
  description: "The best recipe app on the internet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>

        <body className={`${inter.className} `}>
          <NavBarComponent />
          <div className="container">{children}</div>
        </body>

    </html>
  );
}
