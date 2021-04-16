import { fetchWallet } from 'redux/ducks/bepro';
import { BeproService } from 'services';

import { PolkamarketsIcon } from 'assets/icons';

import { Button, ModalNotification, Text } from 'components';

import { useAppDispatch } from 'hooks';

function PrivateBeta() {
  const dispatch = useAppDispatch();
  const beproService = new BeproService();

  const handleConnectWallet = async () => {
    await beproService.login();
    fetchWallet(dispatch);
  };

  return (
    <div className="pm-private-beta">
      <ModalNotification visible>
        <div className="pm-private-beta__card">
          <PolkamarketsIcon />
          <Text
            as="h5"
            scale="heading"
            fontWeight="bold"
            color="white"
            style={{ textAlign: 'center' }}
          >
            Polkamarkets is on Private Beta
          </Text>
          <Text
            as="p"
            scale="caption"
            fontWeight="medium"
            color="lighter-gray"
            style={{ textAlign: 'center', paddingBottom: '1rem' }}
          >
            We’re currently on a private beta. Only whitelisted addresses can
            use our platform. Connect your wallet and start predicting a better
            future.
          </Text>
          <Button color="primary" fullWidth onClick={handleConnectWallet}>
            Connect with Metamask
          </Button>
        </div>
      </ModalNotification>
    </div>
  );
}

PrivateBeta.displayName = 'PrivateBeta';

export default PrivateBeta;
