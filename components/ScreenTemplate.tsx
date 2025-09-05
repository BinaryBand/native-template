import { colors } from "@/constants/theme";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Appbar, Surface, Text } from "react-native-paper";

interface ScreenTemplateProps {
  title: string;
  subtitle: string;
  showSettings?: boolean;
}

export default function ScreenTemplate({ title, subtitle, showSettings = false }: ScreenTemplateProps) {
  const handleSettingsPress = () => {
    // Settings functionality can be implemented here
    console.log("Settings pressed");
  };

  return (
    <View style={styles.container}>
      {/* Info Bar using Paper Appbar */}
      <Appbar.Header elevated>
        <Appbar.Content title="Simple Template App" titleStyle={styles.headerTitle} />
        {showSettings && <Appbar.Action icon="cog" iconColor={colors.white} onPress={handleSettingsPress} />}
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
    backgroundColor: colors.background.transparent,
  },
  title: {
    marginBottom: 10,
  },
  subtitle: {
    textAlign: "center",
    color: colors.text.secondary,
  },
});
