import { MantineProvider, Text, Button, Stack } from "@mantine/core";
import { About } from "./components/about";
import { Header } from "./components/header";
import { links } from "./components/header/links";
import { Home } from "./components/home";
import { theme } from "./theme";

export default function App() {
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <Header links={links} />
      <Home />
      <About />
    </MantineProvider>
  );
}
