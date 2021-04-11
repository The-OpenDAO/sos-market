import * as beprojs from 'bepro-js';

export default class BeproService {
  // bepro app
  public bepro: any;

  // smart contract bepro instance
  public contract: any;

  // indicates if user has already done a successful metamask login
  public loggedIn: boolean = false;

  // user eth address
  public address: string = '';

  constructor() {
    this.bepro = new beprojs.Application({ mainnet: false });
    this.bepro.start();
    // fetching contract
    this.getContract();
  }

  public getContract() {
    this.contract = this.bepro.getPredictionMarketContract({
      contractAddress: process.env.REACT_APP_CONTRACT_ADDRESS
    });
  }

  // returns wether wallet is connected to service or not
  public async isLoggedIn(): Promise<boolean> {
    return this.bepro.isLoggedIn();
  }

  public async login() {
    if (this.loggedIn) return true;

    try {
      this.loggedIn = await this.bepro.login();
      // successful login
      if (this.loggedIn) {
        this.address = await this.getAddress();
        // TODO: set this in bepro
        this.bepro.web3.eth.defaultAccount = this.address;
        // re-fetching contract
        this.getContract();
      }
    } catch (e) {
      // should be non-blocking
      return false;
    }

    return this.loggedIn;
  }

  public async buy(
    marketId: string | number,
    outcomeId: string | number,
    ethAmount: number
  ) {
    // ensuring user has wallet connected
    await this.login();

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
    // ensuring user has wallet connected
    await this.login();

    const response = await this.contract.sell({
      marketId,
      outcomeId,
      shares
    });

    return response;
  }

  public async getAddress(): Promise<string> {
    if (this.address) return this.address;

    return this.bepro.getAddress() || '';
  }

  public async getBalance(): Promise<number> {
    if (!this.address) return 0;

    // returns user balance in ETH
    const balance = await this.bepro.getETHBalance();

    return parseFloat(balance) || 0;
  }
}
