import { Alert } from '../Alert';
import Link from '../Link';

function ReportFormInfo() {
  return (
    <Alert
      variant="information"
      description={
        <>
          {`Earn POLK by reporting the correct outcome. `}
          <Link
            title="Learn more"
            href="//polkamarkets.medium.com/polkamarkets-releases-decentralized-event-resolution-9d9a947b932e"
            aria-label="Learn more"
            target="_blank"
            rel="noreferrer"
          />
        </>
      }
    />
  );
}

export default ReportFormInfo;
