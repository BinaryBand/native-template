import { ThemeProvider, useAppTheme } from "@/contexts/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { PaperProvider } from "react-native-paper";

function DrawerContent() {
  const { theme, isDark } = useAppTheme();

  return (
    <PaperProvider theme={theme}>
      <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <StatusBar style={isDark ? "light" : "dark"} />
        <Drawer
          screenOptions={{
            drawerStyle: {
              backgroundColor: theme.colors.surface,
            },
            headerStyle: {
              backgroundColor: theme.colors.surface,
            },
            headerTintColor: theme.colors.onSurface,
            drawerActiveTintColor: theme.colors.primary,
            drawerInactiveTintColor: theme.colors.onSurfaceVariant,
          }}
        >
          <Drawer.Screen
            name="(tabs)"
            options={{
              drawerLabel: "Home",
              title: "Home",
              drawerIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
            }}
          />
          <Drawer.Screen
            name="settings"
            options={{
              drawerLabel: "Settings",
              title: "Settings",
              drawerIcon: ({ color }) => <Ionicons name="settings" size={24} color={color} />,
            }}
          />
          <Drawer.Screen
            name="profile"
            options={{
              drawerLabel: "Profile",
              title: "Profile",
              drawerIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
            }}
          />
        </Drawer>
      </View>
    </PaperProvider>
  );
}

export default function DrawerLayout() {
  return (
    <ThemeProvider>
      <DrawerContent />
    </ThemeProvider>
  );
}
