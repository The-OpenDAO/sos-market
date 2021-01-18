import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { variant, compose, space, color, typography } from 'styled-system';

const variants = variant({
  variants: {
    regular: {
      fontFamily: 'primary',
      fontWeight: 'regular'
    },
    medium: {
      fontFamily: 'primary',
      fontWeight: 'medium'
    },
    bold: {
      fontFamily: 'primary',
      fontWeight: 'bold'
    },
    lg: {
      fontFamily: 'primary',
      fontWeight: 'regular',
      fontSize: 3
    },
    lgBold: {
      fontFamily: 'primary',
      fontWeight: 'bold',
      fontSize: 3
    },
    xs: {
      fontFamily: 'primary',
      fontWeight: 'regular',
      fontSize: 1
    },
    xsBold: {
      fontFamily: 'primary',
      fontWeight: 'bold',
      fontSize: 1
    }
  }
});

const Text = styled.p`
  ${compose(space, color, typography)}
  ${variants}
`;

Text.displayName = 'Text';

Text.defaultProps = {
  variant: 'regular'
};

Text.propTypes = {
  variant: PropTypes.oneOf([
    'regular',
    'medium',
    'bold',
    'lg',
    'lgBold',
    'xs',
    'xsBold'
  ])
};

export default Text;
