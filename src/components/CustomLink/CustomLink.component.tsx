import clsx from 'clsx';
import React from 'react';

import styles from './CostomLink.module.css';

enum LinkStyles {
  LEFT_ARROW = 'LEFT_ARROW',
  RIGHT_ARROW = 'RIGHT_ARROW',
}

interface CustomLinkProps
  extends Omit<React.LinkHTMLAttributes<HTMLAnchorElement>, 'className'> {
  link: string;
  variants?: keyof typeof LinkStyles;
  left_arrow_dark?: boolean;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  link,
  children,
  variants = null,
  left_arrow_dark = false,
  ...props
}) => {
  return (
    <a
      href={link}
      {...props}
      data-name="Learn more"
      className={clsx(styles.link, {
        [styles.leftArrow]: LinkStyles.LEFT_ARROW === variants,
        [styles.rightArrow]: LinkStyles.RIGHT_ARROW === variants,
        [styles.left_arrow_dark]: left_arrow_dark,
      })}
    >
      {children}
    </a>
  );
};

export default CustomLink;