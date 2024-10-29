import clsx from 'clsx';
import React from 'react';

import CustomLink from '../../CustomLink/CustomLink.component';
import Highlighter from '../../Highlighter/Highlighter.component';
import styles from './ServiceItem.module.css';

export enum ServiceItemBg {
  GREY = 'GREY',
  GREEN = 'GREEN',
  DARK = 'DARK',
}

interface ServiceItemProps {
  title: string;
  children: React.ReactNode;
  item_bg?: keyof typeof ServiceItemBg;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  children,
  title,
  item_bg = 'GREY',
}) => {
  const markerColor = item_bg === ServiceItemBg.GREY ? 'GREEN' : 'WHITE';
  return (
    <li className={clsx(styles.item, styles[item_bg])}>
      <h3>
        <Highlighter fill={markerColor}>
          {title.split(' ').slice(0, -1).join(' ')}
        </Highlighter>
        <br />
        <Highlighter fill={markerColor}>
          {title.split(' ').slice(-1).join(' ')}
        </Highlighter>
      </h3>
      <div className={styles.link}>
        <CustomLink
          variants="LEFT_ARROW"
          link="#"
          left_arrow_dark={ServiceItemBg.DARK === item_bg}
        />
      </div>
      <div className={styles.item_svg}>{children}</div>
    </li>
  );
};

export default ServiceItem;
