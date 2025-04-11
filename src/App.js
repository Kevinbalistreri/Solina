import React from "react";
import SplashScreen from "./SplashScreen";
import SolinaApp from "./SolinaApp";
import NeuralBackground from "./components/NeuralBackground";
import { useState } from "react";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return showSplash ? (
    <SplashScreen onComplete={() => setShowSplash(false)} />
  ) : (
    <>
      <NeuralBackground />

      {/* Logo fisso in alto al centro, con distanza dal contenuto */}
      <img
  src="/logo-top.png"
  alt="Solina Logo"
  className="fixed top-4 left-1/2 transform -translate-x-1/2 w-24 z-50 pointer-events-none"
/>

      {/* Aggiunta di un padding top per evitare che il contenuto tocchi il logo */}
      <div className="pt-20">
        <SolinaApp />
      </div>
    </>
  );
}