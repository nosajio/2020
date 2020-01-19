import devices from './devices';

const merriweatherFont = {
  family: 'merriweather, sans-serif',
  weights: {
    light: 300,
    bold: 700,
    regular: 400,
  },
};

const rocFont = {
  family: 'roc-grotesk',
  weights: {
    regular: 400,
    medium: 500,
    bold: 600,
  },
};

const easing = {
  easeOutExpo: 'cubic-bezier(0.19, 1, 0.22, 1)',
};

const sizeScale = 1.3;

const theme = {
  stack: {
    loading: 15000,
  },
  colors: {
    black: '#010101',
    blackish: '#191A1D',
    darkBlackish: '#0F1012',
    white: '#fff',
    red: '#C8102E',
    blue: '#012169',
    grey: '#4E5361',
  },
  fonts: {
    alpha: rocFont,
    beta: merriweatherFont,
  },
  devices,
  easing,
  baseFontSize: 21,
  ms: (f: number): number => Math.pow(sizeScale, f),
  mspx: (f: number): number => theme.ms(f) * theme.baseFontSize,
  msrem: (f: number): string => `${theme.ms(f)}rem`,
};

export type Theme = typeof theme;

export default theme;
