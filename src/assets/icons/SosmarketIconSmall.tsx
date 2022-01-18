import { memo } from 'react';

import Sosmarket from './svgs/sos-logo.png';

function SosmarketIconSmall() {
  return <img src={Sosmarket} width={16} height={16} alt="sosMarket" />;
}

export default memo(SosmarketIconSmall);
