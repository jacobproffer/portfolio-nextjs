import styled, { css } from 'styled-components';
// import screen from 'superior-mq';
import { rem } from 'polished';
import InlineLink from './InlineLink';

const Link = styled(InlineLink)`
  position: relative;
  font-size: ${rem(18)};
  text-transform: uppercase;
  letter-spacing: .2rem;

  &::before {
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${props => props.theme.gray};
    transition: background-color .5s ease-in-out;
    content: '';
  }

  &:hover {
    &::before {
      background-color: ${props => props.theme.green};
    }
  }

  ${props => props.styles && css`
    ${props.styles}
  `}
`;

export default Link;
