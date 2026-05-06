import Image from "next/image";

export const metadata = { title: "Upcoming Events | Tin Roof Coffee Co." };

export default function EventsPage() {
  return (
    <main className="page-main">
      <div className="container">
        <h1>Upcoming Events</h1>
        <Image
          src="/images/official-trailer.jpg"
          alt="Tin Roof Coffee Company event trailer"
          width={900}
          height={500}
          className="media"
        />
        <div className="card">
          <h2>Brewing Soon!</h2>
          <p>
            Our seasonal event lineup is coming soon. Check back here for market
            pop-ups, community events, and special coffee experiences.
          </p>
          <p>
            For now, follow us on Instagram at{" "}
            <a href="https://instagram.com/tinroof.coffeeco">@tinroof.coffeeco</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
