import devices from "./devices";

const syntheseFont = {
  family: "synthese, sans-serif",
  weights: {
    bold: 700,
    regular: 400
  }
};

const theme = {
  colors: {
    black: "#010101"
  },
  fonts: {
    alpha: syntheseFont
  },
  devices,
  msrem: (f: number): string => `${Math.pow(1.3, f)}rem`
};

export type Theme = typeof theme;

export default theme;
