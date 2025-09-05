export const lightTheme = {
  colors: {
    primary: "#007AFF",
    surface: "#FFFFFF",
    background: "#F5F5F5",
    white: "#FFFFFF",
    text: {
      primary: "#000000",
      secondary: "rgba(0, 0, 0, 0.7)",
      inverse: "#FFFFFF",
    },
    border: "#E0E0E0",
  },
};

export const darkTheme = {
  colors: {
    primary: "#007AFF",
    surface: "#1E1E1E",
    background: "#121212",
    white: "#FFFFFF",
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(255, 255, 255, 0.7)",
      inverse: "#000000",
    },
    border: "#333333",
  },
};

// Default to light theme for backwards compatibility
export const colors = lightTheme.colors;
export const theme = lightTheme;
