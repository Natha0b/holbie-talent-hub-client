import React, { useState } from 'react';
import { jobKind } from '../../(company)/(pages)/find/profile/profile.data'
import styles from '../styles/JobCard.module.css'

const JobCard = () => {

  return (
    <section className={styles.form__job}>
      <label htmlFor="">Kind Job</label>
      <input type='text' list='jobKind ' name="" id="" />
      <datalist id="jobKind ">
        {
            jobKind .map(Job => (
                <option value={Job} />
            ))
        }
      </datalist>
    </section>
  );
};

export { JobCard};
