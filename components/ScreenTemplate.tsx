import { colors } from "@/constants/theme";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Appbar, Surface, Text } from "react-native-paper";
import MenuShelf from "./MenuShelf";

interface ScreenTemplateProps {
  title: string;
  subtitle: string;
  showMenu?: boolean;
  isDarkTheme?: boolean;
  onThemeToggle?: () => void;
}

export default function ScreenTemplate({
  title,
  subtitle,
  showMenu = false,
  isDarkTheme = false,
  onThemeToggle = () => {},
}: ScreenTemplateProps) {
  const [shelfVisible, setShelfVisible] = useState(false);

  const openShelf = () => setShelfVisible(true);
  const closeShelf = () => setShelfVisible(false);

  return (
    <View style={styles.container}>
      {/* Info Bar using Paper Appbar */}
      <Appbar.Header elevated>
        <Appbar.Content title="Simple Template App" titleStyle={styles.headerTitle} />
        {showMenu && <Appbar.Action icon="menu" iconColor={colors.white} onPress={openShelf} />}
      </Appbar.Header>

      {/* Main Content using Paper Surface */}
      <Surface style={styles.content} elevation={0}>
        <Text variant="headlineMedium" style={styles.title}>
          {title}
        </Text>
        <Text variant="bodyLarge" style={styles.subtitle}>
          {subtitle}
        </Text>
      </Surface>

      {/* Menu Shelf */}
      <MenuShelf visible={shelfVisible} onClose={closeShelf} isDarkTheme={isDarkTheme} onThemeToggle={onThemeToggle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    color: colors.white,
    textAlign: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "transparent",
  },
  title: {
    marginBottom: 10,
  },
  subtitle: {
    textAlign: "center",
    color: colors.text.secondary,
  },
});
