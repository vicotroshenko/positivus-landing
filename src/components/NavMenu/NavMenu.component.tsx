import clsx from 'clsx';
import React from 'react';

import styles from './NavMenu.module.css';

const navItems = ['About us', 'Services', 'Use Cases', 'Pricing', 'Blog'];

interface NavMenuProps {
  darkMode?: boolean;
}
const NavMenu: React.FC<NavMenuProps> = ({ darkMode = false }) => {
  return (
    <nav
      className={clsx(styles.nav, {
        [styles.dark]: darkMode,
      })}
    >
      <ul className={styles.list}>
        {navItems.map((item) => (
          <li
            key={item}
            className={styles.item}
          >
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
