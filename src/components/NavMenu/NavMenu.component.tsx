import clsx from 'clsx';
import React from 'react';

import { anchors } from '../../constants';
import styles from './NavMenu.module.css';

const navItems = [
  { name: 'About us', anchor: anchors.ABOUT },
  { name: 'Services', anchor: anchors.SERVICES },
  { name: 'Use Cases', anchor: anchors.CASES },
  { name: 'Pricing', anchor: anchors.PRICING },
  { name: 'Blog', anchor: anchors.BLOG },
];

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
        {navItems.map(({ name, anchor }) => (
          <li
            key={anchor}
            className={styles.item}
          >
            <a href={`#${anchor}`}>{name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
