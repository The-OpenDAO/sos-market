import styled from 'styled-components/macro';
import { variant, compose, space, color, typography } from 'styled-system';

const variants = variant({
  variants: {
    body: {
      fontFamily: 'body',
      fontWeight: 'regular',
      lineHeight: 'copy',
      fontSize: 2
    },
    caption: {
      fontFamily: 'body',
      fontWeight: 'medium',
      lineHeight: 'copy',
      fontSize: 2
    },
    label: {
      fontFamily: 'heading',
      fontWeight: 'regular',
      lineHeight: 'solid',
      fontSize: 1
    }
  }
});

const Text = styled.p`
  ${compose(space, color, typography)}
  ${variants}
`;

export default Text;
