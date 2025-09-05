import { useAppTheme } from "@/contexts/ThemeContext";
import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Surface, Text } from "react-native-paper";

export default function Profile() {
  const { theme } = useAppTheme();

  return (
    <Surface style={[styles.container, { backgroundColor: theme.colors.background }]} elevation={0}>
      <Avatar.Text size={80} label="U" style={styles.avatar} />
      <Text variant="headlineLarge" style={styles.title}>
        User Profile
      </Text>
      <Text variant="bodyLarge" style={styles.subtitle}>
        Welcome to your profile page
      </Text>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    marginBottom: 16,
  },
  title: {
    marginBottom: 16,
  },
  subtitle: {
    textAlign: "center",
  },
});
