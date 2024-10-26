import React from 'react';
// Import Swiper styles
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import CaseStudiesItem from '../CaseStudiesItem/CaseStudiesItem.component';
import styles from './CaseStudiesMobile.module.css';

interface CaseStudiesMobileProps {
  data: {
    text: string;
    id: number;
    link: string;
  }[];
}

const CaseStudiesMobile: React.FC<CaseStudiesMobileProps> = ({ data }) => {
  return (
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        wrapperTag="ul"
        className={styles.mobile_list}
      >
        {data.map((item) => (
          <SwiperSlide
            key={item.id}
            tag="li"
            className={styles.mobile_list_item}
          >
            <CaseStudiesItem link={item.link}>{item?.text}</CaseStudiesItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CaseStudiesMobile;
