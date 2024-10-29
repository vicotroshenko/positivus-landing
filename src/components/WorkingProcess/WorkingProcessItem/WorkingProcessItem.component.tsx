import clsx from 'clsx';
import React from 'react';

import minusIcon from '../../../assets/images/png/minus.png';
import plusIcon from '../../../assets/images/png/plus.png';
import styles from './WorkingProcessItem.module.css';

interface WorkingProcessItemProps {
  title: string;
  text: string;
  number: string | number;
  activeIndex?: number;
  toggle: (index: number | undefined) => void;
}

const WorkingProcessItem: React.FC<WorkingProcessItemProps> = ({
  title,
  text,
  number,
  activeIndex,
  toggle,
}) => {
  return (
    <li
      className={clsx(styles.accordion, {
        [styles.bg_active]: activeIndex === +number - 1,
      })}
      onClick={() => toggle(+number - 1)}
      style={
        {
          '--url':
            activeIndex === +number - 1
              ? `url(${minusIcon}) #ffffff`
              : `url(${plusIcon}) #f3f3f3`,
        } as React.CSSProperties
      }
      aria-label="Click to open accordion item"
    >
      <h2 data-number={`0${number}`}>{title}</h2>
      <div
        className={clsx(styles.accordion_text, {
          [styles.accordion_text_active]: activeIndex === +number - 1,
        })}
      >
        <div className={styles.accordion_content}>
          <div className={styles.divider}></div>
          <p>{text}</p>
        </div>
      </div>
    </li>
  );
};

export default WorkingProcessItem;
