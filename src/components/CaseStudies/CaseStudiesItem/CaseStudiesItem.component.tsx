import React from 'react';

import CustomLink from '../../CustomLink/CustomLink.component';
import styles from './CaseStudiesItem.module.css';

interface CaseStudiesItemProps {
  link: string;
  children: React.ReactNode;
}
const CaseStudiesItem: React.FC<CaseStudiesItemProps> = ({
  link,
  children,
}) => {
  return (
    <div className={styles.item_content}>
      <p>{children}</p>
      <CustomLink
        variants="RIGHT_ARROW"
        link={link}
      />
    </div>
  );
};

export default CaseStudiesItem;
