import localFont from "next/font/local";
import Head from 'next/head';
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Metto Official || Herbal Tea",
  description: "Metto Official Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
    <Head>
        <title>Metto Official || Herbal Tea</title>
        <link
          rel="canonical"
          href="https://metto.id"
          key="canonical"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        {children}
      </body>
        <GoogleAnalytics gaId={process.env.gID} />
    </html>
  );
}
