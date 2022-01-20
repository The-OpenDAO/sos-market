import { SosmarketIcon } from 'assets/icons';

import { ModalNotification, Text, Link } from 'components';

function RestrictedCountry() {
  return (
    <div className="pm-restricted-country">
      <ModalNotification visible>
        <div className="pm-restricted-country__card">
          <SosmarketIcon />
          <Text
            as="h5"
            scale="heading"
            fontWeight="bold"
            color="white"
            style={{ textAlign: 'center' }}
          >
            sosMarket is not available in your country
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
              {`At the moment SOSMarket Services and SOS Token (SOS) are not available in `}
              <Link
                href="/legal/terms-conditions.html"
                title="Excluded Jurisdictions."
                scale="body"
                fontWeight="medium"
                className="text-gray"
                target="_blank"
              />
              {/* {`For further information please contact us on `}
              <Link
                href="mailto:general@sosmarket.com"
                title="general@sosmarket.com"
                scale="body"
                fontWeight="medium"
                className="text-gray"
                target="_blank"
              /> */}
            </>
          </Text>
          {/* <Button
            color="primary"
            size="sm"
            onClick={() =>
              window.open(
                'https://help.sosmarket.com/en/articles/5623718-ownership-architecture',
                '_blank'
              )
            }
          >
            Learn More
          </Button> */}
        </div>
      </ModalNotification>
    </div>
  );
}

export default RestrictedCountry;
