import { Inter, Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/shared/re-used/Navbar";
import Footer from "@/components/shared/re-used/Footer";

const inter = Inter({ subsets: ["latin"] });
const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata = {
    title: "CALDAM 2025 | Conference on Algorithms and Discrete Applied Mathematics",
    description:
        "11th Annual International Conference on Algorithms and Discrete Applied Mathematics.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
