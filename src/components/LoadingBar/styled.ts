import styled from 'styled';
import { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  from {
    background-position: 200%;
  }
`;

export const Frame = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme: { stack } }) => stack.loading};
  width: 100%;
  height: 4px;
  animation: ${loadingAnimation} 700ms infinite both linear;
  background: repeat-x
    ${({
      theme: {
        colors: { red, blue },
      },
    }) => `linear-gradient(90deg, ${red} 0%, ${blue} 50%, ${red} 100%)`}
    0 0 / 200% 100%;
`;
