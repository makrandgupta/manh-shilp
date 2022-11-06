import { MantineProvider } from "@mantine/core";
import { About } from "./components/about";
import { ContactUs } from "./components/contact";
import { Header } from "./components/header";
import { links } from "./components/header/links";
import { Home } from "./components/home";
import { Services } from "./components/services";
import { theme } from "./theme";

export default function App() {
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <Header links={links} />
      <Home />
      <About />
      <Services />
      <ContactUs />
    </MantineProvider>
  );
}
