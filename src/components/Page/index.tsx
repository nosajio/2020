import React, { ReactNode } from 'react';
import * as PageEl from './styled';

interface PageProps {
  children: ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return <PageEl.Frame>{children}</PageEl.Frame>;
};

export default Page;
