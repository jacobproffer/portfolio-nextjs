import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section';
import Container from '../Container';
import SiteGrid from '../SiteGrid';
import { H2 } from '../H';
import VisuallyHidden from '../VisuallyHidden';

const Education = ({ heading }) => (
  <Section>
    <SiteGrid as={Container}>

      {heading &&
        <SiteGrid.LeftCol>
          <H2>{heading}</H2>
        </SiteGrid.LeftCol>
      }

      <SiteGrid.RightCol>
        <dl>
          <VisuallyHidden as="dt">University</VisuallyHidden>
          <dd>Northern Michigan University</dd>
          <VisuallyHidden as="dt">Degree</VisuallyHidden>
          <dd>Bachelor of Fine Arts, Computer Art</dd>
          <VisuallyHidden as="dt">Years of Study</VisuallyHidden>
          <VisuallyHidden as="dt">Honors</VisuallyHidden>
          <dd>Magna Cum Laude</dd>
          <dd>
            <time>2010 - 2014</time>
          </dd>
        </dl>
      </SiteGrid.RightCol>

    </SiteGrid>
  </Section>
);

Education.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Education;
