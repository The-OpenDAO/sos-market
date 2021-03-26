import { Select, MarketList, FeaturedCard, Tabs } from 'components';

import { categories, markets } from './mock';

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

        {/* <div className="navigation">
          <div className="filters">
            <Select label="Sort by:" name="Sort by" disabled>
              <option value="Most traded">Most traded</option>
            </Select>
          </div>
        </div> */}

        <Tabs defaultActiveId="open">
          <Tabs.TabPane tab="Open" id="open">
            <MarketList markets={markets} />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Favorites" id="favorites" />
          <Tabs.TabPane tab="In-Reporting" id="in-reporting" />
          <Tabs.TabPane tab="Resolved" id="resolved" />
        </Tabs>
      </div>
    </div>
  );
};

export default Home;
