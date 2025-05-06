// src/app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Lese die gesendeten Daten aus dem Request-Body aus
    const { name, email, message } = await request.json();

    // Hier kannst du die Logik integrieren, um die Formulardaten zu verarbeiten:
    // • E-Mail senden (z. B. mit Nodemailer)
    // • In einer Datenbank speichern
    // • Log-Ausgaben für Debugging, etc.
    console.log("Formulardaten empfangen:", { name, email, message });

    // Rückmeldung, dass die Nachricht erfolgreich empfangen wurde.
    return NextResponse.json({ message: "Nachricht erfolgreich empfangen!" });
  } catch (error) {
    console.error("Fehler beim Verarbeiten der Kontaktanfrage:", error);
    return NextResponse.json(
      { message: "Fehler beim Absenden der Nachricht." },
      { status: 500 }
    );
  }
}
