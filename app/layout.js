import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Tin Roof Coffee Co.",
  description: "We strive to make great coffee and be great people.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container nav-wrap">
            <Link className="brand" href="/">
              <Image
                src="/images/tin-roof-logo.png"
                alt="Tin Roof Coffee Co. logo"
                width={44}
                height={44}
                className="brand-logo"
              />
              <span>Tin Roof Coffee Co.</span>
            </Link>
            <nav className="main-nav" aria-label="Primary">
              <Link href="/">Home</Link>
              <Link href="/events">Upcoming Events</Link>
              <Link href="/about">Our Story</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="container footer-wrap">
            <p>© 2026 Tin Roof Coffee Co.</p>
            <p>
              <a href="https://tinroofcc.com">tinroofcc.com</a> |{" "}
              <a href="https://instagram.com/tinroof.coffeeco">@tinroof.coffeeco</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
