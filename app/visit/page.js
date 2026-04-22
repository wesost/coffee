import Image from "next/image";

export const metadata = { title: "Visit Us | Madi & Jace Coffee Co." };

export default function Page() {
  return (
    <main className="page-main">
      <div className="container">
        <h1>Visit Us</h1>
        <Image src="/images/coffee_trailer.jpg" alt="Coffee trailer location preview" width={520} height={300} className="media" />
        <p><strong>Address:</strong> 123 Cozy Lane, Coffeeville, ST 00000</p><p><strong>Hours:</strong> Mon-Fri 6:30 AM-5:00 PM, Sat-Sun 7:00 AM-6:00 PM</p><p>Map, parking, and accessibility notes can be added in this section.</p>
      </div>
    </main>
  );
}
