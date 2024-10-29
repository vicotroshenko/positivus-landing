import React, { forwardRef } from 'react';

import { anchors } from '../../constants';
import Container from '../Container/Container.component';
import TitleContainer from '../TitleContainer/TitleContainer.component';
import styles from './CaseStudies.module.css';
import CaseStudiesDesktop from './CaseStudiesDesktop/CaseStudiesDesktop.component';
import CaseStudiesMobile from './CaseStudiesMobile/CaseStudiesMobile.component';
import data from './data';

interface CaseStudiesProps {
  isInView?: boolean;
}
const CaseStudies = forwardRef<HTMLElement, CaseStudiesProps>(
  ({ isInView }, ref) => {
    return (
      <Container
        anchor={anchors.CASES}
        ref={ref}
        isInView={isInView}
      >
        <TitleContainer title={data.mainTitle}>
          <span className={styles.subtitle}>{data.subtitle}</span>
        </TitleContainer>
        <CaseStudiesMobile data={data.cards} />
        <CaseStudiesDesktop data={data.cards} />
      </Container>
    );
  }
);

export default CaseStudies;
