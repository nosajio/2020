import React, { ReactType } from 'react';
import * as PostHeadlineEl from './styled';

interface PostHeadlineProps {
  marginBottom?: string;
  to?: string;
  title: string;
  date: string;
  onHover?: () => void;
}

const PostHeadline: React.FC<PostHeadlineProps> = ({
  marginBottom,
  title,
  date,
  to,
  onHover,
}) => {
  const FrameEl: ReactType = to
    ? PostHeadlineEl.FrameLink
    : PostHeadlineEl.Frame;
  const frameProps: PostHeadlineEl.FrameCssProps = { marginBottom };

  if (to) {
    frameProps.to = to;
  }

  return (
    <FrameEl {...frameProps} onMouseOver={onHover}>
      <PostHeadlineEl.When>{date}</PostHeadlineEl.When>
      <PostHeadlineEl.Headline>{title}</PostHeadlineEl.Headline>
    </FrameEl>
  );
};

export default PostHeadline;
