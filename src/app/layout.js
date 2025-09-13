import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "./components/BootStrapClient";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./globals.css";
import Footer from "./components/footer/footer";
import Head from "next/head";
import { Metadata } from 'next';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  description: "Design and build",
  title: {
    template: ' | Dluxe House',
    default: 'Dluxe House',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="page-content">
          {children}
        </div>
        <div>
          <Footer />
        </div>
        <div className="social-fixed">
          <a href="https://facebook.com" target="_blank" className="social-icon fb">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" target="_blank" className="social-icon ig">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://zalo.me" target="_blank" className="social-icon zalo">
            <i className="fas fa-comment-dots"></i>
          </a>
        </div>
        <BootstrapClient />
      </body>
    </html>
  );
}
