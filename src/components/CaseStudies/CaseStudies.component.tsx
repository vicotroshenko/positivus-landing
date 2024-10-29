import React from 'react';

import { anchors } from '../../constants';
import Container from '../Container/Container.component';
import TitleContainer from '../TitleContainer/TitleContainer.component';
import styles from './CaseStudies.module.css';
import CaseStudiesDesktop from './CaseStudiesDesktop/CaseStudiesDesktop.component';
import CaseStudiesMobile from './CaseStudiesMobile/CaseStudiesMobile.component';
import data from './data';

const CaseStudies = () => {
  return (
    <Container anchor={anchors.CASES}>
      <TitleContainer title="Case Studies">
        <span className={styles.subtitle}>
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </span>
      </TitleContainer>
      <CaseStudiesMobile data={data} />
      <CaseStudiesDesktop data={data} />
    </Container>
  );
};

export default CaseStudies;
