import { useEffect, useState } from 'react';

import { fetchAditionalData, login } from 'redux/ducks/bepro';
import store from 'redux/store';

import useCurrency from 'hooks/useCurrency';

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

async function getChainId(): Promise<string> {
  const chainId = await window.ethereum?.request({ method: 'eth_chainId' });

  return chainId;
}

function fetchUserData() {
  login(store.dispatch);
  fetchAditionalData(store.dispatch);
}

function useNetwork() {
  const { selectCurrency } = useCurrency();
  const [network, setNetwork] = useState<Network>(getDefaultNetwork());
  const defaultNetwork = getDefaultNetwork();
  const walletConnected = useAppSelector(state => state.bepro.isLoggedIn);

  useEffect(() => {
    async function onWalletChange() {
      if (walletConnected) {
        const chainId = await getChainId();

        const newNetwork = NETWORKS[chainId];
        setNetwork(newNetwork);
        selectCurrency(newNetwork.currency);
      }
    }

    onWalletChange();
  }, [walletConnected, setNetwork, selectCurrency]);

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
    function changeNetwork(chainId: string) {
      const newNetwork = NETWORKS[chainId];
      setNetwork(newNetwork);
      selectCurrency(newNetwork.currency);
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
  }, [defaultNetwork, selectCurrency]);

  return network || defaultNetwork;
}

export default useNetwork;
