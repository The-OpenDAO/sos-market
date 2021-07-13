/* eslint-disable import/prefer-default-export */
import { UserGeolocation } from 'models/user';

import api from './api';

async function getUserGeolocation(ipAddress: string) {
  const url = `http://ip-api.com/json/${ipAddress}`;
  return api.get<UserGeolocation>(url, {
    params: {
      fields: 'country,countryCode'
    }
  });
}

export { getUserGeolocation };
