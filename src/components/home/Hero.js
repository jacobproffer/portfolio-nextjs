import React from 'react';
import styled from 'styled-components';
import screen from 'superior-mq';
import PropTypes from 'prop-types';
import { bp } from '../../styles/helpers';
import Container from '../Container';
import Grid from '../Grid';
import { H1 } from '../H';
import VisuallyHidden from '../VisuallyHidden';

const HeroBlock = styled.div`
  padding: 100px 0 182px;

  ${screen.below(bp.laptopSm, `
    padding: 75px 0 136px;
  `)}

  ${screen.below(bp.tablet, `
    padding: 50px 0 91px;
  `)}

  ${screen.below(bp.mobile, `
    padding: 25px 0 65px;
  `)}
`;

const Image = styled(Grid.Item)`
  position: relative;
  background-color: ${props => props.theme.red};
  grid-column: 4 / span 4;

  &::before {
    position: absolute;
    bottom: -6px;
    left: -6px;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.gray};
    content: '';
  }

  ${screen.below(bp.mobile, `
    grid-column: 3 / span 6;
  `)}
`;

const Figure = styled.div`
  position: relative;
  width: 100%;

  img {
    display: block;
    mix-blend-mode: soft-light;
  }
`;

const Heading = styled(H1)`
  position: absolute;
  top: 50%;
  right: -75px;
  font-weight: 700;
  transform: translateY(-50%);
  writing-mode: vertical-lr;
  white-space: nowrap;

  ${screen.below(bp.laptopSm, `
    right: -57px;
  `)}

  ${screen.below(bp.tablet, `
    right: -38px;
  `)}

  ${screen.below(bp.mobileSm, `
    right: -19px;
  `)}
`;

const Hero = ({ image, imageAlt, heading }) => (
  <HeroBlock>
    <Container>
      <Grid>
        <Image>

          {image &&
            <Figure>
              <img src={image} alt={imageAlt} />
            </Figure>
          }

          {heading &&
            <header>
              <Heading lang="ja" as="span" aria-hidden="true">
                {heading}
              </Heading>
              <VisuallyHidden as="h1">Web Developer</VisuallyHidden>
            </header>
          }

        </Image>
      </Grid>
    </Container>
  </HeroBlock>
);

Hero.propTypes = {
  heading: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
};

export default Hero;
