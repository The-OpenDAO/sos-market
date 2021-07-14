import isUndefined from 'lodash/isUndefined';
import { UserGeolocation } from 'models/user';
import * as publicIp from 'public-ip';
import { getUserGeolocation } from 'services/Polkamarkets/user';

async function getUserPublicIp() {
  try {
    return publicIp.v4();
  } catch (err) {
    return undefined;
  }
}

const undefinedCountry: UserGeolocation = { country: '', countryCode: '' };

async function getUserCountry() {
  const userPublicIp = await getUserPublicIp();

  if (!isUndefined(userPublicIp)) {
    try {
      const response = await getUserGeolocation(userPublicIp);
      return response.data;
    } catch (err) {
      return undefinedCountry;
    }
  }
  return undefinedCountry;
}

export { getUserPublicIp, getUserCountry };
