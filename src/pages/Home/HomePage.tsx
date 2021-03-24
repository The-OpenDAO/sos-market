import { Tabs, Select, MarketList, FeaturedCard } from 'components';

import { tabs, categories, markets } from './mock';

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-page__content">
        <ul className="home-page__categories-group">
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

        <div className="navigation">
          <Tabs items={tabs} />

          <div className="filters">
            <Select label="Sort by:" name="Sort by" disabled>
              <option value="Most traded">Most traded</option>
            </Select>
          </div>
        </div>

        <MarketList markets={markets} />
      </div>
    </div>
  );
};

export default Home;
