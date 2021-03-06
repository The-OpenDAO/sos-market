import Label from '../Label';
import MiniAreaChart from '../MiniAreaChart';
import Text from '../Text';
import { generateChartRandomData } from './utils';

const chartData = generateChartRandomData();

type CategoryDisabledProps = {
  title: string;
  info?: string;
};

function CategoryDisabled({ title, info }: CategoryDisabledProps) {
  return (
    <div className="pm-c-category--disabled">
      <div className="pm-c-category__header">
        <Text as="label" scale="body" fontWeight="semibold" color="white">
          {title}
        </Text>
        {info ? (
          <Label size="lg" color="primary">
            {info}
          </Label>
        ) : null}
      </div>
      <div className="pm-c-category__body">
        <MiniAreaChart
          serie={chartData}
          height={50}
          color="white"
          gradientShade="dark"
          strokeWidth={1}
          strokeCurve="straight"
        />
      </div>
    </div>
  );
}

CategoryDisabled.displayName = 'CategoryDisabled';

export default CategoryDisabled;
