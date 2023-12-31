import "./globals.css";
import logo from "./media/MUN LOGO.png";
import { Inter } from "next/font/google";
import { Navibar, Footeri } from "./components/navbar/navfoot";
import localFont from "next/font/local";

// Font files can be colocated inside of `app`
const proconia = localFont({
  src: "./font/Prociono.woff2",
  display: "swap",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SJBHS MUN",
  description: "FIDE ET LABORE!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" class="dark">
      <body className="dark overflow-x-hidden w-[100vw]">
        <Navibar />

        {children}

        <Footeri />
      </body>
    </html>
  );
}
