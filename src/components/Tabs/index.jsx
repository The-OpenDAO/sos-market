import React, { useState } from 'react';
import PropTypes from 'prop-types';

import isEmpty from 'lodash/isEmpty';
import clx from 'classnames';

import styles from 'styles/components/Tabs.module.scss';

function Tabs({ direction, items }) {
  const [activeTab, setActiveTab] = useState(items[0].name);

  function handleChangeTab(event) {
    setActiveTab(event.target.name);
  }

  return (
    <>
      <ul className={clx(styles.container, styles[direction])}>
        {!isEmpty(items) &&
          items.map(item => (
            <li
              key={item.name}
              className={clx(
                styles.item,
                item.name === activeTab && styles.active
              )}
            >
              <button
                type="button"
                name={item.name}
                onClick={event => handleChangeTab(event)}
              >
                {item.name}
              </button>
            </li>
          ))}
      </ul>
      <>
        {!isEmpty(items) &&
          items.map(item => (
            <div
              className={clx(
                styles.content,
                item.name === activeTab && styles.active
              )}
              key={item.name}
            >
              {item.content}
            </div>
          ))}
      </>
    </>
  );
}

Tabs.defaultProps = {
  direction: 'row'
};

Tabs.propTypes = {
  direction: PropTypes.oneOf(['row', 'column']),
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Tabs;
