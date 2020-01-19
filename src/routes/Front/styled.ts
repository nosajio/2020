import Content from 'components/Content';
import styled from '../../styled';

export const Frame = styled(Content)``;

export const PostsList = styled.ul``;
export const PostFrame = styled.li<{
  withTransparency?: boolean;
  isHidden?: boolean;
}>`
  transition: 400ms opacity ease;
  opacity: ${({ isHidden, withTransparency }) =>
    isHidden ? '0' : (withTransparency && '0.2') || '1'};
`;
