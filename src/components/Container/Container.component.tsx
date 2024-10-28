import clsx from 'clsx';
import React from 'react';

import styles from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode;
  last?: boolean;
}

const Container: React.FC<ContainerProps> = ({ children, last = false }) => {
  return (
    <section className={styles.section}>
      <div
        className={clsx(styles.container, {
          [styles.last]: last,
        })}
      >
        {children}
      </div>
    </section>
  );
};

export default Container;
