import { ReactNode } from 'react';

import { MetaMaskIconSmall } from 'assets/icons';

import { useNetwork } from 'hooks';

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
  const network = useNetwork();
  console.log(network);

  return (
    <div className="pm-c-wallet-info">
      <Button variant="outline" color="base" size="sm">
        {wallets[0].balance}
        {wallets[0].currencyIcon}
      </Button>
      <Button
        variant="outline"
        color="base"
        size="sm"
        style={{
          padding: '0.4rem 1.4rem',
          paddingRight: '0.5rem',
          height: '100%'
        }}
      >
        {wallets[1].balance}
        {wallets[1].currencyIcon}

        {network.buyEc20Url ? (
          <Button
            color="primary"
            size="sm"
            style={{ padding: '0.5rem 1rem' }}
            onClick={() => window.open(network.buyEc20Url, '_blank')}
          >
            Buy $POLK
          </Button>
        ) : null}
      </Button>
      <a
        target="_blank"
        href={`${network.explorerURL}/address/${address}`}
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
