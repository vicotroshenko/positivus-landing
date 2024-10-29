import clsx from 'clsx';
import React, { forwardRef } from 'react';

import styles from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode;
  last?: boolean;
  anchor?: string;
  isInView?: boolean;
}

const Container = forwardRef<HTMLElement, ContainerProps>(
  ({ children, last = false, anchor = '', isInView }, ref) => {
    return (
      <section
        className={clsx(styles.section, {
          [styles.inView]: isInView,
        })}
        id={anchor}
        ref={ref}
      >
        <div
          className={clsx(styles.container, {
            [styles.last]: last,
          })}
        >
          {children}
        </div>
      </section>
    );
  }
);

export default Container;
