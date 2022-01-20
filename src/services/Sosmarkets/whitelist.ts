import api, { sosmarketApiUrl } from './api';

async function getWhitelistStatus(address: string) {
  const url = `${sosmarketApiUrl}/whitelist/${address}`;
  return api.get<any>(url);
}

// eslint-disable-next-line import/prefer-default-export
export { getWhitelistStatus };
