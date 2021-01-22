import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import Row from 'styles/mixins/Row';
import Text from './Text';

const Container = styled.button`
  display: inline-block;

  cursor: pointer;
  touch-action: manipulation;

  margin: 0px;
  padding: 16px;

  width: 100%;

  outline: none;
  border-radius: 4px;

  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: center;

  transition: 220ms all ease-in-out;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const variants = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  warning: 'warning',
  danger: 'danger'
};

function Odd({ title, value }) {
  return (
    <Container variant={variants.default}>
      <Title>
        <Text>{title}</Text>
        <Row justifyContent="space-between">
          <Text color="gray.500">ODD</Text>
          <Text variant="bold" color="primary.900" marginLeft={2}>
            {value}
          </Text>
        </Row>
      </Title>
    </Container>
  );
}

Odd.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default Odd;
