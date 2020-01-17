import Content from 'components/Content';
import styled from '../../styled';

export const Frame = styled(Content)``;

export const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.msrem(6)};
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
  font-size: ${({ theme }) => theme.msrem(4)};
  font-weight: ${({ theme }) => theme.fonts.alpha.weights.medium};
`;

export const Body = styled.article`
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

  .caption {
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
  }

  /* Videos */
  .video {
    > iframe {
      width: 100%;
    }
  }

  /* * * * * * * * * * * Headings */
  h2,
  h3,
  h4,
  h5 {
    display: block;
    width: 100%;
    margin: ${({ theme }) => theme.ms(2)}em 0 ${({ theme }) => theme.msrem(1)} 0;
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
    background: ${({ theme }) => theme.colors.blue};
  }

  blockquote > p:first-child {
    margin-top: 0;
  }
  blockquote > p:last-child {
    margin-bottom: 0;
  }
`;