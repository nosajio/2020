import { md_to_json } from '@nosaj/codex';
import React from 'react';
import * as F from './styled';

interface FrontProps {}

const Front: React.FC<FrontProps> = () => {
  console.log(md_to_json);
  return <F.Frame>nosaj.io blog</F.Frame>;
};

export default Front;
