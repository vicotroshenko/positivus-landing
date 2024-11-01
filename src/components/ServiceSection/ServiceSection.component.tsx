import clsx from 'clsx';
import React, { forwardRef } from 'react';

import { anchors } from '../../constants';
import Container from '../Container/Container.component';
import Proposal from '../Proposal/Proposal.component';
import TitleContainer from '../TitleContainer/TitleContainer.component';
import ServiceItem, {
  ServiceItemBg,
} from './ServiceItem/ServiceItem.component';
import styles from './ServiceSection.module.css';
import data from './data';

interface ServiceSectionProps {
  isInView?: boolean;
}

const ServiceSection = forwardRef<HTMLElement, ServiceSectionProps>(
  ({ isInView }, ref) => {
    const getCardColor = () => {
      const colors = Object.keys(ServiceItemBg);
      let order: number = 0;
      const step = 3;
      return data.cards.map((item) => {
        if (order + step > 5) order = 0;
        const newItem = { ...item, item_bg: colors[order] };
        order++;
        return newItem;
      });
    };

    return (
      <Container
        anchor={anchors.SERVICES}
        ref={ref}
        isInView={isInView}
      >
        <TitleContainer title={data.mainTitle}>
          <span className={styles.subtitle}>{data.subtitle}</span>
        </TitleContainer>
        <ul
          className={clsx(styles.items_list, {
            [styles.inView]: isInView,
          })}
        >
          {getCardColor().map(({ title, Img, item_bg }) => (
            <ServiceItem
              title={title}
              key={title}
              item_bg={item_bg as keyof typeof ServiceItemBg}
            >
              <Img />
            </ServiceItem>
          ))}
        </ul>
        <Proposal />
      </Container>
    );
  }
);

export default ServiceSection;
