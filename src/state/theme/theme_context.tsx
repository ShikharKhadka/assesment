import { createContext } from "react";

interface ThemeContextType {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>
}

export const ThemeDataContext = createContext<ThemeContextType | undefined>(undefined);