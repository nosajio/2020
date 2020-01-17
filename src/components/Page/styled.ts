import styled from 'styled';

interface FrameProps {
  hasPaddingTop?: boolean;
  hasPaddingBottom?: boolean;
}

export const Frame = styled.div<FrameProps>`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.blackish};
  color: white;
  padding-bottom: ${({ theme, hasPaddingBottom }) =>
    hasPaddingBottom ? theme.msrem(2) : '0'};
  padding-top: ${({ theme, hasPaddingTop }) =>
    hasPaddingTop ? theme.msrem(7) : '0'};

  a {
    color: ${({ theme }) => theme.colors.red};
  }
`;
