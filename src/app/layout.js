import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

const inter = Inter({
  subsets: ['latin'],
})

export const metadata = {
  title: "Qurbani-Hat",
  description: "Best qurbani animal booking platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ToastContainer />
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
