import styled from 'styled-components';
import { rem } from 'polished';
import screen from 'superior-mq';
import { bp } from '../styles/helpers';

export const H1 = styled.h1`
  font-size: ${rem(100)};

  ${screen.below(bp.laptopSm, `
    font-size: ${rem(75)};
  `)}

  ${screen.below(bp.tablet, `
    font-size: ${rem(50)};
  `)}
`;

export const H2 = styled.h2`
  font-size: ${rem(24)};
`;

export const H3 = styled.h3`
  font-size: ${rem(18)};
  font-weight: 400;
`;

export const H4 = styled.h4`
  font-size: ${rem(32)};
`;

export const H5 = styled.h5`
  font-size: ${rem(24)};
`;

export const H6 = styled.h6`
  font-size: ${rem(16)};
`;
