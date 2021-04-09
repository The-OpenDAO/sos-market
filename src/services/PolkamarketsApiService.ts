export default class PolkarmarketsApiService {
  public apiUrl: string = process.env.REACT_APP_POLKAMARKETS_API_URL!;

  public async getMarkets(): Promise<any[]> {
    const url = `${this.apiUrl}/markets`;
    const response = await fetch(url);

    if (!response.ok) {
      // TODO: error handling
      return [];
    }

    return response.json();
  }

  public async getMarket(marketId: string): Promise<any[]> {
    const url = `${this.apiUrl}/markets/${marketId}`;
    const response = await fetch(url);

    if (!response.ok) {
      // TODO: error handling
      return [];
    }

    return response.json();
  }

  // eslint-disable-next-line
  public async getPortfolio(address: string): Promise<any[]> {
    // TODO
    return [];
  }
}
