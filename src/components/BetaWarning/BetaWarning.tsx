import { useState } from 'react';

import { Button } from '../Button';
import Checkbox from '../Checkbox';
import Link from '../Link';
import Text from '../Text';

function BetaWarning() {
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  return (
    <div className="pm-c-beta-warning">
      <div className="pm-c-beta-warning__description">
        <Text as="h5" scale="heading" fontWeight="medium">
          <>
            {`Polkamarkets is running in Beta is currently underdoing `}
            <Link
              title="auditing procedures"
              scale="heading"
              fontWeight="medium"
              href="https://www.polkamarkets.com/legal/terms-conditions"
              target="_blank"
            />
            .
          </>
        </Text>
        <Checkbox
          label="text"
          onChange={() => setAcceptedTerms(!acceptedTerms)}
        >
          <Text as="p" scale="caption" fontWeight="medium">
            <>
              {`I Agree the `}
              <Link
                title="Terms & Service"
                scale="caption"
                fontWeight="medium"
                href="https://www.polkamarkets.com/legal/terms-conditions"
                target="_blank"
              />
              {` & I am aware of the `}
              <Link
                title="Risks & Disclosure"
                scale="caption"
                fontWeight="medium"
                href="https://www.polkamarkets.com/legal/terms-conditions"
                target="_blank"
              />
            </>
            .
          </Text>
        </Checkbox>
      </div>
      <div className="pm-c-beta-warning__actions">
        <Button
          variant="normal"
          color="warning"
          fullwidth
          disabled={!acceptedTerms}
        >
          Proceed
        </Button>
      </div>
    </div>
  );
}

export default BetaWarning;
