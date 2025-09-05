import ScreenTemplate from "@/components/ScreenTemplate";
import React, { useState } from "react";

export default function ExploreScreen() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ScreenTemplate
      title="Explore Tab"
      subtitle="Discover new features and content in this exploration screen"
      showMenu={true}
      isDarkTheme={isDarkTheme}
      onThemeToggle={handleThemeToggle}
    />
  );
}
