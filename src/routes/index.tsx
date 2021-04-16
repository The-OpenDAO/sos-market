import { useAppSelector } from 'hooks';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

export default function Routes() {
  const walletConnected = useAppSelector(state => state.bepro.isLoggedIn);

  return walletConnected ? <AppRoutes /> : <AuthRoutes />;
}
