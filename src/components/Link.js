import styled, { css } from "styled-components";
import { rem } from "polished";
import InlineLink from "./InlineLink";

const Link = styled(InlineLink)`
  position: relative;
  font-size: ${rem(18)};
  text-decoration: underline;
  text-underline-offset: 0.5rem;

  ${(props) =>
    props.styles &&
    css`
      ${props.styles}
    `}
`;

export default Link;
