import React, { ReactNode } from 'react';
import * as ContentEl from './styled';

interface ContentProps {
  children: ReactNode;
  className?: string;
}

const Content: React.FC<ContentProps> = ({ className, children }) => {
  return <ContentEl.Frame className={className}>{children}</ContentEl.Frame>;
};

export default Content;
