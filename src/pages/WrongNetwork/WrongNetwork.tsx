import { useState } from 'react';

import findKey from 'lodash/findKey';

import { Button, ModalNotification, Text } from 'components';

import { getDefaultNetwork } from 'hooks/useNetwork';
import NETWORKS from 'hooks/useNetwork/networks';

function WrongNetwork() {
  const [isAddingNetwork, setIsAddingNetwork] = useState(false);
  const defaultNetwork = getDefaultNetwork();

  async function handleAddNetwork() {
    setIsAddingNetwork(true);

    try {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [
            {
              chainId: findKey(NETWORKS, defaultNetwork)
            }
          ]
        });

        setIsAddingNetwork(false);
      } catch (error: any) {
        if (error.code === 4902) {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x505',
                chainName: 'Moonriver',
                nativeCurrency: {
                  name: 'MOVR',
                  symbol: 'MOVR',
                  decimals: 18
                },
                rpcUrls: ['https://rpc.moonriver.moonbeam.network'],
                blockExplorerUrls: [
                  'https://blockscout.moonriver.moonbeam.network/'
                ]
              }
            ]
          });
        }
        setIsAddingNetwork(false);
      }
    } catch (error: any) {
      setIsAddingNetwork(false);
    }
  }

  return (
    <div className="pm-wrong-network">
      <ModalNotification visible>
        <div className="pm-wrong-network__card">
          <Text
            as="h5"
            scale="heading"
            fontWeight="bold"
            color="white"
            style={{ textAlign: 'center' }}
          >
            Wrong Network
          </Text>
          <span className="spinner--primary" />
          <Text
            as="p"
            scale="body"
            fontWeight="medium"
            color="lighter-gray"
            style={{ textAlign: 'center', paddingBottom: '1rem' }}
          >
            Change your MetaMask to
            {` ${defaultNetwork.name}`}
          </Text>
          <Button
            className="pm-wrong-network__action-button"
            size="sm"
            onClick={handleAddNetwork}
            loading={isAddingNetwork}
          >
            Change Network
          </Button>
        </div>
      </ModalNotification>
    </div>
  );
}

WrongNetwork.displayName = 'WrongNetwork';

export default WrongNetwork;
