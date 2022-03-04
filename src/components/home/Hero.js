import React from "react";
import styled from "styled-components";
import Container from "../Container";
import { H1 } from "../H";

const HeroBlock = styled.div`
  --hero-top-padding: clamp(6.25rem, calc(3.75rem + 12.5vw), 18.75rem);
  --hero-bottom-padding: clamp(
    1.5625rem,
    calc(1.5625rem + ((1vw - 0.2rem) * 10.9375)),
    12.5rem
  );
  padding: var(--hero-top-padding) 0 var(--hero-bottom-padding);
`;

const HeroHeadline = styled(H1)`
  span {
    display: block;
  }
`;

const Hero = () => (
  <HeroBlock>
    <Container>
      <HeroHeadline>
        Senior Front-End Developer at Elegant Seagulls.
      </HeroHeadline>
    </Container>
  </HeroBlock>
);

export default Hero;
