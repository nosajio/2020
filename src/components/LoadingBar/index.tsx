import React from 'react';
import * as LoadingBarEl from './styled';

interface LaodingBarProps {}

const LoadingBar: React.FC<LaodingBarProps> = () => {
  return <LoadingBarEl.Frame />;
};

export default LoadingBar;
