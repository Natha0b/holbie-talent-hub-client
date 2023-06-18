import React from 'react';
import { englishLevel } from '$company/(pages)/find/profile/profile.data'
import styles from './EnglishCard.module.scss'

const EnglishCard = () => {

  return (
    <section className={styles.form__english}>
      <label htmlFor="">English Level</label>
      <input type='text' list='englishLevel' name="" id="" />
      <datalist id="englishLevel">
        {
            englishLevel.map((Level, key) => (
                <option value={Level} key={key} />
            ))
        }
      </datalist>
    </section>
  );
};

export { EnglishCard };
