import { useFormik } from 'formik';
import React from 'react';

import { formKeys } from '../../../constants';
import CustomButton from '../../CustomButton/CustomButton.component';
import CustomField from '../CustomField/CustomField.component';
import CustomCheckbox from '../CustomRadioButton/CustomRadioButton.component';
import CustomTextArea from '../CustomTextArea/CustomTextArea.component';
import styles from './Form.module.css';
import validationSchema from './validation';

enum RadioButtonVariant {
  HI = 'Say Hi',
  QUOTES = 'Get a Quote',
}

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
      variants: 'Say Hi',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      resetForm();
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className={styles.form}
    >
      <div role="group">
        <div className={styles.form_container}>
          <div className={styles.radioButtons_wrapper}>
            <CustomCheckbox
              name="variants"
              label={RadioButtonVariant.HI}
              id="hi"
              value={RadioButtonVariant.HI}
              onChange={formik.handleChange}
              checked={formik.values.variants === RadioButtonVariant.HI}
            />
            <CustomCheckbox
              name="variants"
              label={RadioButtonVariant.QUOTES}
              id="quote"
              value={RadioButtonVariant.QUOTES}
              onChange={formik.handleChange}
              checked={formik.values.variants === RadioButtonVariant.QUOTES}
            />
          </div>
          <div className={styles.fieldsWrapper}>
            <CustomField
              type="text"
              name={formKeys.NAME}
              placeholder="Name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              errors={formik.errors}
              touched={formik.touched}
            />
            <CustomField
              type="email"
              name={formKeys.EMAIL}
              placeholder="Email"
              label="Email*"
              value={formik.values.email}
              onChange={formik.handleChange}
              errors={formik.errors}
              touched={formik.touched}
            />
            <CustomTextArea
              name={formKeys.MESSAGE}
              placeholder="Message"
              label="Message*"
              value={formik.values.message}
              onChange={formik.handleChange}
              errors={formik.errors}
              touched={formik.touched}
            />
          </div>
        </div>
        <CustomButton variant="PRIMARY">Send Message</CustomButton>
      </div>
    </form>
  );
};

export default Form;
