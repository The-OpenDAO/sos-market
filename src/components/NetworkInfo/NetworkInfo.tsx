import Text from '../Text';

const networks = {
  main: 'Ethereum Mainnet',
  ropsten: 'Ropsten Test Network',
  kovan: 'Kovan Test Network',
  rinkeby: 'Rinkeby Test Network',
  goerli: 'Goerli Test Network'
};

type Network = 'main' | 'ropsten' | 'kovan' | 'rinkeby' | 'goerli';

type NetworkInfoProps = {
  network: Network;
};

function NetworkInfo({ network }: NetworkInfoProps) {
  return (
    <div className={`pm-c-network-info--${network}`}>
      <span className="pm-c-network-info__dot" />
      <Text scale="caption" fontWeight="bold" color="light-gray">
        {networks[network]}
      </Text>
    </div>
  );
}

NetworkInfo.displayName = 'NetworkInfo';

export default NetworkInfo;
