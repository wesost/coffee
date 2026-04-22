import Image from "next/image";
import ContactForm from "./ContactForm";

export const metadata = { title: "Contact | Madi & Jace Coffee Co." };

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
            <p>Email: hello@example.com</p>
            <p>Phone: (000) 000-0000</p>
            <p>Address: 123 Cozy Lane, Coffeeville, ST 00000</p>
            <p>Hours: Mon-Fri 6:30 AM-5:00 PM, Sat-Sun 7:00 AM-6:00 PM</p>
          </aside>
        </div>
      </div>
    </main>
  );
}
