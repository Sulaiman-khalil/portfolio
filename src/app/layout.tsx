// src/app/layout.tsx
import { Providers } from "./providers";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata = {
  title: "Sulaiman Khalil - Portfolio",
  description: "Modernes Portfolio mit Resume und Kontakt.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      {/* Der Body wird als Flex-Container genutzt, der mindestens die volle Höhe hat */}
      <body
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Providers>
          <Header />
          {/* Der Main-Bereich wächst und hat einen Scroll, wenn der Inhalt größer als der verfügbare Raum wird */}
          <main style={{ flex: 1, overflowY: "auto" }}>{children}</main>
          {/* Der Footer bleibt am unteren Rand */}
          <Footer
            links={[
              { label: "Home", href: "/" },
              { label: "Resume", href: "/resume" },
              { label: "Kontakt", href: "/contact" },
            ]}
          />
        </Providers>
      </body>
    </html>
  );
}
