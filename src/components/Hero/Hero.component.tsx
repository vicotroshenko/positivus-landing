import React from 'react';

import CustomButton from '../CustomButton/CustomButton.component';
import HeroSvg from '../SVG/Hero/HeroSvg.component';
import styles from './Hero.module.css';
import Platforms from './Platforms/Platforms.component';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content_wrapper}>
          <h1>Navigating the digital landscape for success</h1>
          <div className={styles.hero_image}>
            <HeroSvg />
          </div>
          <p>
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <CustomButton variant="PRIMARY">Book a consultation</CustomButton>
        </div>
        <div className={styles.platforms_container}>
          <Platforms />
          <Platforms delay={1} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
