import React from 'react';

import Highlighter from '../../Highlighter/Highlighter.component';
import styles from './Contacts.module.css';

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <h4>
        <Highlighter fill="GREEN">Contact us</Highlighter>
      </h4>
      <ul className={styles.contacts_list}>
        <li>
          <a href="mailto:info@positivus.com">Email: info@positivus.com</a>
        </li>
        <li>
          <a href="tel:555-567-8901">Phone: 555-567-8901</a>
        </li>
        <li>
          <a href="tel:555-567-8901">
            Address: 1234 Main St Moonstone City, Stardust State 12345
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
