import styled from 'styled';

export const Frame = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.blackish};
  color: white;

  a {
    color: ${({ theme }) => theme.colors.red};
  }
`;
