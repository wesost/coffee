import Image from "next/image";

export const metadata = { title: "Menu | Tin Roof Coffee Co." };

export default function Page() {
  return (
    <main className="page-main">
      <div className="container">
        <h1>Menu</h1>
        <Image src="/images/coffee_cup.jpg" alt="Coffee drinks for the menu section" width={520} height={300} className="media" />
        <p>Signature coffee, tea, and pastry items. Replace with your final menu and pricing.</p><div className="cards"><article className="card"><h3>Espresso Drinks</h3><p>Latte, cappuccino, flat white, mocha.</p></article><article className="card"><h3>House Coffee</h3><p>Pour-over, batch brew, cold brew.</p></article><article className="card"><h3>Bakery</h3><p>Croissants, muffins, seasonal scones.</p></article></div>
      </div>
    </main>
  );
}
