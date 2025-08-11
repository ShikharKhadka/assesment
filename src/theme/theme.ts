import { createTheme, type PaletteOptions } from "@mui/material";

const client1: PaletteOptions | undefined = {
  primary: {
    main: "#007bff",
  },
  secondary: {
    main: "#6c757d",
  },
};

const client2: PaletteOptions | undefined = {
  primary: {
    main: "#28a745",
  },
  secondary: {
    main: "#dc3545",
  },
};

export const clientatheme = createTheme({
  palette: client1,
  typography: {
    fontFamily: "Arial, sans-serif",
  },
  customSpacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
});

export const clientbtheme = createTheme({
  palette: client2,
  typography: {
    fontFamily: "Arial, sans-serif",
  },
  customSpacing: {
    small: "12px",
    medium: "20px",
    large: "32px",
  },
});

declare module "@mui/material/styles" {
  interface Theme {
    customSpacing: {
      small: string;
      medium: string;
      large: string;
    };
  }
  // Also extend ThemeOptions to allow these keys in createTheme
  interface ThemeOptions {
    customSpacing?: {
      small?: string;
      medium?: string;
      large?: string;
    };
  }
}
