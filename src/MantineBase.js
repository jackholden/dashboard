import { useState } from "react";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import { NotificationsProvider } from "@mantine/notifications";
import App from "./App";

function MantineBase() {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState(preferredColorScheme);
  const toggleColorScheme = (value) => {
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
          primaryColor: "simpinv",
          fontFamily: "Poppins, sans-serif",
          headings: { fontFamily: "Poppins, sans-serif" },
          colors: {
            simpinv: [
              "#daffef",
              "#adffd6",
              "#7cffbc",
              "#4affa2",
              "#1aff89",
              "#00e66f",
              "#00d768", // 6
              "#00d768", // #00803d
              "#00d768", //#004e23
              "#001c06",
            ],
          },
        }}
        withGlobalStyles
      >
        <NotificationsProvider>
          <App />
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default MantineBase;
