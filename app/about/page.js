import Image from "next/image";

export const metadata = { title: "About | Tin Roof Coffee Co." };

export default function Page() {
  return (
    <main className="page-main">
      <div className="container story-wrap">
        <h1>Our Story</h1>
        <Image
          src="/images/official-trailer.jpg"
          alt="Tin Roof Coffee Company trailer"
          width={900}
          height={500}
          className="media"
        />
        <p>
          Tin Roof Coffee Company was born in a place that felt simple, quiet,
          and meaningful, our garage. Sitting together under a tin roof, cups of
          coffee in hand, we found ourselves drawn to the steady rhythm of rain
          tapping overhead. There is something about that sound, especially
          growing up in the greater Seattle area, that feels grounding, familiar,
          and calm.
        </p>
        <p>
          Those moments became more than just part of our day. They became the
          inspiration behind our name and the heart of what we want to create.
        </p>
        <p>
          Tin Roof Coffee Company is built on that feeling. A place where life
          slows down for a minute. Where a good cup of coffee meets a sense of
          comfort, whether you are starting your day or taking a break from it.
        </p>
        <p>
          What started as an idea between my husband and I has grown into
          something we are incredibly proud of. Every detail, from the name, to
          the space we are building, comes from a place of intention, warmth,
          and a love for simple moments done well.
        </p>
        <p>
          We hope when you visit, you feel a little bit of that same calm we felt
          sitting under that tin roof, listening to the rain.
        </p>
      </div>
    </main>
  );
}
