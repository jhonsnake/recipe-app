import "./globals.css";

import NavBarComponent from "@/components/NavBar";
import Providers from "@/components/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recipe App",
  description: "The best recipe app on the internet",
};

//TODO: Crear un contexto global

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" >
      <body className={`${inter.className} `}>
        <Providers>
        <NavBarComponent />
        <div className="container">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
