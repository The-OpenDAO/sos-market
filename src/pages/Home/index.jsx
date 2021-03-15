import React from 'react';

import { Tabs, Select, MarketList, FeaturedCard } from 'components';

import { tabs, categories, markets } from './mock';

function Home() {
  return (
    <div className="home-root">
      <div className="home-root__content">
        <ul className="markets">
          {categories?.map(category => (
            <li key={category.label}>
              <FeaturedCard
                variant={category.color}
                label={category.label}
                value={category.value}
                positive={category.positive}
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
}

export default Home;
