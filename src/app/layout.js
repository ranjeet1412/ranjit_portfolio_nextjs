
import { Inter } from "next/font/google";
import "./globals.css";
import '@/style/style.scss';

import NavBar from "@/component/Navbar";
import Footer from "@/component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ranjit Baldaniya Portfolio",
  description: "Portfolio in nextjs by Ranjit Baldaniya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/* <div className="landing-page"> */}
      {/* <NavBar/> */}
      {children}
      {/* <Footer/> */}
      {/* </div> */}
      </body>
    </html>
  );
}
