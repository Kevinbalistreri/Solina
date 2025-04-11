// src/components/NeuralBackground.jsx
import React from "react";
import "../assets/NeuralBackground.css"; // ← questo è corretto se il CSS è in src/assets

export default function NeuralBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="neural-bg" />
    </div>
  );
}