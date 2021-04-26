import { InfoIcon } from 'assets/icons';

import { Text } from 'components';

function HomeMobileInfo() {
  return (
    <div className="pm-home__mobile-info">
      <InfoIcon />
      <Text as="p" scale="tiny" fontWeight="medium" color="white">
        Our mobile version only let’s you see the open Markets. If you want to
        trade you must connect your wallet to our web application.
      </Text>
    </div>
  );
}

HomeMobileInfo.displayName = 'HomeMobileInfo';

export default HomeMobileInfo;
