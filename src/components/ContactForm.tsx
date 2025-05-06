// src/components/ContactForm.tsx
"use client";
import { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "../theme";

const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  label {
    margin-top: ${theme.spacing(1)};
  }
  input,
  textarea {
    padding: ${theme.spacing(1)};
    margin-bottom: ${theme.spacing(1)};
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  button {
    padding: ${theme.spacing(1)} ${theme.spacing(2)};
    border: none;
    background: ${theme.colors.primary};
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
    transition: background 0.3s;
    &:hover {
      background: ${theme.colors.secondary};
    }
  }
`;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    setStatus(data.message);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChange}
        required
      />
      <label htmlFor="email">E-Mail:</label>
      <input
        id="email"
        type="email"
        name="email"
        onChange={handleChange}
        required
      />
      <label htmlFor="message">Nachricht:</label>
      <textarea
        id="message"
        name="message"
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit">Absenden</button>
      {status && <p>{status}</p>}
    </Form>
  );
}
