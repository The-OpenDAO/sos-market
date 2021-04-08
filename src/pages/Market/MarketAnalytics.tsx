import { Card, Grid, Text } from 'components';

type MarketAnalyticsProps = {
  liquidity: number;
  volume: number;
  expiration: string;
};

function MarketAnalytics({
  liquidity,
  volume,
  expiration
}: MarketAnalyticsProps) {
  return (
    <div className="market-analytics">
      <Grid fluid>
        <Grid.Row className="market-analytics__group">
          <Grid.Col className="market-analytics__item">
            <Card
              backgroundColor="gradient-yellow"
              title={
                <Text
                  className="market-analytics__item-title"
                  as="h2"
                  scale="tiny-uppercase"
                  fontWeight="bold"
                  color="white-50"
                >
                  Liquidity
                </Text>
              }
            >
              <Text
                className="market-analytics__item-value"
                as="p"
                scale="body"
                fontWeight="semibold"
                color="white"
              >
                {`${liquidity} DOT`}
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col className="market-analytics__item">
            <Card
              backgroundColor="gradient-blue"
              title={
                <Text
                  className="market-analytics__item-title"
                  as="h2"
                  scale="tiny-uppercase"
                  fontWeight="bold"
                  color="white-50"
                >
                  Volume
                </Text>
              }
            >
              <Text
                className="market-analytics__item-value"
                as="p"
                scale="body"
                fontWeight="semibold"
                color="white"
              >
                {`${volume} DOT`}
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col className="market-analytics__item">
            <Card
              backgroundColor="gradient-orange"
              title={
                <Text
                  className="market-analytics__item-title"
                  as="h2"
                  scale="tiny-uppercase"
                  fontWeight="bold"
                  color="white-50"
                >
                  Expiration
                </Text>
              }
            >
              <Text
                className="market-analytics__item-value"
                as="p"
                scale="body"
                fontWeight="semibold"
                color="white"
              >
                {expiration}
              </Text>
            </Card>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </div>
  );
}

MarketAnalytics.displayName = 'MarketAnalytics';

export default MarketAnalytics;
