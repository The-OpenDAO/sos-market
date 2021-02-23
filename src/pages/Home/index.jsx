import React from 'react';

import { Text, Tabs, Select, MarketList } from 'components';

import { tabs, markets } from './mock';

function Home() {
  return (
    <div className="content">
      <Text as="h1" variant="bold">
        Popular Markets
      </Text>

      <ul className="markets">
        <li className="market">
          <Text as="p" variant="lg-bold">
            Politics
          </Text>
        </li>
        <li className="market">
          <Text as="p" variant="lg-bold">
            Sports
          </Text>
        </li>
        <li className="market">
          <Text as="p" variant="lg-bold">
            Finance
          </Text>
        </li>
        <li className="market">
          <Text as="p" variant="lg-bold">
            Crypto
          </Text>
        </li>
      </ul>

      <div className="navigation">
        <Tabs items={tabs} />

        <div className="filters">
          <Select label="Sub-Category:" name="Sub-Category" disabled>
            <option value="USA">USA</option>
          </Select>
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
