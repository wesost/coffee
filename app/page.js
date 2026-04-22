import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Neighborhood Coffeehouse</p>
            <h1>Slow mornings, warm mugs, good company.</h1>
            <p>
              Welcome to a cozy corner for small-batch coffee, flaky pastries,
              and easy conversation.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/menu">See Our Menu</Link>
              <Link className="btn btn-secondary" href="/visit">Plan Your Visit</Link>
            </div>
          </div>
          <div className="hero-card">
            <Image src="/images/hero.webp" alt="Cozy coffee setup with warm lighting" width={560} height={360} className="media" priority />
            <p>Seasonal Favorite</p>
            <h2>Maple Cinnamon Latte</h2>
            <p>Espresso, steamed oat milk, maple syrup, cinnamon dust.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Featured Drinks</h2>
          <div className="cards">
            <article className="card">
              <Image src="/images/fancy_coffee.jpg" alt="Featured honey vanilla latte" width={420} height={250} className="media" />
              <h3>Honey Vanilla Latte</h3>
              <p>Velvety espresso with warm vanilla and local honey.</p>
            </article>
            <article className="card">
              <Image src="/images/coffee_cup.jpg" alt="Featured mocha in a ceramic cup" width={420} height={250} className="media" />
              <h3>Mocha by the Fire</h3>
              <p>House cocoa, double-shot espresso, and whipped cream.</p>
            </article>
            <article className="card">
              <Image src="/images/coffee_trailer.jpg" alt="Coffee trailer serving drinks" width={420} height={250} className="media" />
              <h3>Cold Brew Spruce</h3>
              <p>Bright, smooth cold brew with a splash of citrus syrup.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container two-col">
          <div>
            <h2>Our Story</h2>
            <p>
              We started Madi & Jace to create a calm, welcoming space where
              neighbors can pause, connect, and enjoy thoughtfully brewed coffee.
            </p>
          </div>
          <div>
            <Image src="/images/coffee_cup.jpg" alt="Freshly brewed coffee served in-house" width={520} height={320} className="media" />
            <h2>Visit Us</h2>
            <p>123 Cozy Lane, Coffeeville, ST 00000</p>
            <p>Mon-Fri: 6:30 AM-5:00 PM<br />Sat-Sun: 7:00 AM-6:00 PM</p>
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="container cta-wrap">
          <h2>Stay in the Loop</h2>
          <p>Follow along for seasonal drinks and neighborhood events.</p>
          <Link className="btn btn-primary" href="/contact">Contact Us</Link>
        </div>
      </section>
    </main>
  );
}
