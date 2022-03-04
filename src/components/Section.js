import styled, { css } from "styled-components";

const Section = styled.section`
  --section-padding: clamp(2.63rem, calc(-0.45rem + 15.37vw), 10.5rem);
  padding-bottom: var(--section-padding);

  ${(props) =>
    props.styles &&
    css`
      ${props.styles}
    `}
`;

export default Section;
