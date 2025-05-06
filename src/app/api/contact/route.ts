// src/app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log("Kontaktanfrage:", data);
    // Hier könnte man z. B. einen E-Mail-Versand oder eine Datenbankspeicherung implementieren.
    return NextResponse.json({ message: "Nachricht erfolgreich empfangen!" });
  } catch (error) {
    return NextResponse.json(
      { message: "Fehler beim Senden der Nachricht" },
      { status: 500 }
    );
  }
}
