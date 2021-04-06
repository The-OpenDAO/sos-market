import Text from '../Text';

type PredictionCardFooterProps = {
  volume: number;
  expiration: string;
  liquidity: number;
};

function PredictionCardFooter({
  volume,
  expiration,
  liquidity
}: PredictionCardFooterProps) {
  return (
    <div className="prediction-card-footer">
      <div className="prediction-card-footer__stats">
        <Text as="span" scale="tiny-uppercase" fontWeight="semibold">
          {`Volume: `}
          <Text as="strong" scale="tiny-uppercase" fontWeight="semibold">
            {`${volume} DOT`}
          </Text>
        </Text>
        <Text as="span" scale="tiny-uppercase" fontWeight="semibold">
          {`Expiration: `}
          <Text as="strong" scale="tiny-uppercase" fontWeight="semibold">
            {expiration}
          </Text>
        </Text>
        <Text as="span" scale="tiny-uppercase" fontWeight="semibold">
          {`Liquidity: `}
          <Text as="strong" scale="tiny-uppercase" fontWeight="semibold">
            {`${liquidity} DOT`}
          </Text>
        </Text>
      </div>
    </div>
  );
}

PredictionCardFooter.displayName = 'PredictionCardFooter';

export default PredictionCardFooter;
