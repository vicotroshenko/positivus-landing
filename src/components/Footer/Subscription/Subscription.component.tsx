import React from 'react';

import CustomField from '../../ContactUs/CustomField/CustomField.component';
import CustomButton from '../../CustomButton/CustomButton.component';
import styles from './Subscription.module.css';

const Subscription = () => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { email } = e.target as typeof e.target & {
      email: { value: string };
    };
    alert(`Thank you ${email.value} for subscription`);
    email.value = '';
  };
  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <div role="group">
        <CustomField
          type="email"
          name="email"
          placeholder="Email"
          transparent
          required
        />
        <CustomButton
          type="submit"
          variant="SECONDARY"
        >
          Subscribe to news
        </CustomButton>
      </div>
    </form>
  );
};

export default Subscription;
