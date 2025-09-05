import { colors } from "@/constants/theme";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Appbar, Menu, Surface, Text } from "react-native-paper";

interface ScreenTemplateProps {
  title: string;
  subtitle: string;
  showMenu?: boolean;
}

export default function ScreenTemplate({ title, subtitle, showMenu = false }: ScreenTemplateProps) {
  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const handleMenuItemPress = (item: string) => {
    console.log(`${item} pressed`);
    closeMenu();
  };

  return (
    <View style={styles.container}>
      {/* Info Bar using Paper Appbar */}
      <Appbar.Header elevated>
        <Appbar.Content title="Simple Template App" titleStyle={styles.headerTitle} />
        {showMenu && (
          <Menu
            visible={menuVisible}
            onDismiss={closeMenu}
            anchor={<Appbar.Action icon="menu" iconColor={colors.white} onPress={openMenu} />}
            contentStyle={styles.menuContent}
          >
            <Menu.Item onPress={() => handleMenuItemPress("Settings")} title="Settings" leadingIcon="cog" />
            <Menu.Item onPress={() => handleMenuItemPress("Profile")} title="Profile" leadingIcon="account" />
            <Menu.Item onPress={() => handleMenuItemPress("Help")} title="Help" leadingIcon="help-circle" />
            <Menu.Item onPress={() => handleMenuItemPress("About")} title="About" leadingIcon="information" />
          </Menu>
        )}
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
  menuContent: {
    backgroundColor: colors.white,
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
