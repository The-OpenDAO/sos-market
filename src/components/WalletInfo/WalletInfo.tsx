import React from 'react';

import { MetaMaskIconSmall } from 'assets/icons';

import { Button } from '../Button';

type WalletInfoProps = {
  balance: number;
  currencyIcon: React.ReactNode;
  address: string;
};

function WalletInfo({ balance, currencyIcon, address }: WalletInfoProps) {
  return (
    <div className="pm-c-wallet-info">
      <Button
        variant="outline"
        color="default"
        size="sm"
        noHover
        aria-label="Balance"
      >
        {balance.toFixed(4)}
        {currencyIcon}
      </Button>
      <a
        target="_blank"
        href={`https://kovan.etherscan.io/address/${address}`}
        rel="noreferrer"
      >
        <Button
          variant="outline"
          color="default"
          size="sm"
          noHover
          aria-label="Address"
        >
          <MetaMaskIconSmall />

          {`${address.substring(0, 4)}...${address.substring(
            address.length - 4
          )}`}
        </Button>
      </a>
    </div>
  );
}

export default WalletInfo;
