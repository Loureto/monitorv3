import { extendTheme } from "@chakra-ui/react";
import { SERVFAIL } from "dns";

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px", // maior > 24
  "2xl": "1536px", // maior > 32
  "3xl": "1920px", // maior > 36
  "4xl": "2500px", // maior > 40
  "5xl": "3000px", // maior > 48
};

const theme = extendTheme({
  colors: {
    yellow: {
      "100": "#FAF0CA",
      "500": "#FFD400",
    },
    blue: {
      "500": "#007DC4",
      "600": "#17479e",
    },
    gray: {
      "50": "#FFFFFF",
      "100": "#F5F5F5",
    },
    black: {
      "100": "#959595",
      "500": "#454545",
    },
  },
  styles: {
    global: {
      body: {
        bg: "#FFFFFF",
        fontFamily: "CircularXX",
      },
      input: {
        color: "#FFFFFF",
      },
    },
  },
  breakpoints,
});

export default theme;
