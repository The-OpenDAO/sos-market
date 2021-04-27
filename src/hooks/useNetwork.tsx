import { useEffect, useState } from 'react';

import useAppSelector from './useAppSelector';

declare global {
  interface Window {
    ethereum: any;
  }
}
export interface Network {
  id: string;
  name: string;
  key: string;
}

export const ethereumNetworks = {
  '0x1': { id: '1', name: 'Ethereum Mainnet', key: 'mainnet' },
  '0x3': { id: '3', name: 'Ropsten Testnet', key: 'ropsten' },
  '0x4': { id: '4', name: 'Rinkeby Testnet', key: 'rinkeby' },
  '0x5': { id: '5', name: 'Goerli Testnet', key: 'goerli' },
  '0x2a': { id: '42', name: 'Kovan Testnet', key: 'kovan' },
  '0x501': { id: '1281', name: 'Moonbase Local', key: 'moonbase-local' },
  '0x507': { id: '1287', name: 'Moonbase Alpha', key: 'moonbase-alpha' }
};

function useNetwork() {
  const [network, setNetwork] = useState<undefined | Network>(undefined);

  const walletConnected = useAppSelector(state => state.bepro.isLoggedIn);

  function checkNetworkObserver() {
    window.ethereum.on('chainChanged', chainId => {
      setNetwork(ethereumNetworks[chainId]);
    });
  }

  async function getChainId() {
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });

    setNetwork(ethereumNetworks[chainId]);
  }

  async function checkNetwork() {
    if (walletConnected) {
      await getChainId();
    }
  }

  useEffect(() => {
    checkNetwork();
  }, [walletConnected, setNetwork]);

  useEffect(() => {
    checkNetworkObserver();
  }, []);

  return network;
}

export default useNetwork;
