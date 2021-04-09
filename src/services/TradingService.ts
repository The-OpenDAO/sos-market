import * as beprojs from 'bepro-js';

export default class TradingService {
  public beproApp: any;

  public contract: any;

  constructor() {
    this.beproApp = new beprojs.Application({ mainnet: false });
    this.beproApp.start();
    this.beproApp.login();
    this.contract = this.beproApp.getPredictionMarketContract({
      contractAddress: process.env.REACT_APP_CONTRACT_ADDRESS
    });
  }

  public async buy(
    marketId: string | number,
    outcomeId: string | number,
    ethAmount: number
  ) {
    const response = await this.contract.buy({
      marketId,
      outcomeId,
      ethAmount
    });

    return response;
  }

  public async sell(
    marketId: string | number,
    outcomeId: string | number,
    shares: number
  ) {
    const response = await this.contract.sell({
      marketId,
      outcomeId,
      shares
    });

    return response;
  }

  public async getBalance(): Promise<number> {
    // returns user balance in ETH
    const balance = await this.beproApp.getETHBalance();

    return balance || 0;
  }
}
