import React from 'react';

import { MetaMaskIconSmall } from 'assets/icons';

import { Button } from '../Button';
import Text from '../Text';

type WalletInfoProps = {
  balance: number;
  currencyIcon: React.ReactNode;
  address: string;
};

function WalletInfo({ balance, currencyIcon, address }: WalletInfoProps) {
  return (
    <div className="pm-c-wallet-info">
      <Button color="default" aria-label="Balance">
        <Text as="span" scale="caption" fontWeight="bold" color="lighter-gray">
          {balance.toFixed(4)}
        </Text>
        {currencyIcon}
      </Button>
      <a
        target="_blank"
        href={`https://etherscan.io/address/${address}`}
        rel="noreferrer"
      >
        <Button color="default" aria-label="Address">
          <MetaMaskIconSmall />
          <Text
            as="span"
            scale="caption"
            fontWeight="bold"
            color="lighter-gray"
          >
            {`${address.substring(0, 4)}...${address.substring(
              address.length - 4
            )}`}
          </Text>
        </Button>
      </a>
    </div>
  );
}

WalletInfo.displayName = 'WalletInfo';

export default WalletInfo;
