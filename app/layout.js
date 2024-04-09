
import "./globals.css";
import Navbar from "./ui/components/navbar";
import { Kumbh_Sans } from "next/font/google";

 const kumbh = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});


export const metadata = {
  title: "Happy Coaching website",
  description: "reatedby I.S.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kumbh.className}>
        <Navbar/>
        {children}</body>
    </html>
  );
}
