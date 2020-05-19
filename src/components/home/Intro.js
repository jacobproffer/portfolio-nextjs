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
import VisuallyHidden from '../VisuallyHidden';

const IntroSection = styled(Section)`
  h2 {
    text-transform: uppercase;
  }

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
`;

const Intro = ({ heading }) => (
  <IntroSection>
    <Container>
      <SiteGrid>

        {heading &&
          <SiteGrid.LeftCol>
            <VisuallyHidden as="header">
              <h2>{heading}</h2>
            </VisuallyHidden>
          </SiteGrid.LeftCol>
        }

        <SiteGrid.RightCol>
          <p>Hey there, I am Jacob. I am a
          front-end developer at <InlineLink href="https://elegantseagulls.com/">Elegant Seagulls</InlineLink> in
          Marquette, Michigan. I build websites that are accessible and usable.
          For the past four years, I have focused on custom WordPress themes with Advanced
          Custom Fields. Recently, I have grown a love for React and Hugo.</p>
          <p>When I am not coding, I study Japanese and trail run.</p>
        </SiteGrid.RightCol>

      </SiteGrid>
    </Container>
  </IntroSection>
);

Intro.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Intro;
