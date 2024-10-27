import React from 'react';

import Highlighter from '../Highlighter/Highlighter.component';
import styles from './TitleContainer.module.css';

interface TitleContainerProps {
  title: string;
  children: React.ReactNode;
}

const TitleContainer: React.FC<TitleContainerProps> = ({ title, children }) => {
  return (
    <div className={styles.title_container}>
      <h2>
        <Highlighter fill="GREEN">{title}</Highlighter>
      </h2>
      <p>{children}</p>
    </div>
  );
};

export default TitleContainer;
