import React from "react";
import styled from "styled-components";
import screen from "superior-mq";
import PropTypes from "prop-types";
import { bp } from "../../styles/helpers";
import Section from "../Section";
import Container from "../Container";
import UnstyledList from "../UnstyledList";
import { H2 } from "../H";
import Site from "./Site";

const siteList = [
  {
    id: 1,
    title: "What is Jacob Playing",
    link: "https://whatisjacobplaying.com/",
    description:
      "Uses the Steam API to return data associated with my Steam account.",
    tag: "Next",
  },
  {
    id: 2,
    title: "First Red Squadron",
    link: "https://firstredsquadron.com/",
    description: "Unit website for an Arma 3 military simulation team.",
    tag: "Hugo",
  },
  {
    id: 3,
    title: "Weyland-Yutani",
    link: "https://weyland-yutani.proffer.dev/",
    description:
      "Conceptual website for a corporation featured in the Alien universe.",
    tag: "Hugo",
  },
  {
    id: 4,
    title: "Dead Man's Brew",
    link: "https://tickets.proffer.dev/",
    description:
      "On-going movie ticket collection, built using Hugo's data templates.",
    tag: "Hugo",
  },
];

const SitesGrid = styled(UnstyledList)`
  --x-gap: clamp(1.25rem, calc(0.5rem + 3.75vw), 5rem);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--x-gap);

  ${screen.below(
    bp.mobileSm,
    `
    grid-template-columns: 1fr;
  `
  )}
`;

const SitesHeadline = styled(H2)`
  --headline-margin: clamp(1.56rem, calc(0.63rem + 4.69vw), 6.25rem);
  margin-bottom: var(--headline-margin);
`;

const Sites = ({ heading }) => (
  <Section>
    <Container>
      {heading && <SitesHeadline>{heading}</SitesHeadline>}

      {siteList && (
        <SitesGrid as={UnstyledList}>
          {siteList.map((item) => (
            <UnstyledList.Item key={item.id}>
              <Site
                title={item.title}
                link={item.link}
                tag={item.tag}
                description={item.description}
              />
            </UnstyledList.Item>
          ))}
        </SitesGrid>
      )}
    </Container>
  </Section>
);

Sites.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Sites;
