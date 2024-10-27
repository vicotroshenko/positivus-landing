import clsx from 'clsx';
import React, { useState } from 'react';

import minusIcon from '../../../assets/images/png/minus.png';
import plusIcon from '../../../assets/images/png/plus.png';
import styles from './WorkingProcessItem.module.css';

interface WorkingProcessItemProps {
  title: string;
  text: string;
  number: string | number;
}

const WorkingProcessItem: React.FC<WorkingProcessItemProps> = ({
  title,
  text,
  number,
}) => {
  const [active, setActive] = useState(false);

  const handleButtonClick = () => setActive((prev) => !prev);
  return (
    <li
      className={styles.accordion}
      onClick={handleButtonClick}
      style={
        {
          '--url': active
            ? `url(${minusIcon}) #fff`
            : `url(${plusIcon}) #f3f3f3`,
        } as React.CSSProperties
      }
      aria-label="Click to open accordion item"
    >
      <h2 data-number={`0${number}`}>{title}</h2>
      <div
        className={clsx(styles.accordion_text, {
          [styles.accordion_text_active]: active,
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
