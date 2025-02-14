import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

// Import styles
import "../../public/css/sidebar.css";
import "../../public/css/navbar.css";
import "../../public/css/dropdown.css";

// Import main components
import SideBar from "./components/sidebar";
import Navbar from "./components/NavBar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Add the weights you need
});

export const metadata = {
  title: "Dashboard",
  description: "Dashboard by Fauzhan Wahyudi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <div className="main-container">
          <SideBar />
          <div className="right-container">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
