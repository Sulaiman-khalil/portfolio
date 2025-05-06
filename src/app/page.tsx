// src/app/page.tsx
"use client";
import Link from "next/link";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { theme } from "../theme";

// Animation: Sanftes Hereinblenden von oben
const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${theme.typography.fontFamily};
  background: ${theme.colors.background};
  color: ${theme.colors.text};
  min-height: 100vh;
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${theme.colors.primary},
    ${theme.colors.secondary}
  );
  padding: ${theme.spacing(8)} 0;
  text-align: center;
  animation: ${fadeInDown} 1s ease-out both;

  @media (max-width: 768px) {
    padding: ${theme.spacing(6)} 0;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  color: #fff;
  margin-bottom: ${theme.spacing(2)};

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: ${theme.spacing(4)};

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const CTAButton = styled(Link)`
  background: #fff;
  color: ${theme.colors.primary};
  padding: ${theme.spacing(1.5)} ${theme.spacing(4)};
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, background 0.3s;

  &:hover {
    background: ${theme.colors.secondary};
    transform: scale(1.05);
    color: #fff;
  }
`;

const Section = styled.section`
  padding: ${theme.spacing(4)} 0;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: ${theme.spacing(2)};
  color: ${theme.colors.primary};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionContent = styled.p`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.2rem;
  line-height: 1.6;
  color: ${theme.colors.text};
`;

export default function Home() {
  return (
    <Container>
      <HeroSection>
        <HeroTitle>Willkommen bei Sulaiman Khalil</HeroTitle>
        <HeroSubtitle>
          Passionierter Frontend Developer – Innovative Lösungen, die
          begeistern.
        </HeroSubtitle>
        <CTAButton href="/contact">Kontakt aufnehmen</CTAButton>
      </HeroSection>
      <Section id="about">
        <SectionTitle>Über mich</SectionTitle>
        <SectionContent>
          Mit über zwei Jahren Erfahrung in der Entwicklung moderner,
          skalierbarer Webanwendungen liegt mein Fokus auf React, Angular und
          Web Components. Ich kombiniere kreatives Design mit technischem
          Know-how, um intuitive und ansprechende Nutzererlebnisse zu schaffen.
        </SectionContent>
      </Section>
      <Section id="projects">
        <SectionTitle>Projekte</SectionTitle>
        <SectionContent>
          Eine Auswahl meiner Projekte zeigt mein Engagement für innovative
          Frontend-Technologien, modernes Design und leistungsfähige Lösungen –
          demnächst verfügbar!
        </SectionContent>
      </Section>
    </Container>
  );
}
