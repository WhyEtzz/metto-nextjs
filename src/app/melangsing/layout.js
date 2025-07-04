import localFont from "next/font/local";
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
  alternates: {
        canonical: 'https://metto.id',
    }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        {children}
      </body>
        <GoogleAnalytics gaId={process.env.gID} />
    </html>
  );
}
