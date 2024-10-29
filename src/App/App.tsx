import React, { LegacyRef } from 'react';

import {
  CaseStudies,
  ContactUs,
  Footer,
  Header,
  ServiceSection,
  WorkingProcess,
} from '../components';
import Hero from '../components/Hero/Hero.component';
import { useElementOnScreen } from '../hooks/useElementOnScreen';

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2,
};

function App() {
  const [section1Ref, isVisibleHero] = useElementOnScreen(options);
  const [section2Ref, isVisibleServiceSection] = useElementOnScreen(options);
  const [section3Ref, isVisibleCaseStudies] = useElementOnScreen(options);
  const [section4Ref, isVisibleWorkingProcess] = useElementOnScreen(options);
  const [section5Ref, isVisibleContactUs] = useElementOnScreen(options);

  const visibleElements = {
    isVisibleHero,
    isVisibleServiceSection,
    isVisibleCaseStudies,
    isVisibleWorkingProcess,
    isVisibleContactUs,
  };

  return (
    <>
      <Header visibleElements={visibleElements as { [x: string]: boolean }} />
      <main>
        <Hero
          ref={section1Ref as LegacyRef<HTMLElement> | undefined}
          isInView={isVisibleHero as boolean}
        />
        <ServiceSection
          ref={section2Ref as LegacyRef<HTMLElement> | undefined}
          isInView={isVisibleServiceSection as boolean}
        />
        <CaseStudies
          ref={section3Ref as LegacyRef<HTMLElement> | undefined}
          isInView={isVisibleCaseStudies as boolean}
        />
        <WorkingProcess
          ref={section4Ref as LegacyRef<HTMLElement> | undefined}
          isInView={isVisibleWorkingProcess as boolean}
        />
        <ContactUs
          ref={section5Ref as LegacyRef<HTMLElement> | undefined}
          isInView={isVisibleContactUs as boolean}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
