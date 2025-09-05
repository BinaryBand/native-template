import React from "react";
import { StyleSheet, View } from "react-native";
import { Appbar, Surface, Text } from "react-native-paper";

interface ScreenTemplateProps {
  title: string;
  subtitle: string;
}

export default function ScreenTemplate({ title, subtitle }: ScreenTemplateProps) {
  return (
    <View style={styles.container}>
      {/* Info Bar using Paper Appbar */}
      <Appbar.Header elevated>
        <Appbar.Content title="Simple Template App" titleStyle={styles.headerTitle} />
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
    opacity: 0.7,
  },
});
