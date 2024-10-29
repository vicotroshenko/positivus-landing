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
    const [activeIndex, setActiveIndex] = useState<number>();

    const toggle = (index: number | undefined) => {
      setActiveIndex(index);
    };
    return (
      <Container
        anchor={anchors.PRICING}
        ref={ref}
        isInView={isInView}
      >
        <TitleContainer title="Our Working Process ">
          <span className={styles.subtitle}>
            Step-by-Step Guide to Achieving Your Business Goals
          </span>
        </TitleContainer>
        <div className={styles.content_wrapper}>
          {data.map((item, index) => (
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
