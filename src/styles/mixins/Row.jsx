import styled from 'styled-components/macro';
import { justifyContent, alignItems } from 'styled-system';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  ${justifyContent};
  ${alignItems};
`;

Row.displayName = 'Row';

export default Row;
