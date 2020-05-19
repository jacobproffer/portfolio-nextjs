import React from 'react';
import styled from 'styled-components';
import screen from 'superior-mq';
import Container from './Container';
import Grid from './Grid';
import List from './List';
import Link from './Link';

const gridItemStyles = `
  grid-column: span 2 / -1;
  text-align: right;
`;

const SiteHeader = styled.header`
  position: absolute;
  z-index: 1;
  width: 100%;
  padding: 100px 0;

  ${screen.below('1281px', `
    padding: 75px 0;
  `)}

  ${screen.below('1024px', `
    padding: 50px 0;
  `)}

  ${screen.below('768px', `
    padding: 25px 0;
  `)}
`;

const SkipLink = styled.a`
  position: fixed;
  top: -2.5em;
  left: 50%;
  transform: translateX(-50%);
  transition: top .5s ease-in-out;

  &:focus {
    top: 0;
  }
`;

const LogoWrap = styled.div`
  position: fixed;
  width: 40px;
  height: 40px;

  svg {
    width: 100%;
    height: 100%;
  }

  ${screen.below('768px', `
    width: 30px;
    height: 30px;
  `)}
`;

const ContactLink = styled(Link)`
  ${screen.below('768px', `
    position: absolute;
    top: 0;
    right: 20px;
    writing-mode: vertical-lr;
    white-space: nowrap;
  `)}
`;

const Header = () => (
  <SiteHeader>
    <Container>
      <SkipLink href="#main-content">Skip to Main Content</SkipLink>
      <Grid>
        <Grid.Item span={2}>
          <LogoWrap>
            <svg viewBox="0 0 800 800" width="800" height="800" xmlns="http://www.w3.org/2000/svg">
              <g fill="#fff" fillRule="evenodd">
                <path d="M725 125H125v675H50V125H0V50h50V0h75v50h675v371h-75V125z" />
                <path d="M675 250v550H175v-75h425V250H175v-75h500v75z" />
                <path d="M523 425h27v250h-75V500H175v-75h348zM417 300h54v75h-54zm79 0h54v75h-54z" />
              </g>
            </svg>
          </LogoWrap>
        </Grid.Item>
        <Grid.Item styles={gridItemStyles}>
          <nav arial-label="primary">
            <List>
              <ContactLink href="mailto:hello@jacobproffer.com">Contact</ContactLink>
            </List>
          </nav>
        </Grid.Item>
      </Grid>
    </Container>
  </SiteHeader>
);

export default Header;
