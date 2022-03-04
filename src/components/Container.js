import styled from "styled-components";
import screen from "superior-mq";

const Container = styled.div`
  position: relative;
  max-width: var(--container);
  margin: auto;

  ${screen.below(
    "1480px",
    `
    padding: 0 40px;
  `
  )}

  ${screen.below(
    "1024px",
    `
    padding: 0 25px;
  `
  )}
`;

export default Container;
