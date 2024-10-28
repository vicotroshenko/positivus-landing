import React from 'react';

import Container from '../Container/Container.component';
import TitleContainer from '../TitleContainer/TitleContainer.component';
import styles from './WorkingProcess.module.css';
import WorkingProcessItem from './WorkingProcessItem/WorkingProcessItem.component';
import data from './data';

const WorkingProcess = () => {
  return (
    <Container>
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
            number={index + 1}
            key={item.title}
          />
        ))}
      </div>
    </Container>
  );
};

export default WorkingProcess;
