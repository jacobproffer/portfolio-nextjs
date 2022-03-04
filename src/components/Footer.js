import React from "react";
import styled from "styled-components";
import Container from "./Container";
import List from "./List";
import Link from "./Link";

const footerList = [
  {
    id: 1,
    title: "GitHub",
    link: "https://github.com/jacobproffer",
  },
  {
    id: 2,
    title: "Dribbble",
    link: "https://dribbble.com/jacobproffer",
  },
  {
    id: 3,
    title: "Twitter",
    link: "https://twitter.com/jacobproffer",
  },
];

const StyledFooter = styled.footer`
  --footer-padding: clamp(1.56rem, calc(0.63rem + 4.69vw), 6.25rem);
  padding: var(--footer-padding) 0;
  color: var(--white);
  background-color: var(--black);
`;

const ListItem = styled.li`
  --list-margin: clamp(0.94rem, calc(0.63rem + 1.56vw), 2.5rem);
  display: inline-block;

  &:not(:last-of-type) {
    margin-right: var(--list-margin);
  }
`;

const Footer = () => (
  <StyledFooter>
    <Container>
      <nav aria-label="social">
        <List>
          {footerList.map((item) => (
            <ListItem key={item.id}>
              <Link href={item.link}>{item.title}</Link>
            </ListItem>
          ))}
        </List>
      </nav>
    </Container>
  </StyledFooter>
);

export default Footer;
