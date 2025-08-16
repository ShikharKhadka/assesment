import { ThemeProvider } from "@emotion/react";
import { TransactionProvider } from "./state/cart/cart_provider";
import { RouterProvider } from "react-router";
import { routerProvider } from "./router/router";
import { clientatheme, clientbtheme } from "./theme/theme";
import { useContext } from "react";
import { ThemeDataContext } from "./state/theme/theme_context";

export default function App() {
  const theme = useContext(ThemeDataContext);

  return (
    <ThemeProvider theme={(theme?.theme) == "client-b" ? clientbtheme : clientatheme}>
      <TransactionProvider>
        <RouterProvider router={routerProvider} />
      </TransactionProvider>
    </ThemeProvider >
  );
}