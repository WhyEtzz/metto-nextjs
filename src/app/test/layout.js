import localFont from "next/font/local";
import { GoogleAnalytics } from '@next/third-parties/google'


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body
        className={`antialiased bg-white`}
      >
        {children}
      </body>
        <GoogleAnalytics gaId={process.env.gID} />
    </html>
  );
}
