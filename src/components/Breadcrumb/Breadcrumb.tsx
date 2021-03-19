import Text from '../Text';

type BreadcrumbProps = {
  previous: string;
  actual: string;
};

const Breadcrumb = ({ previous, actual }: BreadcrumbProps) => {
  return (
    <div className="breadcrumb">
      <a className="breadcrumb__link tiny-uppercase semibold" href={previous}>
        {previous}
      </a>
      <div className="breadcrumb__separator tiny-uppercase semibold">{` / `}</div>
      <Text as="span" scale="tiny-uppercase" fontWeight="semibold">
        {actual}
      </Text>
    </div>
  );
};

Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;
