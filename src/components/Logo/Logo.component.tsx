import clsx from 'clsx';
import React from 'react';

import { ReactComponent as LogoIcon } from '../../assets/images/svg/Logo.svg';
import styles from './Logo.module.css';

interface LogoProps {
  darkMode?: true;
}
const Logo: React.FC<LogoProps> = ({ darkMode = false }) => {
  return (
    <div>
      <a
        href="/"
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
};

export default Logo;
