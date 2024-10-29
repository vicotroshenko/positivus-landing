import React, { memo } from 'react';

import CaseStudiesItem from '../CaseStudiesItem/CaseStudiesItem.component';
import styles from './CaseStudiesDesktop.module.css';

interface CaseStudiesDesktopProps {
  data: {
    text: string;
    id: number;
    link: string;
  }[];
}
const CaseStudiesDesktop: React.FC<CaseStudiesDesktopProps> = memo(
  ({ data }) => {
    return (
      <ul className={styles.studies_desktop}>
        {data.map((item) => (
          <li key={item.id}>
            <CaseStudiesItem link={item.link}>{item.text}</CaseStudiesItem>
          </li>
        ))}
      </ul>
    );
  }
);

export default CaseStudiesDesktop;
