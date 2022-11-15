import { MantineProvider } from "@mantine/core";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Header } from "./components/header";
import { useScrollableLinks } from "./components/header/links";
import { Home } from "./components/home";
import { Services } from "./components/services";
import { theme } from "./theme";

export default function App() {
  const scrollableLinks = useScrollableLinks();

  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <Header links={scrollableLinks} />
      <Home scrollRef={scrollableLinks["Home"].targetRef} />
      <About scrollRef={scrollableLinks["About"].targetRef} />
      <Services scrollRef={scrollableLinks["Services"].targetRef} />
      <Contact scrollRef={scrollableLinks["Contact"].targetRef} />
    </MantineProvider>
  );
}
