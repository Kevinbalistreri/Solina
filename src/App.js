import React from "react";
import SplashScreen from "./SplashScreen";
import SolinaApp from "./SolinaApp";
import { useState } from "react";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return showSplash ? (
    <SplashScreen onComplete={() => setShowSplash(false)} />
  ) : (
    <SolinaApp />
  );
}