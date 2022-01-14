import classnames from 'classnames';
import dayjs from 'dayjs';
import { setFilter } from 'redux/ducks/markets';
import { useAppDispatch } from 'redux/store';

// import { CaretDownIcon, CaretUpIcon } from 'assets/icons';

import { useAppSelector } from 'hooks';
import useCategories from 'hooks/useCategories';

// import Label from '../Label';
import MiniAreaChart from '../MiniAreaChart';
import Text from '../Text';

type BackgroundColor = 'yellow' | 'blue' | 'green' | 'pink' | 'orange';

type CategoryProps = {
  title: string;
  change?: {
    type: 'up' | 'down' | string;
    amount: number;
  };
  chartData?: { x: dayjs.Dayjs; y: number }[];
  backgroundColor: BackgroundColor | string;
};

function Category({ title, chartData, backgroundColor }: CategoryProps) {
  const dispatch = useAppDispatch();
  const categories = useCategories();
  const filter = useAppSelector(state => state.markets.filter);

  const filterMatchesWithTitle = (categoryTitle: string) =>
    categoryTitle.match(new RegExp(`^${filter}$`, 'i'));

  const filterMatchesSomeCategory = categories
    .map(category => category.title)
    .some(filterMatchesWithTitle);

  function handleCategorySelected() {
    if (title === filter) {
      dispatch(setFilter(''));
    } else {
      dispatch(setFilter(title));
    }
  }

  return (
    <div
      className={classnames({
        [`pm-c-category--${backgroundColor}`]: true,
        'pm-c-category--outfocus':
          filterMatchesSomeCategory && !filterMatchesWithTitle(title)
      })}
      role="button"
      tabIndex={0}
      onClick={handleCategorySelected}
      onKeyPress={handleCategorySelected}
    >
      <div className="pm-c-category__header">
        <Text as="label" scale="body" fontWeight="semibold" color="white">
          {title}
        </Text>
        {/* disabling change labels at the moment
          <Label size="lg" color={change.type === 'up' ? 'success' : 'danger'}>
            {change.type === 'up' ? <CaretUpIcon /> : <CaretDownIcon />}
            {`${change.amount}%`}
          </Label>
        ) : null */}
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
  );
}

Category.displayName = 'Category';

export default Category;
