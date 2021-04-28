import { Category, CategoryDisabled } from 'components';

import { categories, categoriesDisabled } from './mock';

function HomeCategories() {
  return (
    <ul className="pm-home__categories">
      {categories?.map(category => (
        <li key={category.title}>
          <Category
            title={category.title}
            change={category.change}
            chartData={category.chartData}
            backgroundColor={category.backgroundColor}
          />
        </li>
      ))}
      {categoriesDisabled?.map(category => (
        <li key={category.title}>
          <CategoryDisabled title={category.title} info={category.info} />
        </li>
      ))}
    </ul>
  );
}

export default HomeCategories;
