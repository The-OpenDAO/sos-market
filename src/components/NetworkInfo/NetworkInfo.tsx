import Text from '../Text';

function NetworkInfo({ name, slug }) {
  return (
    <div className={`pm-c-network-info--${slug}`}>
      <span className="pm-c-network-info__dot" />
      <Text scale="caption" fontWeight="bold" color="light-gray">
        {name}
      </Text>
    </div>
  );
}

NetworkInfo.displayName = 'NetworkInfo';

export default NetworkInfo;
