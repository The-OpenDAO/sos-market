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

export function getDefaultNetworkHex(): string {
  const networkId = Number(REACT_APP_NETWORK_ID) || 42;
  const networkIdHex = `0x${networkId.toString(16)}`;

  return networkIdHex;
}

export function getDefaultNetwork(): Network {
  return NETWORKS[getDefaultNetworkHex()];
}

const defaultNetwork = getDefaultNetwork();

async function getChainId(): Promise<string> {
  const chainId = await window.ethereum?.request({ method: 'eth_chainId' });

  return chainId;
}

function fetchUserData() {
  login(store.dispatch);
  fetchAditionalData(store.dispatch);
}

function useNetwork() {
  const [network, setNetwork] = useState<Network>(defaultNetwork);
  const walletConnected = useAppSelector(state => state.bepro.isLoggedIn);

  useEffect(() => {
    async function onWalletChange() {
      if (walletConnected) {
        const chainId = await getChainId();

        setNetwork(NETWORKS[chainId] || NETWORKS['0x270f']);
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
  }, []);

  useEffect(() => {
    function changeNetwork(chainId: string) {
      setNetwork(NETWORKS[chainId] || NETWORKS['0x270f']);
    }

    function onChainChange() {
      window.ethereum?.on('chainChanged', chainId => {
        changeNetwork(chainId);

        if (NETWORKS[chainId] === defaultNetwork) {
          fetchUserData();
        }
      });
    }

    onChainChange();
  }, []);

  return network || defaultNetwork;
}

export default useNetwork;
