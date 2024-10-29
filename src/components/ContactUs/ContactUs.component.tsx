import React, { forwardRef } from 'react';

import { anchors } from '../../constants';
import Container from '../Container/Container.component';
import ContactUsSVG from '../SVG/ContactUs/ContactUsSVG/ContactUsSVG.component';
import TitleContainer from '../TitleContainer/TitleContainer.component';
import styles from './ContactUs.module.css';
import Form from './Form/Form.component';

interface ContactUsProps {
  isInView?: boolean;
}
const ContactUs = forwardRef<HTMLElement, ContactUsProps>(
  ({ isInView }, ref) => {
    return (
      <Container
        last
        anchor={anchors.CONTACT}
        ref={ref}
        isInView={isInView}
      >
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
  }
);

export default ContactUs;
