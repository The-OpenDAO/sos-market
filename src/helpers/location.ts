import * as publicIp from 'public-ip';
import { getUserGeolocation } from 'services/Polkamarkets/user';

async function getUserPublicIp() {
  return publicIp.v4();
}

async function getUserCountry() {
  const userPublicIp = await getUserPublicIp();
  const { data } = await getUserGeolocation(userPublicIp);

  return data;
}

export { getUserPublicIp, getUserCountry };
