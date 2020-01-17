import React, { ReactNode } from 'react';
import * as PageEl from './styled';

interface PageProps {
  children: ReactNode;
  padded?: boolean;
}

const Page: React.FC<PageProps> = ({ padded, children }) => {
  return (
    <PageEl.Frame hasPaddingBottom={padded} hasPaddingTop={padded}>
      {children}
    </PageEl.Frame>
  );
};

export default Page;
