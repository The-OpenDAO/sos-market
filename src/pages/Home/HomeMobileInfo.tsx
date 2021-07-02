import { AlertMini } from 'components';

function HomeMobileInfo() {
  return (
    <div className="pm-home__mobile-info">
      <AlertMini
        variant="information"
        description="Our mobile version only let’s you see the open Markets. If you want to
    trade you must connect your wallet to our web application."
      />
    </div>
  );
}

HomeMobileInfo.displayName = 'HomeMobileInfo';

export default HomeMobileInfo;
