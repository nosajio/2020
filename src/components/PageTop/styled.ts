import styled from 'styled';
import { Link } from 'react-router-dom';

export const Frame = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-flow: row-reverse nowrap;
  padding: ${({ theme: { msrem } }) => msrem(1)};
`;

export const LogoLink = styled(Link)``;

export const LogoSVG = styled.svg``;

export const MenuToggle = styled.div``;
