import React from 'react';

import styles from './CustomTextArea.module.css';

interface CustomFieldProps
  extends Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    'className' | 'id'
  > {
  label?: string;
  errors?: { [x: string]: string };
  touched?: { [x: string]: boolean };
}

const CustomTextArea: React.FC<CustomFieldProps> = ({
  name = '',
  label,
  errors,
  touched,
  ...props
}) => {
  return (
    <>
      <div className={styles.textarea_wrapper}>
        <p>{label}</p>
        <textarea
          {...props}
          name={name}
          id={name}
          className={styles.textarea}
        ></textarea>
        {errors?.[name] && touched?.[name] && (
          <p className={styles.error}>{errors?.[name]}</p>
        )}
      </div>
    </>
  );
};

export default CustomTextArea;
