import React from 'react';

import Container from '../Container/Container.component';
import Proposal from '../Proposal/Proposal.component';
import TitleContainer from '../TitleContainer/TitleContainer.component';
import ServiceItem, {
  ServiceItemBg,
} from './ServiceItem/ServiceItem.component';
import styles from './ServiceSection.module.css';
import data from './data';

const ServiceSection = () => {
  const getCardColor = () => {
    const colors = Object.keys(ServiceItemBg);
    let order: number = 0;
    const step = 3;
    return data.map((item) => {
      if (order + step > 5) order = 0;
      const newItem = { ...item, item_bg: colors[order] };
      order++;
      return newItem;
    });
  };

  return (
    <Container>
      <TitleContainer title="Services">
        <span className={styles.subtitle}>
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </span>
      </TitleContainer>
      <ul className={styles.items_list}>
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
};

export default ServiceSection;
