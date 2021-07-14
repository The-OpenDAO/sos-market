import { PolkamarketsIcon } from 'assets/icons';

import { ModalNotification, Text, Link } from 'components';

function RestrictedCountry() {
  return (
    <div className="pm-restricted-country">
      <ModalNotification visible>
        <div className="pm-restricted-country__card">
          <PolkamarketsIcon />
          <Text
            as="h5"
            scale="heading"
            fontWeight="bold"
            color="white"
            style={{ textAlign: 'center' }}
          >
            Polkamarkets is not available in your country
          </Text>
          <Text
            as="p"
            scale="body"
            fontWeight="medium"
            color="lighter-gray"
            style={{
              textAlign: 'center',
              paddingBottom: '1rem',
              whiteSpace: 'pre-line'
            }}
          >
            <>
              {`At the moment, Polkamarkets is not available in your jurisdiction.
            If you believe this is incorrect, please contact us for assistance.
            For further information please contact us on `}
              <Link
                href="mailto:general@polkamarkets.com"
                title="general@polkamarkets.com"
                scale="body"
                fontWeight="medium"
                className="text-lighter-gray"
              />
            </>
          </Text>
        </div>
      </ModalNotification>
    </div>
  );
}

export default RestrictedCountry;
