import React from 'react';

import Container from '../Container/Container.component';
import ContactUsSVG from '../SVG/ContactUs/ContactUsSVG/ContactUsSVG.component';
import TitleContainer from '../TitleContainer/TitleContainer.component';
import styles from './ContactUs.module.css';
import Form from './Form/Form.component';

const ContactUs = () => {
  return (
    <Container last>
      <TitleContainer title="Contact Us">
        <span className={styles.subtitle}>
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </span>
      </TitleContainer>
      <div className={styles.wrapper}>
        <Form />
        <div className={styles.decor_image}>
          <ContactUsSVG />
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
