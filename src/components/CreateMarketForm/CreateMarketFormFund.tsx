import { AlertMini } from '../Alert';
import Link from '../Link';
import Text from '../Text';

function CreateMarketFormFund() {
  return (
    <div className="pm-c-create-market-form__card">
      <Text
        as="h5"
        scale="body"
        fontWeight="medium"
        className="pm-c-create-market-form__card-title"
      >
        Fund Market
      </Text>
      <AlertMini
        variant="information"
        styles="outline"
        description={
          <>
            {`Providing liquidity is risky and could result in near total loss. It is important to withdraw liquidity before the event occurs and to be aware the market could move abruptly at any time. `}
            <Link
              title="More Info"
              href="//www.polkamarkets.com"
              aria-label="More Info"
              target="_blank"
              rel="noreferrer"
              scale="tiny"
              fontWeight="medium"
            />
          </>
        }
      />
    </div>
  );
}

export default CreateMarketFormFund;
