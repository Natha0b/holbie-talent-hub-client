import React, { useState } from 'react';
import { englishLevel } from '../../(company)/(pages)/find/profile/profile.data'
import styles from '../styles/EnglishCard.module.css'

const EnglishCard = () => {

  return (
    <section className={styles.form__english}>
      <label htmlFor="">English Level</label>
      <input type='text' list='englishLevel' name="" id="" />
      <datalist id="englishLevel">
        {
            englishLevel.map(Level => (
                <option value={Level} />
            ))
        }
      </datalist>
    </section>
  );
};

export { EnglishCard };
