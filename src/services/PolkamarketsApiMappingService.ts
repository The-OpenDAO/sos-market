// component => api
const MarketMapping = {
  id: 'id',
  section: 'category',
  subsection: 'subcategory',
  imageUrl: 'image_url',
  description: 'title',
  volume: 'volume',
  fractions: 'shares',
  liquidity: 'liquidity',
  expiration: 'expires_at'
};

// component => api
const MarketOutcomeMapping = {
  id: 'id',
  name: 'title',
  odd: 'price',
  pricePerFraction: 'price'
};

export default class PolkamarketsApiMappingService {
  public static mapMarket(apiMarket) {
    const market = PolkamarketsApiMappingService.mapApiObject(
      apiMarket,
      MarketMapping
    );

    // mapping outcomes
    market.options = apiMarket.outcomes.map(apiMarketOutcome => {
      return PolkamarketsApiMappingService.mapMarketOutcome(apiMarketOutcome);
    });

    return market;
  }

  public static mapMarketOutcome(apiMarketOutcome) {
    const marketOutcome = PolkamarketsApiMappingService.mapApiObject(
      apiMarketOutcome,
      MarketOutcomeMapping
    );

    // manually adding TODO options
    marketOutcome.oddChange = { type: Math.random() > 0.5 ? 'up' : 'down' };

    return marketOutcome;
  }

  private static mapApiObject(object, mapping): any {
    const result = {};

    Object.keys(mapping).forEach((key: string) => {
      const apiKey = mapping[key];

      if (object[apiKey] != null) {
        result[key] = object[apiKey];
      } else {
        result[key] = null;
      }
    });

    return result;
  }
}
