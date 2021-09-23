export type Network = {
  id: string;
  name: string;
  key: string;
  currency: string;
  explorerURL: string;
};

export const { REACT_APP_NETWORK_ID } = process.env;

const NETWORKS: {
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
  '0x505': {
    id: '1285',
    name: 'Moonriver',
    key: 'moonriver',
    currency: 'MOVR',
    explorerURL: 'https://blockscout.moonriver.moonbeam.network'
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

export default NETWORKS;
