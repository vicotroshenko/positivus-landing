import React from 'react';

import {
  CaseStudies,
  ContactUs,
  Footer,
  Header,
  ServiceSection,
  WorkingProcess,
} from '../components';
import Hero from '../components/Hero/Hero.component';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServiceSection />
        <CaseStudies />
        <WorkingProcess />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
