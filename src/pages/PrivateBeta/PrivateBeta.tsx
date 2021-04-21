import React, { useState } from 'react';

import { fetchWallet } from 'redux/ducks/bepro';
import { BeproService } from 'services';

import { ArrowRightIcon, PolkamarketsIcon } from 'assets/icons';

import { Button, ModalNotification, Text } from 'components';

import { useAppDispatch, useLocalStorage } from 'hooks';

function PrivateBeta() {
  const [walletAddress, setWalletAddress] = useLocalStorage(
    'walletAddress',
    undefined
  );
  const [address, setAddress] = useState('');
  const dispatch = useAppDispatch();
  const beproService = new BeproService();

  function handleChangeAddress(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    setAddress(value);
  }

  function handleSubmit() {
    setWalletAddress(address);
  }

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
          <form className="pm-private-beta__form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="pm-private-beta__form-input"
              name="address"
              placeholder="Enter your wallet address"
              value={address}
              onChange={event => handleChangeAddress(event)}
            />
            <Button type="submit" color="primary" size="lg">
              <ArrowRightIcon />
            </Button>
          </form>
        </div>
      </ModalNotification>
    </div>
  );
}

PrivateBeta.displayName = 'PrivateBeta';

export default PrivateBeta;
