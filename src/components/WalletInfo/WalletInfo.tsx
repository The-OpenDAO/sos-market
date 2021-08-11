import { ReactNode } from 'react';

import { MetaMaskIconSmall } from 'assets/icons';

import { Button } from '../Button';

type Wallet = {
  id: string;
  balance: number | string;
  currencyIcon: ReactNode;
};

type WalletInfoProps = {
  wallets: Wallet[];
  address: string;
};

function WalletInfo({ wallets, address }: WalletInfoProps) {
  return (
    <div className="pm-c-wallet-info">
      {wallets.map(wallet => (
        <Button
          key={wallet.id}
          variant="outline"
          color="default"
          size="sm"
          noHover
          aria-label="ETH Balance"
        >
          {wallet.balance}
          {wallet.currencyIcon}
        </Button>
      ))}
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
