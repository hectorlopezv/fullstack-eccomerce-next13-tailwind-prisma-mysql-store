import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Footer from "@/components/Footer";
import NavBar from "../components/NavBar";
import { Toaster } from "react-hot-toast";
import ToasterProvider from "@/provider/toaster-provider";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store App",
  description: "Store for eccomerce admin ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <ToasterProvider />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
