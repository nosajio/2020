import styled from 'styled';
import { Link } from 'react-router-dom';

export const Frame = styled.header`
  display: flex;
  flex-flow: row-reverse nowrap;
  padding: ${({ theme: { msrem } }) => msrem(1)};
`;

export const LogoLink = styled(Link)``;

export const LogoSVG = styled.svg``;

export const MenuToggle = styled.div``;
