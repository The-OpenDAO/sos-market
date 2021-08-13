import { Alert } from '../Alert';
import Link from '../Link';

function ReportFormInfo() {
  return (
    <Alert
      variant="information"
      description={
        <>
          {`Earn $POLK by reporting the correct outcome. `}
          <Link
            title="Learn more"
            href="//polkamarkets.medium.com/polkamarkets-partners-with-kleros-for-crowdsourced-event-resolution-21bfe13a0c83"
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
