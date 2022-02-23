import React from 'react';
import styled from 'styled-components';
import screen from 'superior-mq';
import { rem } from 'polished';
import PropTypes from 'prop-types';
import { bp } from '../../styles/helpers';
import Section from '../Section';
import Container from '../Container';
import SiteGrid from '../SiteGrid';
import InlineLink from '../InlineLink';

const IntroSection = styled(Section)`
  p {
    font-size: ${rem(18)};
    line-height: 32px;

    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }

    ${screen.below(bp.mobile, `
      font-size: ${rem(16)};
    `)}
  }

  a {
    text-decoration: underline;
  }
`;

const Intro = ({ heading }) => (
  <IntroSection>
    <SiteGrid as={Container}>

      {heading &&
        <SiteGrid.LeftCol>
          <h2>{heading}</h2>
        </SiteGrid.LeftCol>
      }

      <SiteGrid.RightCol>
        <p>Hey there, my name is Jacob. For the past six years,
          I have helped build semantic WordPress and React websites as a
          front-end developer at <InlineLink href="https://elegantseagulls.com/">
          Elegant Seagulls</InlineLink> in Marquette, Michigan. I am an advocate
          for accessibility and
          strive to develop inclusive web experiences.</p>
        <p>In my free time, I run trails and study Japanese.</p>
      </SiteGrid.RightCol>

    </SiteGrid>
  </IntroSection>
);

Intro.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Intro;
