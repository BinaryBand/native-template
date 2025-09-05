import { colors } from "@/constants/theme";
import React from "react";
import { Animated, Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import { List, Surface, Switch, Text } from "react-native-paper";

interface MenuShelfProps {
  visible: boolean;
  onClose: () => void;
  isDarkTheme: boolean;
  onThemeToggle: () => void;
}

export default function MenuShelf({ visible, onClose, isDarkTheme, onThemeToggle }: MenuShelfProps) {
  const { width } = Dimensions.get("window");
  const slideAnim = React.useRef(new Animated.Value(width)).current;

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 0 : width,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  const handleMenuItemPress = (item: string) => {
    console.log(`${item} pressed`);
    onClose();
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={onClose} />

      {/* Shelf */}
      <Animated.View
        style={[
          styles.shelf,
          {
            transform: [{ translateX: slideAnim }],
          },
        ]}
      >
        <Surface style={styles.surface} elevation={4}>
          <View style={styles.header}>
            <Text variant="headlineSmall">Menu</Text>
          </View>

          <List.Item
            title="Settings"
            left={(props) => <List.Icon {...props} icon="cog" />}
            onPress={() => handleMenuItemPress("Settings")}
          />

          <List.Item
            title="Profile"
            left={(props) => <List.Icon {...props} icon="account" />}
            onPress={() => handleMenuItemPress("Profile")}
          />

          <List.Item
            title="Help"
            left={(props) => <List.Icon {...props} icon="help-circle" />}
            onPress={() => handleMenuItemPress("Help")}
          />

          <List.Item
            title="About"
            left={(props) => <List.Icon {...props} icon="information" />}
            onPress={() => handleMenuItemPress("About")}
          />

          <View style={styles.divider} />

          <View style={styles.themeToggle}>
            <List.Icon icon={isDarkTheme ? "weather-night" : "weather-sunny"} />
            <Text variant="bodyLarge" style={styles.themeLabel}>
              {isDarkTheme ? "Dark" : "Light"} Mode
            </Text>
            <Switch value={isDarkTheme} onValueChange={onThemeToggle} />
          </View>
        </Surface>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
  shelf: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: 280,
    zIndex: 1001,
  },
  surface: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  header: {
    padding: 20,
    paddingTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 8,
  },
  themeToggle: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 12,
  },
  themeLabel: {
    flex: 1,
  },
});
