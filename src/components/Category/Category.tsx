import { Link } from 'react-router-dom';

import dayjs from 'dayjs';

import { CaretDownIcon, CaretUpIcon } from 'assets/icons';

import Label from '../Label';
import MiniAreaChart from '../MiniAreaChart';
import Text from '../Text';

type BackgroundColor = 'yellow' | 'blue' | 'green' | 'pink' | 'orange';

type CategoryProps = {
  title: string;
  route: string;
  change?: {
    type: 'up' | 'down' | string;
    amount: number;
  };
  chartData?: { x: dayjs.Dayjs; y: number }[];
  backgroundColor: BackgroundColor | string;
};

function Category({
  title,
  route,
  change,
  chartData,
  backgroundColor
}: CategoryProps) {
  return (
    <Link to={`/${route}`}>
      <div className={`pm-c-category--${backgroundColor}`}>
        <div className="pm-c-category__header">
          <Text as="label" scale="body" fontWeight="semibold" color="white">
            {title}
          </Text>
          {/* disabling change labels at the moment
          {change ? (
            <Label
              size="lg"
              color={change.type === 'up' ? 'success' : 'danger'}
            >
              {change.type === 'up' ? <CaretUpIcon /> : <CaretDownIcon />}
              {`${change.amount}%`}
            </Label>
          ) : null} */}
        </div>
        <div className="pm-c-category__body">
          {chartData ? (
            <MiniAreaChart
              serie={chartData}
              height={50}
              color="white"
              gradientShade="light"
              strokeWidth={1}
              strokeCurve="straight"
            />
          ) : null}
        </div>
      </div>
    </Link>
  );
}

Category.displayName = 'Category';

export default Category;
