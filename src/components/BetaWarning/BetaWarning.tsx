/* eslint-disable no-unused-vars */
import { useState } from 'react';

import { TwarningIcon } from 'assets/icons';

import { Button } from '../Button';
import Checkbox from '../Checkbox';
import Link from '../Link';
import Text from '../Text';

type BetaWarningProps = {
  handleChangeModalVisibility: (visible: boolean) => void;
};

function BetaWarning({ handleChangeModalVisibility }: BetaWarningProps) {
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  return (
    <div className="pm-c-beta-warning">
      <div className="pm-c-beta-warning__description">
        <div className="pm-c-beta-warning__header">
          <TwarningIcon />
          <Text as="span" scale="tiny-uppercase" fontWeight="semibold">
            Warning
          </Text>
        </div>
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
          onClick={() => handleChangeModalVisibility(false)}
        >
          Proceed
        </Button>
      </div>
    </div>
  );
}

export default BetaWarning;
