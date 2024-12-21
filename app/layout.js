import "./globals.css";
import Footer from "./ui/footer";
import Navbar from "./ui/navbar";
import { Kumbh_Sans } from "next/font/google";

const kumbh = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const width = "100vw";

export const metadata = {
  title: "Happy Coaching website",
  description: "createdby I.S.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kumbh.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
