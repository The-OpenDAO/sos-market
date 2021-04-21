import { isUndefined } from 'lodash';

import { useAppSelector, useLocalStorage } from 'hooks';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

export default function Routes() {
  const walletConnected = useAppSelector(state => state.bepro.isLoggedIn);
  const [walletAddress] = useLocalStorage('walletAddress', undefined);

  return walletConnected || !isUndefined(walletAddress) ? (
    <AppRoutes />
  ) : (
    <AuthRoutes />
  );
}
