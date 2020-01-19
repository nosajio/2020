import React, { ReactType, SyntheticEvent } from 'react';
import * as PostHeadlineEl from './styled';

interface PostHeadlineProps {
  marginBottom?: string;
  to?: string;
  title: string;
  date: string;
  onHover?: () => void;
  onClick?: (event: SyntheticEvent) => void;
}

const PostHeadline: React.FC<PostHeadlineProps> = ({
  marginBottom,
  title,
  date,
  to,
  onHover,
  onClick,
}) => {
  const FrameEl: ReactType = to
    ? PostHeadlineEl.FrameLink
    : PostHeadlineEl.Frame;
  const frameProps: PostHeadlineEl.FrameCssProps = {
    marginBottom,
    withCursorPointer: typeof onClick === 'function',
  };

  if (to) {
    frameProps.to = to;
  }

  return (
    <FrameEl {...frameProps} onMouseOver={onHover} onClick={onClick}>
      <PostHeadlineEl.When>{date}</PostHeadlineEl.When>
      <PostHeadlineEl.Headline>{title}</PostHeadlineEl.Headline>
    </FrameEl>
  );
};

export default PostHeadline;
