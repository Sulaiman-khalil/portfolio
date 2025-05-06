// src/app/resume/page.tsx
"use client";
import styled from "@emotion/styled";
import { theme } from "../../theme";
import Link from "next/link";

const Container = styled.div`
  padding: ${theme.spacing(4)};
  max-width: 900px;
  margin: 0 auto;
  background: ${theme.colors.background};
  color: ${theme.colors.text};
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: ${theme.spacing(3)};
  color: ${theme.colors.primary};
`;

const Section = styled.section`
  margin-bottom: ${theme.spacing(4)};
  background: #fff;
  padding: ${theme.spacing(3)};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: ${theme.spacing(2)};
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: ${theme.spacing(1.5)};
  color: ${theme.colors.primary};
  border-bottom: 2px solid ${theme.colors.primary};
  display: inline-block;
  padding-bottom: ${theme.spacing(0.5)};
`;

const SectionContent = styled.div`
  font-size: 1.125rem;
  line-height: 1.6;
  margin-top: ${theme.spacing(1)};
`;

const List = styled.ul`
  margin: 0;
  padding-left: ${theme.spacing(3)};
  list-style: disc;
`;

const ListItem = styled.li`
  margin-bottom: ${theme.spacing(1)};
  font-size: 1.125rem;
  line-height: 1.6;
`;

const BackButton = styled(Link)`
  display: block;
  margin: ${theme.spacing(3)} auto 0 auto;
  padding: ${theme.spacing(1)} ${theme.spacing(3)};
  background: ${theme.colors.primary};
  color: #fff;
  text-decoration: none;
  text-align: center;
  width: fit-content;
  border-radius: 5px;
  transition: background 0.3s;
  &:hover {
    background: ${theme.colors.secondary};
  }
`;

export default function Resume() {
  return (
    <Container>
      <Title>Lebenslauf</Title>

      <Section>
        <SectionTitle>Berufserfahrung</SectionTitle>
        <SectionContent>
          <strong>Frontend Engineer – IBM iX DACH, Berlin (2022 – 2024)</strong>
          <List>
            <ListItem>
              Entwicklung und Pflege komplexer Frontend-Komponenten in
              anspruchsvollen Unternehmensprojekten
            </ListItem>
            <ListItem>
              Umsetzung benutzerzentrierter Webanwendungen in Zusammenarbeit mit
              Design, Backend und UX
            </ListItem>
            <ListItem>
              Optimierung der Anwendungen hinsichtlich Performance und
              Skalierbarkeit
            </ListItem>
            <ListItem>
              Sicherstellung hoher Codequalität durch kontinuierliche Tests und
              Code Reviews
            </ListItem>
          </List>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>Ausbildung</SectionTitle>
        <SectionContent>
          <strong>
            Trainee Frontend Developer – IBM iX DACH, Berlin (2021 – 2022)
          </strong>
          <List>
            <ListItem>
              Praxisnahe Schulung in modernen Webtechnologien und agilen
              Entwicklungsprozessen
            </ListItem>
          </List>
          <br />
          <strong>Studium der Informatik (unvollständig) – 2016 – 2018</strong>
          <br />
          Fokus: Softwareentwicklung und Systemarchitektur
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>Zertifizierungen &amp; Fortbildungen</SectionTitle>
        <SectionContent>
          <List>
            <ListItem>Complete Angular Course (Udemy, Februar 2024)</ListItem>
            <ListItem>
              Figma UI/UX Design Essentials (Udemy, November 2022)
            </ListItem>
            <ListItem>Introductory TypeScript (Udemy, September 2022)</ListItem>
            <ListItem>React – The Complete Guide</ListItem>
            <ListItem>Web Components &amp; Stencil.js (Udemy)</ListItem>
            <ListItem>Understanding TypeScript (Udemy)</ListItem>
            <ListItem>Advanced CSS and Sass</ListItem>
          </List>
        </SectionContent>
      </Section>

      <BackButton href="/">Zurück zur Startseite</BackButton>
    </Container>
  );
}
