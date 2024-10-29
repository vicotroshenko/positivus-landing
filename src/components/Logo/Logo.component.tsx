import clsx from 'clsx';
import React, { memo } from 'react';

import { ReactComponent as LogoIcon } from '../../assets/images/svg/Logo.svg';
import styles from './Logo.module.css';

interface LogoProps {
  darkMode?: true;
}
const Logo: React.FC<LogoProps> = memo(({ darkMode = false }) => {
  return (
    <div>
      <a
        href="https://vicotroshenko.github.io/positivus-landing/"
        className={styles.logo_link}
      >
        <LogoIcon
          className={clsx(styles.logo, {
            [styles.dark]: darkMode,
          })}
        />
      </a>
    </div>
  );
});

export default Logo;
