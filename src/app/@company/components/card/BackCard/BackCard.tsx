'use client';
import React from 'react';
import { ButtonSubmit } from '$/app/@company/components/card/ButtonSubmit/ButtonSubmit';
import { listOfCities } from '$company/(pages)/find/profile/profile.data';
import { EnglishCard } from '$/app/@company/components/card/EnglishCard/EnglishCard';
import { TechCard } from '$/app/@company/components/card/TechCard/TechCard';
import { JobCard } from '$/app/@company/components/card/JobCard/JobCard';
import styles from './BackCard.module.scss';

const BackCard: React.FC<{ kindJob: string, active: boolean }> = ({ kindJob, active}) => {
    return (
            <aside className={`${styles.card__back} ${active && styles['card__back--active']}`}>
                <form className= {styles.form}  action="edit-profile" method="post">
                    <section className={styles.form__item}>
                        <label htmlFor="">Location</label>
                        <input type="text" list='locations' name="" id="" />
                        <datalist id="locations">
                            {
                                listOfCities.map((city, key) => (
                                    <option value={city} key={key} />
                                ))
                            }
                        </datalist>
                    </section>
                    <JobCard />
                    <TechCard />
                    <EnglishCard />
                    <ButtonSubmit />
                </form>
            </aside>
    )
}

export { BackCard };