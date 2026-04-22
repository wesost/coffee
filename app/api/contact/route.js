import { NextResponse } from "next/server";

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const name = (body?.name || "").trim();
    const email = (body?.email || "").trim();
    const message = (body?.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please provide name, email, and message." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: "Message should be at least 10 characters." },
        { status: 400 }
      );
    }

    // Placeholder behavior: logs message server-side for now.
    console.log("Contact form submission", {
      name,
      email,
      message,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload. Please try again." },
      { status: 400 }
    );
  }
}
