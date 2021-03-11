import React from 'react';

import { Tabs, Select, MarketList, FeaturedCard } from 'components';

import { tabs, categories, markets } from './mock';

function Home() {
  return (
    <div className="content">
      <ul className="markets">
        {categories?.map(category => (
          <li key={category.label}>
            <FeaturedCard label={category.label} variant={category.color} />
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
  );
}

export default Home;
