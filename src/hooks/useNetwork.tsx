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
  explorerURL: string;
};

const networks: {
  [key: string]: Network;
} = {
  '0x1': {
    id: '1',
    name: 'Ethereum Mainnet',
    key: 'mainnet',
    currency: 'ETH',
    explorerURL: 'https://etherscan.io'
  },
  '0x3': {
    id: '3',
    name: 'Ropsten Testnet',
    key: 'ropsten',
    currency: 'ETH',
    explorerURL: 'https://ropsten.etherscan.io'
  },
  '0x4': {
    id: '4',
    name: 'Rinkeby Testnet',
    key: 'rinkeby',
    currency: 'ETH',
    explorerURL: 'https://rinkeby.etherscan.io'
  },
  '0x5': {
    id: '5',
    name: 'Goerli Testnet',
    key: 'goerli',
    currency: 'ETH',
    explorerURL: 'https://goerli.etherscan.io'
  },
  '0x2a': {
    id: '42',
    name: 'Kovan Testnet',
    key: 'kovan',
    currency: 'ETH',
    explorerURL: 'https://kovan.etherscan.io'
  },
  '0x501': {
    id: '1281',
    name: 'Moonbase Local',
    key: 'moonbase-local',
    currency: 'DEV',
    explorerURL: 'https://etherscan.io'
  },
  '0x507': {
    id: '1287',
    name: 'Moonbase Alpha',
    key: 'moonbase-alpha',
    currency: 'DEV',
    explorerURL: 'https://etherscan.io'
  },
  '0x539': {
    id: '1337',
    name: 'Local Testnet',
    key: 'local',
    currency: 'ETH',
    explorerURL: 'https://etherscan.io'
  }
};

export const defaultNetwork = (): Network => {
  const networkId = Number(process.env.REACT_APP_NETWORK_ID) || 42;
  const networkIdHex = `0x${networkId.toString(16)}`;

  return networks[networkIdHex];
};

function useNetwork() {
  const [network, setNetwork] = useState<undefined | Network>(undefined);

  const walletConnected = useAppSelector(state => state.bepro.isLoggedIn);

  function accountObserver() {
    window.ethereum?.on('accountsChanged', async () => {
      const chainId = await window.ethereum?.request({ method: 'eth_chainId' });

      if (defaultNetwork() === networks[chainId]) {
        login(store.dispatch);
        fetchAditionalData(store.dispatch);
      }
    });
  }

  function checkNetworkObserver() {
    window.ethereum?.on('chainChanged', chainId => {
      setNetwork(networks[chainId]);

      if (defaultNetwork() === networks[chainId]) {
        login(store.dispatch);
        fetchAditionalData(store.dispatch);
      }
    });
  }

  async function getChainId() {
    const chainId = await window.ethereum?.request({ method: 'eth_chainId' });

    setNetwork(networks[chainId]);
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
