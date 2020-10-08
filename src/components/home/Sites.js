import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import screen from 'superior-mq';
import PropTypes from 'prop-types';
import { bp, hover } from '../../styles/helpers';
import Section from '../Section';
import Container from '../Container';
import Grid from '../Grid';
import SiteGrid from '../SiteGrid';
import InlineLink from '../InlineLink';
import UnstyledList from '../UnstyledList';

const siteList = [
  {
    id: 1,
    title: 'What is Jacob Playing',
    link: 'https://whatisjacobplaying.com/',
    description: 'Uses the Steam API to return data associated with my Steam account.',
    tag: 'React',
  },
  {
    id: 2,
    title: 'Weyland-Yutani',
    link: 'https://weyland-yutani.proffer.dev/',
    description: 'Conceptual website for a corporation featured in the Alien universe.',
    tag: 'Hugo',
  },
  {
    id: 3,
    title: 'Dead Man\'s Brew',
    link: 'https://tickets.proffer.dev/',
    description: 'On-going movie ticket collection, built using Hugo\'s data templates.',
    tag: 'Hugo',
  },
  {
    id: 4,
    title: 'AAN News',
    link: 'https://aan-news.proffer.dev/',
    description: 'Fictional news website for Bohemia Interactive\'s Arma 3.',
    tag: 'Hugo',
  },
  {
    id: 5,
    title: 'Personal Blog',
    link: 'https://jacobproffer.com/',
    description: 'Personal blog where I write about my travels and language studies.',
    tag: 'Hugo',
  },
];

const SitesGrid = styled(Grid)`
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;

  ${screen.below(bp.tablet, `
    grid-gap: 20px;
  `)}

  ${screen.below(bp.mobileSm, `
    grid-template-columns: 1fr;
  `)}
`;

const Site = styled(InlineLink)`
  position: relative;
  display: block;
  background-color: #001514;
  border: 2px solid rgba(255, 255, 255, .065);

  span,
  small {
    display: block;
  }

  p {
    margin-bottom: 0;
  }

  &::before {
    position: absolute;
    bottom: -8px;
    left: -8px;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.gray};
    transition: bottom 300ms ease-in-out;
    content: "";
  }

  ${props => hover(`
    small {
      color: ${props.theme.green};
    }

    &::before {
      bottom: 6px;
      background-color: ${props.theme.green};
    }
  `)}
`;

const SiteTitle = styled.span`
  padding: 20px;
  font-weight: 400;
  letter-spacing: .1rem;
  border-bottom: 2px solid rgba(255, 255, 255, .065);
`;

const SiteInfo = styled.div`
  padding: 20px;
`;

const SiteTag = styled.small`
  color: ${props => props.theme.red};
  font-size: ${rem(14)};
  font-weight: 200;
  transition: color 300ms ease-in-out;
`;

const Sites = ({ heading }) => (
  <Section as="aside">
    <SiteGrid as={Container}>

      {heading &&
        <SiteGrid.LeftCol>
          <header>
            <h2 id="sites">{heading}</h2>
          </header>
        </SiteGrid.LeftCol>
      }

      {siteList &&
        <SiteGrid.RightCol>
          <SitesGrid as={UnstyledList}>

            {siteList.map(item => (
              <UnstyledList.Item key={item.id} span={2} aria-labelledby="sites">
                <Site href={item.link}>
                  <SiteTitle>{item.title}</SiteTitle>
                  <SiteInfo>
                    <SiteTag>{item.tag}</SiteTag>

                    {item.description &&
                      <p>{item.description}</p>
                    }

                  </SiteInfo>

                </Site>
              </UnstyledList.Item>
            ))}

          </SitesGrid>
        </SiteGrid.RightCol>
      }

    </SiteGrid>
  </Section>
);

Sites.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Sites;
