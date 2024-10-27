import React from 'react';

import styles from './CustomField.module.css';

interface CustomFieldProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'className' | 'id'
  > {
  label?: string;
  errors?: { [x: string]: string };
  touched?: { [x: string]: boolean };
}

const CustomField: React.FC<CustomFieldProps> = ({
  name = '',
  label,
  errors,
  touched,
  ...props
}) => {
  return (
    <>
      <div className={styles.custom_field}>
        <label htmlFor={name}>{label}</label>
        <input
          {...props}
          name={name}
          id={name}
          className={styles.field}
        />
        {errors?.[name] && touched?.[name] && (
          <p className={styles.error}>{errors?.[name]}</p>
        )}
      </div>
    </>
  );
};

export default CustomField;
