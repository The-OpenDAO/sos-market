import React from 'react';
import PropTypes from 'prop-types';

import styles from './Breadcrumb.module.scss';

function Breadcrumb({ previous, actual }) {
  return (
    <div className={styles.container}>
      <a href={previous}>{previous}</a> / <span>{actual}</span>
    </div>
  );
}

Breadcrumb.propTypes = {
  previous: PropTypes.string.isRequired,
  actual: PropTypes.string.isRequired
};

export default Breadcrumb;
