import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { variant } from 'styled-system';

const variants = variant({
  variants: {
    default: {
      color: 'gray.900',
      backgroundColor: 'white',
      borderColor: 'gray.300',
      '&:hover': {
        backgroundColor: 'gray.300'
      },
      '&:disabled': {
        color: 'gray.500',
        backgroundColor: 'white',
        borderColor: 'gray.500'
      }
    },
    primary: {
      color: 'white',
      backgroundColor: 'primary.500',
      borderColor: 'primary.500',
      '&:hover': {
        backgroundColor: 'primary.900',
        borderColor: 'primary.900'
      },
      '&:disabled': {
        backgroundColor: 'primary.400',
        borderColor: 'primary.400'
      }
    },
    secondary: {
      color: 'primary.500',
      backgroundColor: 'primary.100',
      borderColor: 'primary.100',
      '&:hover': {
        color: 'primary.500',
        backgroundColor: 'primary.300',
        borderColor: 'primary.300'
      },
      '&:disabled': {
        color: 'primary.200',
        backgroundColor: 'primary.100',
        borderColor: 'primary.100'
      }
    },
    success: {
      color: 'white',
      backgroundColor: 'success.500',
      borderColor: 'success.500',
      '&:hover': {
        color: 'white',
        backgroundColor: 'success.900',
        borderColor: 'success.900'
      },
      '&:disabled': {
        color: 'success.200',
        backgroundColor: 'success.300',
        borderColor: 'success.300'
      }
    },
    warning: {
      color: 'white',
      backgroundColor: 'warning.500',
      borderColor: 'warning.500',
      '&:hover': {
        color: 'white',
        backgroundColor: 'warning.900',
        borderColor: 'warning.900'
      },
      '&:disabled': {
        color: 'warning.200',
        backgroundColor: 'warning.300',
        borderColor: 'warning.300'
      }
    },
    danger: {
      color: 'white',
      backgroundColor: 'danger.500',
      borderColor: 'danger.500',
      '&:hover': {
        color: 'white',
        backgroundColor: 'danger.900',
        borderColor: 'danger.900'
      },
      '&:disabled': {
        color: 'danger.200',
        backgroundColor: 'danger.300',
        borderColor: 'danger.300'
      }
    }
  }
});

const Button = styled.button`
  display: inline-block;

  cursor: pointer;
  touch-action: manipulation;

  margin: 0px;
  padding: 16px 24px;

  outline: none;
  border-radius: 4px;

  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: center;

  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  border: 1px solid ${props => props.borderColor};

  transition: 220ms all ease-in-out;

  &:hover {
    background-color: ${props => props.backgroundColor};
  }

  &:disabled {
    cursor: unset;
    touch-action: unset;

    color: ${props => props.color};
    background-color: ${props => props.backgroundColor};

    border: 1px solid ${props => props.borderColor};
  }

  ${variants}
`;

Button.defaultProps = {
  variant: 'default'
};

Button.propTypes = {
  variant: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'success',
    'warning',
    'danger'
  ])
};

export default Button;
