import styled from 'styled';

const maxContentWidth = 870;

export const Frame = styled.main`
  width: 100%;
  max-width: ${maxContentWidth}px;
  margin: 0 auto;
  padding: 0 1rem;

  @media screen and (min-width: calc(${maxContentWidth}px - 1rem)) {
    padding: 0;
  }
`;
