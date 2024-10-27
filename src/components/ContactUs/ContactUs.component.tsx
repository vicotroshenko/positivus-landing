import React from 'react';

import ContactUsSVG from '../SVG/ContactUs/ContactUsSVG/ContactUsSVG.component';
import TitleContainer from '../TitleContainer/TitleContainer.component';
import styles from './ContactUs.module.css';
import Form from './Form/Form.component';

const ContactUs = () => {
  return (
    <section>
      <div>
        <TitleContainer title="Contact Us">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </TitleContainer>
        <div className={styles.wrapper}>
          <Form />
          <div className={styles.decor_image}>
            <ContactUsSVG />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
