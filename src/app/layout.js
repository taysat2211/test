import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "./components/BootStrapClient";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./globals.css";
import Head from "next/head";
import { Metadata } from 'next';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  description: "Design and build",
  title: {
    template: 'Dluxe House',
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
