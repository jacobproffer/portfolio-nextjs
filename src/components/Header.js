import React from 'react';
import styled from 'styled-components';
import screen from 'superior-mq';
import { bp } from '../styles/helpers';
import Container from './Container';
import Grid from './Grid';
import Link from './Link';

const SiteHeader = styled(Container)`
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 1;
  width: 100%;
  padding: 100px 40px;
  transform: translateX(-50%);

  ${screen.below(bp.laptopSm, `
    padding: 75px 40px;
  `)}

  ${screen.below(bp.tablet, `
    position: relative;
    padding: 50px 25px;
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

const StyledGrid = styled(Grid)`
  grid-template-columns: 40px max-content;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrap = styled.div`
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

const Header = () => (
  <SiteHeader as="header">
    <SkipLink href="#main-content">Skip to Main Content</SkipLink>
    <StyledGrid>
      <LogoWrap aria-hidden="true">
        <svg
          viewBox="0 0 800 800"
          width="800"
          height="800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#fff" fillRule="evenodd">
            <path d="M725 125H125v675H50V125H0V50h50V0h75v50h675v371h-75V125z" />
            <path d="M675 250v550H175v-75h425V250H175v-75h500v75z" />
            <path d="M523 425h27v250h-75V500H175v-75h348zM417 300h54v75h-54zm79 0h54v75h-54z" />
          </g>
        </svg>
      </LogoWrap>
      <div>
        <Link href="mailto:jacob@proffer.dev">Contact</Link>
      </div>
    </StyledGrid>
  </SiteHeader>
);

export default Header;
