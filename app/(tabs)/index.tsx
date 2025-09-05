import ScreenTemplate from "@/components/ScreenTemplate";
import React from "react";

export default function HomeScreen() {
  return (
    <ScreenTemplate
      title="Home Tab"
      subtitle="This is the home screen with Material Design components"
      showSettings={true}
    />
  );
}
