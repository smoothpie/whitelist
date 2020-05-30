export default {
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#07c",
    secondary: "#f3f",
    thirdly: "#e61",
    modes: {
      dark: {
        text: "#fff",
        background: "#000",
        primary: "#0cf",
        secondary: "#04f",
        thirdly: "#f35"
      }
    }
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace"
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: ["767px", "1279px", "1440px"],
  buttons: {
    primary: {
      color: "white",
      bg: "thirdly"
    },
    secondary: {
      color: "black",
      bg: "secondary"
    }
  },
  body: {
    m: 0,
    p: 0
  },
  // for mdx
  styles: {
    p: {
      fontSize: 32,
      fontFamily: "heading",
      fontWeight: "heading",
      color: "primary",
      mt: 4,
      mb: 2
    }
  }
};
