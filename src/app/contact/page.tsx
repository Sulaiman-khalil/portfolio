// src/app/contact/page.tsx
"use client";
import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { theme } from "../../theme";
import Link from "next/link";

const ContactForm = dynamic(() => import("../../components/ContactForm"), {
  ssr: false,
  loading: () => <p>Lade Kontaktformular…</p>,
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing(4)};
  font-family: ${theme.typography.fontFamily};
  max-width: 900px;
  margin: 0 auto;
  background: ${theme.colors.background};
  color: ${theme.colors.text};
  min-height: calc(100vh - ${theme.spacing(4)});

  @media (max-width: 768px) {
    padding: ${theme.spacing(3)};
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing(4)};
  padding-bottom: ${theme.spacing(2)};
  border-bottom: 1px solid #eee;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing(1)};

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: ${theme.colors.text};

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// Keyframe-Animation: Ein sanftes Hereinrutschen und Einblenden
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FormWrapper = styled.div`
  background: #fff;
  padding: ${theme.spacing(4)};
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  animation: ${fadeInUp} 0.8s ease-out both;

  @media (max-width: 768px) {
    padding: ${theme.spacing(3)};
  }
`;

const BackButton = styled(Link)`
  display: block;
  margin: ${theme.spacing(4)} auto 0 auto;
  width: fit-content;
  padding: ${theme.spacing(1)} ${theme.spacing(4)};
  background: ${theme.colors.primary};
  color: #fff;
  text-decoration: none;
  border-radius: 30px;
  font-size: 1.1rem;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: ${theme.colors.secondary};
    transform: scale(1.05);
  }
`;

export default function ContactPage() {
  return (
    <Container>
      <HeaderSection>
        <Title>Kontakt</Title>
        <Subtitle>
          Wir freuen uns über deine Nachricht. Bitte fülle das Formular aus und
          wir melden uns baldmöglichst bei dir!
        </Subtitle>
      </HeaderSection>
      <FormWrapper>
        <ContactForm />
      </FormWrapper>
      <BackButton href="/">Zurück zur Startseite</BackButton>
    </Container>
  );
}
