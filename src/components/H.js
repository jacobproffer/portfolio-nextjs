import styled from "styled-components";

export const H1 = styled.h1`
  --h1-sizes: clamp(2.375rem, calc(2.375rem + ((1vw - 0.2rem) * 7)), 9.375rem);
  font-size: var(--h1-sizes);
  line-height: 1;
`;

export const H2 = styled.h2`
  --h2-sizes: clamp(
    1.25rem,
    calc(1.25rem + ((1vw - 0.2rem) * 3.4375)),
    4.6875rem
  );
  font-size: var(--h2-sizes);
`;

export const H3 = styled.h3`
  --h3-sizes: clamp(
    1.125rem,
    calc(1.125rem + ((1vw - 0.2rem) * 0.4375)),
    1.5625rem
  );
  font-size: var(--h3-sizes);
`;
