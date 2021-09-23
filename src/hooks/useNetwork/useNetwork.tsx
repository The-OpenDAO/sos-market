import { useEffect, useState } from 'react';

import { fetchAditionalData, login } from 'redux/ducks/bepro';
import store from 'redux/store';

import useAppSelector from '../useAppSelector';
import NETWORKS, { Network, REACT_APP_NETWORK_ID } from './networks';

declare global {
  interface Window {
    ethereum: any;
  }
}

export function getDefaultNetwork(): Network {
  const networkId = Number(REACT_APP_NETWORK_ID) || 42;
  const networkIdHex = `0x${networkId.toString(16)}`;

  return NETWORKS[networkIdHex];
}

async function getChainId(): Promise<string> {
  const chainId = await window.ethereum?.request({ method: 'eth_chainId' });

  return chainId;
}

function fetchUserData() {
  login(store.dispatch);
  fetchAditionalData(store.dispatch);
}

function useNetwork() {
  const [network, setNetwork] = useState<Network>(getDefaultNetwork());
  const defaultNetwork = getDefaultNetwork();
  const walletConnected = useAppSelector(state => state.bepro.isLoggedIn);

  useEffect(() => {
    async function onWalletChange() {
      if (walletConnected) {
        const chainId = await getChainId();

        setNetwork(NETWORKS[chainId]);
      }
    }

    onWalletChange();
  }, [walletConnected, setNetwork]);

  useEffect(() => {
    async function onAccountChange() {
      window.ethereum?.on('accountsChanged', async () => {
        const chainId = await getChainId();

        if (NETWORKS[chainId] === defaultNetwork) {
          fetchUserData();
        }
      });
    }

    onAccountChange();
  }, [defaultNetwork]);

  useEffect(() => {
    function onChainChange() {
      window.ethereum?.on('chainChanged', chainId => {
        setNetwork(NETWORKS[chainId]);

        if (NETWORKS[chainId] === defaultNetwork) {
          fetchUserData();
        }
      });
    }

    onChainChange();
  }, [defaultNetwork]);

  return network || defaultNetwork;
}

export default useNetwork;
