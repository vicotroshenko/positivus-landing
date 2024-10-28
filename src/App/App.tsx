import React from 'react';

import {
  CaseStudies,
  ContactUs,
  Footer,
  Header,
  ServiceSection,
  WorkingProcess,
} from '../components';

function App() {
  return (
    <main>
      <Header />
      <ServiceSection />
      <CaseStudies />
      <WorkingProcess />
      <ContactUs />
      <Footer />
    </main>
  );
}

export default App;
