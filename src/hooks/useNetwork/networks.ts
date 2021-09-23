export type Network = {
  id: string;
  name: string;
  key: string;
  currency: string;
};

export const { REACT_APP_NETWORK_ID } = process.env;

const NETWORKS: {
  [key: string]: Network;
} = {
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

export default NETWORKS;
