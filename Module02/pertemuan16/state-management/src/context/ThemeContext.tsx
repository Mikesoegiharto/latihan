// src/context/ThemeContext.tsx
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface ThemeContextType {
  theme: string;
  setTheme: (value: string) => void;
}

// creates a shared space for global state.
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// wraps the entire app and stores theme state.
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<string>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// custom hook that allows components to access theme easily.
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}