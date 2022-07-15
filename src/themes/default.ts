import { extendTheme } from "@chakra-ui/react";

const fonts = {
  heading: `Rubik, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  body: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  mono: `"Space Mono", SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
};

export default extendTheme({ fonts });
