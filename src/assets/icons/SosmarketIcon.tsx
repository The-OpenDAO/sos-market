import { memo } from 'react';

import Sosmarket from './svgs/sosmarket.svg';

function SosmarketIcon() {
  return <img src={Sosmarket} width={36} height={36} alt="sosMarket" />;
}

export default memo(SosmarketIcon);
