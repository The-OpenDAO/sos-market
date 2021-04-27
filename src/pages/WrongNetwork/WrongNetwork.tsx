import { ModalNotification, Text } from 'components';

function WrongNetwork() {
  return (
    <div className="pm-wrong-network">
      <ModalNotification visible>
        <div className="pm-wrong-network__card">
          <Text
            as="h5"
            scale="heading"
            fontWeight="bold"
            color="white"
            style={{ textAlign: 'center' }}
          >
            Wrong Network
          </Text>
          <span className="spinner--primary" />
          <Text
            as="p"
            scale="body"
            fontWeight="medium"
            color="lighter-gray"
            style={{ textAlign: 'center', paddingBottom: '1rem' }}
          >
            Change your MetaMask to Kovan Test Network
          </Text>
        </div>
      </ModalNotification>
    </div>
  );
}

WrongNetwork.displayName = 'WrongNetwork';

export default WrongNetwork;
