import clsx from 'clsx';
import React, { memo } from 'react';

import { anchors } from '../../constants';
import styles from './NavMenu.module.css';

const navItems = [
  { name: 'About us', anchor: anchors.ABOUT },
  { name: 'Services', anchor: anchors.SERVICES },
  { name: 'Use Cases', anchor: anchors.CASES },
  { name: 'Pricing', anchor: anchors.PRICING },
];

interface NavMenuProps {
  darkMode?: boolean;
  toggle?: () => void;
  visibleElements?: { [x: string]: boolean };
}
const NavMenu: React.FC<NavMenuProps> = memo(
  ({ darkMode = false, toggle, visibleElements }) => {
    return (
      <nav
        className={clsx(styles.nav, {
          [styles.dark]: darkMode,
        })}
      >
        <ul className={styles.list}>
          {navItems.map(({ name, anchor }, index) => (
            <li
              key={anchor}
              className={clsx(styles.item, {
                [styles.active]: Object.values(visibleElements ?? {})[index],
              })}
              onClick={toggle}
            >
              <a href={`#${anchor}`}>{name}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
);

export default NavMenu;
