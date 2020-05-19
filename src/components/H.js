import styled from 'styled-components';
import { rem } from 'polished';
import screen from 'superior-mq';

export const H1 = styled.h1`
  font-size: ${rem(100)};

  ${screen.below('1281px', `
    font-size: ${rem(75)};
  `)}

  ${screen.below('1024px', `
    font-size: ${rem(50)};
  `)}

  ${screen.below('480px', `
    font-size: ${rem(25)};
  `)}
`;

export const H2 = styled.h2`
  font-size: ${rem(48)};

  ${screen.below('1024px', `
    font-size: ${rem(36)};
  `)}

  ${screen.below('768px', `
    font-size: ${rem(24)};
  `)}
`;

export const H3 = styled.h3`
  font-size: ${rem(48)};
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
