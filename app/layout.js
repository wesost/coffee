import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Madi & Jace Coffee Co.",
  description: "Slow mornings, warm mugs, good company at Madi & Jace Coffee Co.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container nav-wrap">
            <Link className="brand" href="/">Madi & Jace Coffee Co.</Link>
            <nav className="main-nav" aria-label="Primary">
              <Link href="/">Home</Link>
              <Link href="/menu">Menu</Link>
              <Link href="/about">About</Link>
              <Link href="/visit">Visit Us</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="container footer-wrap">
            <p>© 2026 Madi & Jace Coffee Co. Placeholder content.</p>
            <p>Instagram | Facebook | Privacy Policy</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
