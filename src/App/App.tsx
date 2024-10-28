import React from 'react';

import {
  CaseStudies,
  ContactUs,
  Footer,
  ServiceSection,
  WorkingProcess,
} from '../components';

function App() {
  return (
    <main>
      <ServiceSection />
      <CaseStudies />
      <WorkingProcess />
      <ContactUs />
      <Footer />
    </main>
  );
}

export default App;
