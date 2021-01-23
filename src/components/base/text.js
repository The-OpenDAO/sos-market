import React from 'react';
import PropTypes from 'prop-types';

import styles from 'styles/components/Text.module.scss';

const tags = Object.freeze({
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  label: 'label'
});

function Text({ children, as, variant }) {
  const Tag = tags[as] || 'p';

  return <Tag className={styles[variant] || styles.regular}>{children}</Tag>;
}

Text.defaultProps = {
  variant: 'regular'
};

Text.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.string.isRequired,
  variant: PropTypes.string
};
export default Text;