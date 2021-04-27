import { useEffect, useState } from 'react';

import useAppSelector from './useAppSelector';

declare global {
  interface Window {
    ethereum: any;
  }
}

type Network = {
  id: string;
  name: string;
};

const ethereumNetworks = {
  '0x1': { id: '1', name: 'Ethereum Main Network (Mainnet)' },
  '0x3': { id: '3', name: 'Ropsten Test Network' },
  '0x4': { id: '4', name: 'Rinkeby Test Network' },
  '0x5': { id: '5', name: 'Goerli Test Network' },
  '0x2a': { id: '42', name: 'Kovan Test Network' }
};

function useNetwork() {
  const [network, setNetwork] = useState<undefined | Network>(undefined);

  const walletConnected = useAppSelector(state => state.bepro.isLoggedIn);

  async function getChainId() {
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });

    setNetwork(ethereumNetworks[chainId]);
  }

  useEffect(() => {
    if (walletConnected) {
      getChainId();

      window.ethereum.on('chainChanged', chainId => {
        setNetwork(ethereumNetworks[chainId]);
      });
    }
  }, [walletConnected, setNetwork]);

  return { network };
}

export default useNetwork;
