import styled from 'styled-components/macro';

const ButtonBase = styled.button`
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

  transition: 220ms all ease-in-out;

  &:disabled {
    cursor: unset;
    touch-action: unset;
  }
`;

export default ButtonBase;
