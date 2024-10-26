import React from 'react';

import CustomButton from '../CustomButton/CustomButton.component';
import ProposalSvg from '../SVG/ServicesSection/ProposalSvg.component';
import styles from './Proposal.module.css';

const Proposal = () => {
  return (
    <section>
      <div>
        <div className={styles.proposal_container}>
          <div className={styles.main_content}>
            <h3>Let’s make things happen</h3>
            <p>
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <div className={styles.button_wrapper}>
              <CustomButton variant="PRIMARY">
                Get your free proposal
              </CustomButton>
            </div>
          </div>
          <div className={styles.proposal_svg}>
            <ProposalSvg />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proposal;
