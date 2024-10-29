import React, { forwardRef } from 'react';

import { anchors } from '../../constants';
import CustomButton from '../CustomButton/CustomButton.component';
import HeroSvg from '../SVG/Hero/HeroSvg.component';
import styles from './Hero.module.css';
import Platforms from './Platforms/Platforms.component';
import { data } from './data';

interface HeroProps {
  isInView?: boolean;
}

const Hero = forwardRef<HTMLElement, HeroProps>(({ isInView }, ref) => {
  return (
    <section
      className={styles.hero}
      id={anchors.ABOUT}
      ref={ref}
    >
      <div className={styles.container}>
        <div className={styles.content_wrapper}>
          <h1>{data.title}</h1>
          <div className={styles.hero_image}>
            <HeroSvg />
          </div>
          <p>{data.subtitle}</p>
          <CustomButton variant="PRIMARY">{data.button}</CustomButton>
        </div>
        <div className={styles.platforms_container}>
          <Platforms />
          <Platforms delay={1} />
        </div>
      </div>
    </section>
  );
});

export default Hero;
