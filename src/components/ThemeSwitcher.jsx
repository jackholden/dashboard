import { ActionIcon, useMantineColorScheme } from "@mantine/core";

function ThemeSwitcher() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <ActionIcon
      variant="outline"
      color={dark ? "yellow" : "blue"}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? "light" : "dark"}
    </ActionIcon>
  );
}

export default ThemeSwitcher;
