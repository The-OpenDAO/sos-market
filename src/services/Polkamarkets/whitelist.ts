import api, { polkamarketsApiUrl } from './api';

async function getWhitelistStatus(address: string) {
  const url = `${polkamarketsApiUrl}/whitelist/${address}`;
  return api.get<any>(url);
}

// eslint-disable-next-line import/prefer-default-export
export { getWhitelistStatus };
