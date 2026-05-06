import Image from "next/image";
import ContactForm from "./ContactForm";

export const metadata = { title: "Contact | Tin Roof Coffee Co." };

export default function Page() {
  return (
    <main className="page-main">
      <div className="container">
        <h1>Contact</h1>
        <Image src="/images/fancy_coffee.jpg" alt="Coffee bar image for contact section" width={520} height={300} className="media" />
        <p>
          We would love to hear from you. Send us a message and we will reply soon.
        </p>
        <div className="contact-grid">
          <ContactForm />

          <aside className="contact-card">
            <h2>Shop Info</h2>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:trcoffeecompany@gmail.com">trcoffeecompany@gmail.com</a>
            </p>
            <p>
              <strong>Instagram:</strong>{" "}
              <a href="https://instagram.com/tinroof.coffeeco">@tinroof.coffeeco</a>
            </p>
            <p>
              We are currently finalizing regular service hours and location details.
              Stay tuned on Instagram for the latest updates.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}
