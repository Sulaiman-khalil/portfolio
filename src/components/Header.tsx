// src/components/Header.tsx
"use client";

import Link from "next/link";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { theme } from "../theme";

// Keyframe-Animation für ein sanftes Hereingleiten des Headers
const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: rgba(
    0,
    0,
    0,
    0.9
  ); /* theme.colors.primary mit Transparenz */
  backdrop-filter: blur(8px);
  padding: ${theme.spacing(2)} ${theme.spacing(4)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${slideDown} 0.5s ease-out;
  transition: background-color 0.3s;

  @media (max-width: 768px) {
    padding: ${theme.spacing(2)} ${theme.spacing(2)};
  }
`;

// Verwenden eines Styled Link als Logo, damit der Text klickbar ist
const LogoLink = styled(Link)`
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  gap: ${theme.spacing(3)};
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  padding-bottom: 4px;

  &:after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    background: ${theme.colors.secondary};
    left: 0;
    bottom: 0;
    transition: width 0.3s;
  }

  &:hover:after {
    width: 100%;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <LogoLink href="/">Sulaiman Khalil</LogoLink>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/resume">Resume</NavLink>
        <NavLink href="/contact">Kontakt</NavLink>
      </Nav>
    </HeaderContainer>
  );
}
