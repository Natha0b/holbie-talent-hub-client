'use client';
import React from 'react';
import { listOfCities } from '../../(company)/(pages)/find/profile/profile.data'
import { JobCard } from './JobCard'
import { TechCard } from '@/app/components/card/TechCard';
import { EnglishCard } from '@/app/components/card/EnglishCard';
import { ButtonSubmit } from './ButtonSubmit'
import styles from '../styles/BackCard.module.css'

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