import React, { createContext, ReactNode, useContext, useState } from "react";
import { useColorScheme } from "react-native";
import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";

type ThemeMode = "light" | "dark" | "system";

interface ThemeContextType {
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  theme: typeof MD3LightTheme | typeof MD3DarkTheme;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [themeMode, setThemeMode] = useState<ThemeMode>("system");
  const systemColorScheme = useColorScheme();

  const isDark = themeMode === "system" ? systemColorScheme === "dark" : themeMode === "dark";

  const theme = isDark ? MD3DarkTheme : MD3LightTheme;

  return <ThemeContext.Provider value={{ themeMode, setThemeMode, theme, isDark }}>{children}</ThemeContext.Provider>;
}

export function useAppTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useAppTheme must be used within a ThemeProvider");
  }
  return context;
}
