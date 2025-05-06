// src/components/Footer.tsx
"use client";

import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import Link from "next/link";
import { theme } from "../theme";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterProps {
  links: FooterLink[];
  copyrightText?: string;
}

const DEFAULT_COPYRIGHT = "© 2025 Sulaiman Khalil. Alle Rechte vorbehalten.";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FooterContainer = styled.footer`
  background: linear-gradient(
    135deg,
    ${theme.colors.primary},
    ${theme.colors.secondary}
  );
  padding: ${theme.spacing(3)};
  text-align: center;
  color: #fff;
  animation: ${fadeIn} 0.8s ease-out both;
`;

const FooterNav = styled.nav`
  margin-top: ${theme.spacing(2)};
`;

const StyledLink = styled(Link)`
  color: #fff;
  margin: 0 ${theme.spacing(1)};
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${theme.colors.background};
  }
`;

const FooterText = styled.p`
  font-size: 1rem;
  margin: ${theme.spacing(1)} 0;
`;

const Footer: React.FC<FooterProps> = ({ links, copyrightText }) => {
  return (
    <FooterContainer>
      <FooterText>{copyrightText || DEFAULT_COPYRIGHT}</FooterText>
      <FooterNav>
        {links.map((link, index) => (
          <StyledLink key={index} href={link.href}>
            {link.label}
          </StyledLink>
        ))}
      </FooterNav>
    </FooterContainer>
  );
};

export default Footer;
