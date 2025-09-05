import { colors } from "@/constants/theme";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Drawer, Modal, Switch, Text } from "react-native-paper";

interface MenuShelfProps {
  visible: boolean;
  onClose: () => void;
  isDarkTheme: boolean;
  onThemeToggle: () => void;
}

export default function MenuShelf({ visible, onClose, isDarkTheme, onThemeToggle }: MenuShelfProps) {
  const handleMenuItemPress = (item: string) => {
    console.log(`${item} pressed`);
    onClose();
  };

  return (
    <Modal visible={visible} onDismiss={onClose} contentContainerStyle={styles.modalContent} dismissable={true}>
      <View style={styles.drawerContainer}>
        <View style={styles.header}>
          <Text variant="headlineSmall">Menu</Text>
        </View>

        <Drawer.Section>
          <Drawer.Item label="Settings" icon="cog" onPress={() => handleMenuItemPress("Settings")} />
          <Drawer.Item label="Profile" icon="account" onPress={() => handleMenuItemPress("Profile")} />
          <Drawer.Item label="Help" icon="help-circle" onPress={() => handleMenuItemPress("Help")} />
          <Drawer.Item label="About" icon="information" onPress={() => handleMenuItemPress("About")} />
        </Drawer.Section>

        <View style={styles.divider} />

        <View style={styles.themeToggle}>
          <Text variant="bodyLarge" style={styles.themeLabel}>
            {isDarkTheme ? "Dark" : "Light"} Mode
          </Text>
          <Switch value={isDarkTheme} onValueChange={onThemeToggle} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: colors.surface,
    margin: 0,
    marginLeft: "30%",
    height: "100%",
    elevation: 4,
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  header: {
    padding: 20,
    paddingTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.surface,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 8,
  },
  themeToggle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  themeLabel: {
    flex: 1,
  },
});
