import clsx from 'clsx';
import React from 'react';

import styles from './CustomButton.module.css';

enum ButtonsStyle {
  PRIMARY = 'PRIMARY',
  OUTLINED = 'OUTLINED',
  SECONDARY = 'SECONDARY',
}

interface CustomButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  children?: React.ReactNode;
  variant: keyof typeof ButtonsStyle;
  onClick?: () => void;
  onSubmit?: () => void;
}
const CustomButton: React.FC<CustomButtonProps> = ({
  children = null,
  variant,
  onClick,
  onSubmit,
  ...props
}) => {
  return (
    <button
      {...props}
      onClick={onClick}
      onSubmit={onSubmit}
      className={clsx(styles.button, {
        [styles.outlined]: ButtonsStyle.OUTLINED === variant,
        [styles.primary]: ButtonsStyle.PRIMARY === variant,
        [styles.secondary]: ButtonsStyle.SECONDARY === variant,
      })}
    >
      {children}
    </button>
  );
};

export default CustomButton;
