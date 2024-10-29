import clsx from 'clsx';
import React, { memo, useState } from 'react';

import { ReactComponent as BurgerIcon } from '../../assets/images/svg/burger_menu.svg';
import { anchors } from '../../constants';
import { scrollToElement } from '../../utils';
import CustomButton from '../CustomButton/CustomButton.component';
import Logo from '../Logo/Logo.component';
import MobileMenu from '../MobileMenu/MobileMenu.component';
import NavMenu from '../NavMenu/NavMenu.component';
import styles from './Header.module.css';

interface HeaderProps {
  visibleElements?: { [x: string]: boolean };
}

const Header: React.FC<HeaderProps> = memo(({ visibleElements }) => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggle = () => setVisible((prev) => !prev);
  return (
    <>
      <MobileMenu
        visible={visible}
        toggle={toggle}
      />
      <header
        className={clsx(styles.header, {
          [styles.hidden]: visible,
        })}
      >
        <div className={styles.container}>
          <Logo />
          <div className={styles.navMenu_wrapper}>
            <NavMenu visibleElements={visibleElements} />
            <div className={styles.button_wrapper}>
              <CustomButton
                variant="OUTLINED"
                onClick={() => scrollToElement(anchors.CONTACT)}
              >
                Request a quote
              </CustomButton>
            </div>
          </div>
          <button
            type="button"
            name="menu"
            aria-label="open mobile menu"
            onClick={toggle}
            className={styles.button_burger}
          >
            <BurgerIcon aria-label="burger menu icon" />
          </button>
        </div>
      </header>
    </>
  );
});

export default Header;
