import { MantineProvider, Text, Button, Stack } from "@mantine/core";
import { Header } from "./components/header";
import { links } from "./components/header/links";
import { theme } from "./theme";

export default function App() {
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <Header links={links} />
      <Stack align="center" mt={50}>
        <Text size="xl" weight={500}>
          Welcome to Mantine!
        </Text>
        <Button>Click the button</Button>
      </Stack>
    </MantineProvider>
  );
}
