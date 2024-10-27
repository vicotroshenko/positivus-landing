import React from 'react';

import Logo from '../Logo/Logo.component';
import NavMenu from '../NavMenu/NavMenu.component';
import Contacts from './Contacts/Contacts.component';
import styles from './Footer.module.css';
import FooterBasement from './FooterBasement/FooterBasement.component';
import SocialMediaIcons from './SocialMediaIcons/SocialMediaIcons.component';
import Subscription from './Subscription/Subscription.component';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <Logo darkMode />
          <NavMenu darkMode />
          <Contacts />
          <Subscription />
          <SocialMediaIcons />
          <div className={styles.divider}></div>
          <FooterBasement />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
