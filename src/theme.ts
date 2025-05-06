// src/theme.ts
export const theme = {
  colors: {
    primary: "#1a73e8", // Primärfarbe (Blau)
    secondary: "#fbbc05", // Akzentfarbe (Gelb)
    background: "#f4f4f4", // Heller Hintergrund
    text: "#333", // Dunkler Text
  },
  spacing: (factor: number) => `${factor * 8}px`, // Basisgröße von 8px
  typography: {
    fontFamily: "'Inter', sans-serif",
    fontSize: "16px",
    headerSize: "2rem",
  },
};
