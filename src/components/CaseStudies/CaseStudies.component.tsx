import React from 'react';

import styles from './CaseStudies.module.css';
import CaseStudiesDesktop from './CaseStudiesDesktop/CaseStudiesDesktop.component';
import CaseStudiesMobile from './CaseStudiesMobile/CaseStudiesMobile.component';

const data = [
  {
    text: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
    link: '/',
    id: 1,
  },
  {
    text: 'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
    link: '/',
    id: 2,
  },
  {
    text: 'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
    link: '/',
    id: 3,
  },
];
const CaseStudies = () => {
  return (
    <section>
      <div>
        <CaseStudiesMobile data={data} />
        <CaseStudiesDesktop data={data} />
      </div>
    </section>
  );
};

export default CaseStudies;
