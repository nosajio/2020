import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  ${reset}

  *, *::before, *::after { box-sizing: border-box; }

  html {
    font-family: ${({ theme }) => theme.fonts.alpha.family};
    font-weight: ${({ theme }) => theme.fonts.alpha.weights.regular};
    font-size: 125% /* 20px */;
    color: white;
  }

  body {
    color: ${({ theme }) => theme.colors.black};
    background: white;
    line-height: 1.3;
  }

  a {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export default GlobalStyles;
