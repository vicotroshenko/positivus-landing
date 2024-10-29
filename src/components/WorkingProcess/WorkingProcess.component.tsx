import React, { forwardRef, useState } from 'react';

import { anchors } from '../../constants';
import Container from '../Container/Container.component';
import TitleContainer from '../TitleContainer/TitleContainer.component';
import styles from './WorkingProcess.module.css';
import WorkingProcessItem from './WorkingProcessItem/WorkingProcessItem.component';
import data from './data';

interface WorkingProcessProps {
  isInView?: boolean;
}
const WorkingProcess = forwardRef<HTMLElement, WorkingProcessProps>(
  ({ isInView }, ref) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggle = (index: number | null) => {
      if (index === activeIndex) {
        return setActiveIndex(null);
      }
      setActiveIndex(index);
    };
    return (
      <Container
        anchor={anchors.PRICING}
        ref={ref}
        isInView={isInView}
      >
        <TitleContainer title={data.mainTitle}>
          <span className={styles.subtitle}>{data.subtitle}</span>
        </TitleContainer>
        <div className={styles.content_wrapper}>
          {data.cards.map((item, index) => (
            <WorkingProcessItem
              title={item.title}
              text={item.text}
              activeIndex={activeIndex}
              number={index + 1}
              key={item.title}
              toggle={toggle}
            />
          ))}
        </div>
      </Container>
    );
  }
);

export default WorkingProcess;
