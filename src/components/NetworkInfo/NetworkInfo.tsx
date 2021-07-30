import Text from '../Text';

function NetworkInfo({ name, slug }) {
  return (
    <div className={`pm-c-network-info--${slug}`}>
      <span className="pm-c-network-info__dot" />
      <Text
        scale="caption"
        fontWeight="bold"
        className="pm-c-network-info__title"
      >
        {name}
      </Text>
    </div>
  );
}

export default NetworkInfo;
