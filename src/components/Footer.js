import React from 'react';
import styled from 'styled-components';
import screen from 'superior-mq';
import Container from './Container';
import SiteGrid from './SiteGrid';
import List from './List';
import Link from './Link';

const footerList = [
  {
    id: 1,
    title: 'GitHub',
    link: 'https://github.com/jacobproffer',
  },
  {
    id: 2,
    title: 'Dribbble',
    link: 'https://dribbble.com/jacobproffer',
  },
  {
    id: 3,
    title: 'Twitter',
    link: 'https://twitter.com/jacobproffer',
  },
];

const StyledFooter = styled.footer`
  padding-bottom: 100px;

  ${screen.below('1281px', `
    padding-bottom: 75px;
  `)}

  ${screen.below('1024px', `
    padding-bottom: 50px;
  `)}

  ${screen.below('768px', `
    padding-top: 14px;
  `)}
`;

const ListItem = styled.li`
  display: inline-block;

  &:not(:last-of-type) {
    margin-right: 25px;

    ${screen.below('768px', `
      margin-right: 15px;
    `)}
  }
`;

const Footer = () => (
  <StyledFooter>
    <SiteGrid as={Container}>
      <SiteGrid.LeftCol />
      <SiteGrid.RightCol as="nav" aria-label="social">
        <List>
          {footerList.map(item => (
            <ListItem key={item.id}>
              <Link href={item.link}>
                {item.title}
              </Link>
            </ListItem>
          ))}
        </List>
      </SiteGrid.RightCol>
    </SiteGrid>
  </StyledFooter>
);

export default Footer;
