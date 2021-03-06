import Content from 'components/Content';
import { keyframes } from 'styled-components';
import styled, { css } from '../../styled';

const expandedMedia = css`
  ${({ theme }) => theme.devices.desktop`
  position: relative;
  left: -35px;
  right: -35px;
  width: calc(100% + 70px);
  margin: ${theme.msrem(5)} 0;
  `}
`;

export const Frame = styled(Content)``;

const bodyAnimateIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
`;

export const Body = styled.article<{ withAnimation?: boolean }>`
  ${({ theme, withAnimation }) =>
    !withAnimation
      ? ''
      : css`
          animation: ${bodyAnimateIn} 500ms 1 both ${theme.easing.easeOutExpo};
        `}

  font: ${({
    theme: {
      fonts: { beta },
    },
  }) => `${beta.weights.light} 1rem ${beta.family}`};

  > *:first-child {
    margin-top: 0;
  }

  /* * * * * * * * * * * Media */
  > div {
    width: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  /* * * * * * * * * * * Special media classes */

  .caption, cite {
    display: block;
    width: 100%;
    text-align: center;
    margin-top: ${({ theme }) => theme.msrem(1)};
    font: ${({
      theme: {
        msrem,
        fonts: { alpha },
      },
    }) => `${alpha.weights.regular} ${msrem(-1)} ${alpha.family}`};
  }

  /* Images */
  .image {
    ${expandedMedia}
  }

  /* Videos */
  .video {
    ${expandedMedia}
    > iframe {
      width: 100%;
    }
  }
  > div > iframe { width: 100% }

  /* * * * * * * * * * * Headings */
  h2,
  h3,
  h4,
  h5 {
    display: block;
    width: 100%;
    margin: ${({ theme }) => theme.ms(2)}em 0 ${({ theme }) =>
  theme.msrem(1)} 0;
    font-family: ${({ theme }) => theme.fonts.alpha.family};
    font-weight: ${({ theme }) => theme.fonts.alpha.weights.medium};
  }

  h2 {
    font-size: ${({ theme }) => theme.msrem(2)};
  }

  h3,
  h4 {
    font-size: ${({ theme }) => theme.msrem(1)};
  }

  h5 {
    font-size: 1rem;
  }

  /* * * * * * * * * * * Paragraphs */
  p {
    margin: ${({ theme }) => theme.msrem(1)} 0;
    line-height: 1.5;
  }

  /* * * * * * * * * * * Blockquotes */
  blockquote {
    padding: ${({ theme }) => theme.msrem(2)};
    background: ${({ theme }) => theme.colors.darkBlackish};
  }

  blockquote > p:first-child {
    margin-top: 0;
  }
  blockquote > p:last-child {
    margin-bottom: 0;
  }

  /* * * * * * * * * * * Misc elements */
  hr {
    display: block;
    border: none;
    width: 100%;
    max-width: 8.3vw;
    height: 5px;
    margin: ${({ theme }) => theme.msrem(5)} auto;
    /* background: ${({ theme: { colors } }) => colors.darkBlackish}; */
    background: ${({
      theme: {
        colors: { red, blackish },
      },
    }) => `radial-gradient(${red} 30%, ${blackish} 70%)`};
  }

  /* * * * * * * * * * * Lists */
  ul { list-style: disc; }

  ol { list-style-type: upper-roman; }

  ul, ol { padding-left: 1rem; }

  ul, ol {
    > li + li {
      margin-top: ${({ theme }) => theme.msrem(-3)};
    }
  }

`;
