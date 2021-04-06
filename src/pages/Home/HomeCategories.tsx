import { FeaturedCard } from 'components';

import { categories } from './mock';

function HomeCategories() {
  return (
    <ul className="home__categories">
      {categories?.map(category => (
        <li key={category.title}>
          <FeaturedCard
            title={category.title}
            change={category.change}
            color={category.color}
          />
        </li>
      ))}
    </ul>
  );
}

export default HomeCategories;
