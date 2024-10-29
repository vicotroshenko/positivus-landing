import clsx from 'clsx';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { ReactComponent as CloseButtonIcon } from '../../assets/images/svg/cross.svg';
import { anchors } from '../../constants';
import { scrollToElement } from '../../utils';
import CustomButton from '../CustomButton/CustomButton.component';
import Logo from '../Logo/Logo.component';
import NavMenu from '../NavMenu/NavMenu.component';
import styles from './MobileMenu.module.css';

const modalRoot = document.querySelector('#modal-root');
interface MobileMenuProps {
  visible: boolean;
  toggle: () => void;
}
const MobileMenu: React.FC<MobileMenuProps> = ({ visible, toggle }) => {
  useEffect(() => {
    if (visible) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  }, [visible]);

  return modalRoot
    ? createPortal(
        <>
          <div
            className={clsx(styles.backdrop, {
              [styles.menu_shown]: visible,
            })}
          >
            <div className={styles.modal_container}>
              <button
                type="button"
                name="close menu"
                className={styles.button_close}
                aria-label="close the mobile menu"
                onClick={toggle}
              >
                <CloseButtonIcon />
              </button>
              <Logo />
              <NavMenu toggle={toggle} />
              <CustomButton
                variant="OUTLINED"
                onClick={() => scrollToElement(anchors.CONTACT)}
              >
                Request a quote
              </CustomButton>
            </div>
          </div>
        </>,
        modalRoot
      )
    : null;
};

export default MobileMenu;
