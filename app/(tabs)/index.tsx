import ScreenTemplate from "@/components/ScreenTemplate";
import React, { useState } from "react";

export default function HomeScreen() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ScreenTemplate
      title="Home Tab"
      subtitle="This is the home screen with Material Design components"
      showMenu={true}
      isDarkTheme={isDarkTheme}
      onThemeToggle={handleThemeToggle}
    />
  );
}
