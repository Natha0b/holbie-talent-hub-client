'use client';
import React from 'react';
import { ButtonSubmit } from '$components/card/ButtonSubmit/ButtonSubmit';
import { listOfCities } from '$company/(pages)/find/profile/profile.data';
import { EnglishCard } from '$components/card/EnglishCard/EnglishCard';
import { TechCard } from '$components/card/TechCard/TechCard';
import { JobCard } from '$components/card/JobCard//JobCard';
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
                                listOfCities.map(city => (
                                    <option value={city} />
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