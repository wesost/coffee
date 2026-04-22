import Image from "next/image";

export const metadata = { title: "About | Tin Roof Coffee Co." };

export default function Page() {
  return (
    <main className="page-main">
      <div className="container">
        <h1>About</h1>
        <Image src="/images/hero.webp" alt="Warm coffee shop atmosphere" width={520} height={300} className="media" />
        <p>Tell your small business story, values, and team details here.</p>
      </div>
    </main>
  );
}
