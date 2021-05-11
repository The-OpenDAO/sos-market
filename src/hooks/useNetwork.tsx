import { useEffect, useState } from 'react';

import { fetchAditionalData, login } from 'redux/ducks/bepro';
import store from 'redux/store';

import useAppSelector from './useAppSelector';

declare global {
  interface Window {
    ethereum: any;
  }
}

type Network = {
  id: string;
  name: string;
  key: string;
  currency: string;
};

const ethereumNetworks = {
  '0x1': { id: '1', name: 'Ethereum Mainnet', key: 'mainnet', currency: 'ETH' },
  '0x3': { id: '3', name: 'Ropsten Testnet', key: 'ropsten', currency: 'ETH' },
  '0x4': { id: '4', name: 'Rinkeby Testnet', key: 'rinkeby', currency: 'ETH' },
  '0x5': { id: '5', name: 'Goerli Testnet', key: 'goerli', currency: 'ETH' },
  '0x2a': { id: '42', name: 'Kovan Testnet', key: 'kovan', currency: 'ETH' },
  '0x501': {
    id: '1281',
    name: 'Moonbase Local',
    key: 'moonbase-local',
    currency: 'DEV'
  },
  '0x507': {
    id: '1287',
    name: 'Moonbase Alpha',
    key: 'moonbase-alpha',
    currency: 'DEV'
  },
  '0x539': { id: '1337', name: 'Local Testnet', key: 'local', currency: 'ETH' }
};

export const defaultNetwork = (): Network => {
  const networkId = Number(process.env.REACT_APP_NETWORK_ID) || 42;
  const networkIdHex = `0x${networkId.toString(16)}`;

  return ethereumNetworks[networkIdHex];
};

function useNetwork() {
  const [network, setNetwork] = useState<undefined | Network>(undefined);

  const walletConnected = useAppSelector(state => state.bepro.isLoggedIn);

  function accountObserver() {
    window.ethereum?.on('accountsChanged', async () => {
      const chainId = await window.ethereum?.request({ method: 'eth_chainId' });

      if (defaultNetwork() === ethereumNetworks[chainId]) {
        login(store.dispatch);
        fetchAditionalData(store.dispatch);
      }
    });
  }

  function checkNetworkObserver() {
    window.ethereum?.on('chainChanged', chainId => {
      setNetwork(ethereumNetworks[chainId]);

      if (defaultNetwork() === ethereumNetworks[chainId]) {
        login(store.dispatch);
        fetchAditionalData(store.dispatch);
      }
    });
  }

  async function getChainId() {
    const chainId = await window.ethereum?.request({ method: 'eth_chainId' });

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

  useEffect(() => {
    accountObserver();
  }, []);

  return network;
}

export default useNetwork;
