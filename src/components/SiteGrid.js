import styled, { css } from 'styled-components';
import screen from 'superior-mq';
import { bp } from '../styles/helpers';
import Grid from './Grid';

const SiteGrid = styled(Grid)`
  ${props => props.styles && css`
    ${props.styles}
  `}
`;

SiteGrid.LeftCol = styled(Grid.Item)`
  grid-column: span 3;

  ${screen.below(bp.tablet, `
    grid-column: 1 / -1;
  `)}
`;

SiteGrid.RightCol = styled(Grid.Item)`
  grid-column: span 7;

  ${screen.below(bp.tablet, `
    grid-column: 1 / -1;
  `)}
`;

export default SiteGrid;
