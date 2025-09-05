import { useAppTheme } from "@/contexts/ThemeContext";
import React from "react";
import { StyleSheet } from "react-native";
import { List, RadioButton, Surface, Text } from "react-native-paper";

export default function Settings() {
  const { themeMode, setThemeMode, theme } = useAppTheme();

  return (
    <Surface style={[styles.container, { backgroundColor: theme.colors.background }]} elevation={0}>
      <Text variant="headlineLarge" style={styles.title}>
        Settings
      </Text>

      <Text variant="titleMedium" style={styles.sectionTitle}>
        Theme
      </Text>

      <RadioButton.Group onValueChange={(value) => setThemeMode(value as any)} value={themeMode}>
        <List.Item
          title="Light"
          left={() => <RadioButton value="light" />}
          onPress={() => setThemeMode("light")}
          style={styles.setting}
        />
        <List.Item
          title="Dark"
          left={() => <RadioButton value="dark" />}
          onPress={() => setThemeMode("dark")}
          style={styles.setting}
        />
        <List.Item
          title="Follow System"
          left={() => <RadioButton value="system" />}
          onPress={() => setThemeMode("system")}
          style={styles.setting}
        />
      </RadioButton.Group>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    marginBottom: 20,
  },
  sectionTitle: {
    marginBottom: 10,
    marginTop: 10,
  },
  setting: {
    paddingHorizontal: 0,
  },
});
