import clsx from 'clsx';
import React, { memo } from 'react';

import { platforms_data } from '../data';
import styles from './Platforms.module.css';

interface PlatformsProps {
  delay?: '1' | '2' | 1 | 2;
}
const Platforms: React.FC<PlatformsProps> = memo(({ delay }) => {
  return (
    <ul
      className={clsx(styles.platforms_list, {
        [styles[`delay_${delay}`]]: delay,
      })}
    >
      {platforms_data.map((platform) => (
        <li key={platform.name}>
          <img
            src={platform.logo}
            alt={platform.name}
          ></img>
        </li>
      ))}
    </ul>
  );
});

export default Platforms;
