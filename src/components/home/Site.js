import React from "react";
import styled from "styled-components";
import { hover } from "../../styles/helpers";
import { H3 } from "../H";
import InlineLink from "../InlineLink";

const Article = styled.article`
  position: relative;
  height: 100%;
  padding: 25px;
  color: inherit;
  background-color: var(--gray);

  p:last-of-type {
    margin-bottom: 0;
  }

  ${hover(`
    h3 {
      text-decoration: underline;
    }
  `)}
`;

const Grid = styled.div`
  display: grid;
`;

const Title = styled(H3)`
  order: 2;
`;

const Tag = styled.small`
  --tag-margin: clamp(1.25rem, calc(1rem + 1.25vw), 2.5rem);
  order: 1;
  max-width: max-content;
  padding: 5px 10px;
  margin-bottom: var(--tag-margin);
  color: var(--white);
  background-color: var(--black);
  line-height: 1;
  border-radius: 5px;
`;

const Link = styled(InlineLink)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;

  &:focus {
    outline: 2px solid var(--dark-gray);
    outline-offset: 2px;
  }
`;

const Site = ({ id, title, link, tag, description }) => (
  <Article key={id}>
    <Grid>
      <Title>{title}</Title>
      <Tag>{tag}</Tag>
    </Grid>
    <p>{description}</p>
    <Link href={link} aria-label={`View ${title}`} />
  </Article>
);

export default Site;
