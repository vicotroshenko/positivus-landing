import React from 'react';

import styles from './CustomRadioButton.module.css';

interface CustomCheckboxProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'className' | 'id'
  > {
  label?: string;
  name: string;
  id: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label,
  name,
  id,
  ...props
}) => {
  return (
    <div className={styles.container}>
      <label
        htmlFor={id}
        className={styles.label}
      >
        <input
          type="radio"
          id={id}
          name={name}
          {...props}
          className={styles.radioButton}
        />
        <span className={styles.custom_radioButton}></span>
        {label}
      </label>
    </div>
  );
};

export default CustomCheckbox;
