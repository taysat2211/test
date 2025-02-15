import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "./components/BootStrapClient";
import "./globals.css";
import { Metadata } from 'next';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  description: "Design and build",
  title: {
    template: '%s | Vconcept',
    default: 'Vconcept',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="page-content">
          {children}
        </div>
        <BootstrapClient />
      </body>
    </html>
  );
}
