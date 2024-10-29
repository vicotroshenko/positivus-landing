import React from 'react';

import styles from './FooterBasement.module.css';

const rightsData = {
  rights: '© 2023 Positivus. All Rights Reserved.',
  policy: 'Privacy Policy',
};

const FooterBasement = () => {
  return (
    <div className={styles.f_basement}>
      <p>{rightsData.rights}</p>
      <p>{rightsData.policy}</p>
    </div>
  );
};

export default FooterBasement;
