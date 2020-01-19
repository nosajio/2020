import { Link } from 'react-router-dom';
import React from 'react';
import styled, { css } from 'styled';

export interface FrameCssProps {
  marginBottom?: string;
  to?: string;
  withCursorPointer?: boolean;
}

const frameCss = css<FrameCssProps>`
  display: block;
  margin-bottom: ${({ marginBottom = '0' }) => marginBottom};
  ${({ withCursorPointer }) => (withCursorPointer ? 'cursor: pointer;' : '')}
`;

export const FrameLink = styled(({ marginBottom, ...rest }) =>
  React.createElement(Link, rest),
)`
  text-decoration: none;
  ${frameCss}
`;
export const Frame = styled.div`
  ${frameCss}
`;

export const When = styled.div`
  font-size: ${({ theme }) => theme.msrem(-1)};
  font-weight: ${({ theme }) => theme.fonts.alpha.weights.medium};
  color: ${({ theme }) => theme.colors.grey};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1em;
`;

export const Headline = styled.h1`
  font-size: ${({ theme }) => theme.msrem(2)};
  font-weight: ${({ theme }) => theme.fonts.alpha.weights.medium};
  color: white;

  ${({ theme: { devices, ...theme } }) => devices.notebook`
    font-size:  ${theme.msrem(4)};
  `}
`;
