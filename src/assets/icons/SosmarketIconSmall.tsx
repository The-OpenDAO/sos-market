import { memo } from 'react';
import Sosmarket from './svgs/sosmarket.svg';

function SosmarketIconSmall() {
  return <img src={Sosmarket} width={16} height={16} alt="sosMarket" />;
}

export default memo(SosmarketIconSmall);
