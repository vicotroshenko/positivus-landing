import React from 'react';

import Highlighter from '../../Highlighter/Highlighter.component';
import styles from './Contacts.module.css';

const contacts = {
  email: 'Email: info@positivus.com',
  tel: 'Phone: 555-567-8901',
  address: 'Address: 1234 Main St Moonstone City, Stardust State 12345',
};

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <h4>
        <Highlighter fill="GREEN">Contact us</Highlighter>
      </h4>
      <ul className={styles.contacts_list}>
        <li>
          <a href="mailto:info@positivus.com">{contacts.email}</a>
        </li>
        <li>
          <a href="tel:555-567-8901">{contacts.tel}</a>
        </li>
        <li>
          <a href="/">{contacts.address}</a>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
