import React from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/style/style.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ranjit Baldaniya Portfolio",
  description: "Portfolio in Next.js by Ranjit Baldaniya",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Add any other meta tags, links, or scripts here */}
      </Head>
      <body className={inter.className}>
        {/* <div className="landing-page"> */}
        {/* <NavBar/> */}
        {children}
        {/* <Footer/> */}
        {/* </div> */}
      </body>
    </>
  );
}
