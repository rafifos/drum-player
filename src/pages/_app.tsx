import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";

import GlobalContext, { defaultValue } from "@/contexts/GlobalContext";
import theme from "@/themes/default";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalContext.Provider value={defaultValue}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </ChakraProvider>
  );
}

export default App;
