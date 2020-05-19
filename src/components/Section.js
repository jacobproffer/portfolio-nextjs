import styled, { css } from 'styled-components';
import screen from 'superior-mq';

const Section = styled.section`
  padding-bottom: 168px;

  ${screen.below('1281px', `
    padding-bottom: 126px;
  `)}

  ${screen.below('1024px', `
    padding-bottom: 84px;
  `)}

  ${screen.below('768px', `
    padding-bottom: 42px;
  `)}

  ${props => props.styles && css`
    ${props.styles}
  `}
`;

export default Section;
