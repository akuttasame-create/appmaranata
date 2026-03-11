import { useState } from "react";
import { SplashScreen } from "./components/SplashScreen";
import Home from "./components/Home";
import { AnimatePresence } from "motion/react";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen key="splash" onComplete={() => setShowSplash(false)} />
        ) : (
          <Home key="home" />
        )}
      </AnimatePresence>
    </div>
  );
}
