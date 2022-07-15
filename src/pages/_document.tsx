import { Head, Html, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

import theme from "@/themes/default";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik&display=optional"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
