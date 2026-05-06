import Image from "next/image";

export const metadata = { title: "Menu | Tin Roof Coffee Co." };

export default function Page() {
  return (
    <main className="page-main">
      <div className="container">
        <h1>Menu</h1>
        <Image
          src="/images/coffee_cup.jpg"
          alt="Coffee drinks for the menu section"
          width={520}
          height={300}
          className="media"
        />
        <div className="card">
          <h2>Coming Soon</h2>
          <p>
            We are finalizing our menu. Check back soon to see our full lineup of
            drinks and seasonal offerings.
          </p>
        </div>
      </div>
    </main>
  );
}
