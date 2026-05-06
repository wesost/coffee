import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Tin Roof Coffee Co.</p>
            <h1>We strive to make great coffee and be great people.</h1>
            <p>
              Built in the Pacific Northwest spirit, Tin Roof Coffee Co. is all
              about warm hospitality, thoughtful coffee, and simple moments done
              well.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/about">Read Our Story</Link>
              <Link className="btn btn-secondary" href="/menu">Menu</Link>
              <Link className="btn btn-secondary" href="/contact">Contact Us</Link>
            </div>
          </div>
          <div className="hero-card">
            <Image
              src="/images/official-trailer.jpg"
              alt="Tin Roof Coffee Co. trailer"
              width={560}
              height={360}
              className="media"
              priority
            />
            <h2>Tin Roof Coffee Co.</h2>
            <p>Comforting coffee, welcoming people, and cozy community moments.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Upcoming Events</h2>
          <div className="cards">
            <article className="card">
              <Image
                src="/images/fancy_coffee.jpg"
                alt="Coffee event teaser"
                width={420}
                height={250}
                className="media"
              />
              <h3>Brewing Soon!</h3>
              <p>Seasonal events and pop-up details are coming soon.</p>
            </article>
          </div>
          <p className="section-note">
            Want updates first? Follow us on Instagram at{" "}
            <a href="https://instagram.com/tinroof.coffeeco">@tinroof.coffeeco</a>.
          </p>
        </div>
      </section>

      <section className="section cta">
        <div className="container cta-wrap">
          <h2>Visit Tin Roof Coffee Co.</h2>
          <p>Questions or collaborations? We would love to hear from you.</p>
          <Link className="btn btn-primary" href="/contact">Contact Us</Link>
        </div>
      </section>
    </main>
  );
}
