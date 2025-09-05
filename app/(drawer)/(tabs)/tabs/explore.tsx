import { useAppTheme } from "@/contexts/ThemeContext";
import React from "react";
import { StyleSheet } from "react-native";
import { Surface, Text } from "react-native-paper";

export default function ExploreScreen() {
  const { theme } = useAppTheme();

  return (
    <Surface style={[styles.container, { backgroundColor: theme.colors.background }]} elevation={0}>
      <Text variant="headlineMedium" style={styles.title}>
        Discover & Explore
      </Text>
      <Text variant="bodyLarge" style={styles.subtitle}>
        Find new features and content here
      </Text>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    marginBottom: 10,
  },
  subtitle: {
    textAlign: "center",
  },
});
