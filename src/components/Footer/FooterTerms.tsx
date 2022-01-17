import Link from '../Link';
import Text from '../Text';

function FooterTerms() {
  return (
    <div className="pm-l-footer__terms">
      <Text
        as="p"
        scale="caption"
        fontWeight="medium"
        className="pm-l-footer__terms-text-secondary"
        style={{
          textAlign: 'center',
          paddingBottom: '1rem',
          whiteSpace: 'pre-line'
        }}
      >
        <>
          {`SOSMarket Services and SOS Token (SOS) `}
          <Link
            title="are not available in Excluded Jurisdictions."
            scale="caption"
            fontWeight="medium"
            className="pm-l-footer__terms-text-primary"
            style={{
              textDecoration: 'none'
            }}
            href="/terms-conditions"
            target="_blank"
          />
          {` By accessing and using the interface you agree with our `}
          <Link
            title="Terms & Conditions"
            scale="caption"
            fontWeight="medium"
            href="/terms-conditions"
            target="_blank"
          />
        </>
      </Text>
    </div>
  );
}

export default FooterTerms;
