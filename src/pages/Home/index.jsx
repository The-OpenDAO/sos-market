import React from 'react';

import { Text, Tabs, Select, MarketList } from 'components';

import { tabs, markets } from './mock';

function Home() {
  return (
    <div className="content">
      <ul className="markets">
        <li className="market">
          <Text as="p" scale="body" fontWeight="semibold">
            Politics
          </Text>
        </li>
        <li className="market">
          <Text as="p" scale="body" fontWeight="semibold">
            Finance
          </Text>
        </li>
        <li className="market">
          <Text as="p" scale="body" fontWeight="semibold">
            Crypto
          </Text>
        </li>
        <li className="market">
          <Text as="p" scale="body" fontWeight="semibold">
            eSports
          </Text>
        </li>
        <li className="market">
          <Text as="p" scale="body" fontWeight="semibold">
            Tech
          </Text>
        </li>
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
