'use client';
import React from 'react';
import { EnglishCard } from '$/app/@company/components/card/EnglishCard/EnglishCard';
import { TechCard } from '$/app/@company/components/card/TechCard/TechCard';
import { JobCard } from '$/app/@company/components/card/JobCard/JobCard';
import styles from './BackCard.module.scss';
import { Dropdown } from '$components/Dropdown/Dropdown';
import { listOfCitiesIcons } from './BackCard.data';
import { PrimaryButton } from '$components/PrimaryButton/PrimaryButton';
import { jobKindIcons } from '../JobCard/JobCard.data';
import { Multiselector } from '$/app/components/Multiselector/Multiselector';
import { technologyIcons } from '../TechCard/TechCard.dada';
import { englishLevelIcons } from '../EnglishCard/EnglishCard.data';

const BackCard: React.FC<{ kindJob: string, active: boolean }> = ({ kindJob, active }) => {
    
    return (
        <aside className={`${styles.card__back} ${active && styles['card__back--active']}`}>
            <form className={styles.form} action="edit-profile" method="post">
                <Dropdown label={'Location'} items={listOfCitiesIcons} onItemSelect={() => {
                }} />
                <Dropdown label="Kind Job" items={jobKindIcons} onItemSelect={() => {

                }} />
                <Dropdown label="Kind Job" items={jobKindIcons} onItemSelect={() => {
                }} />
                <Multiselector label="Technology" items={technologyIcons} onSelectedItems={() => {

                }} />
                <Dropdown label="English Level" items={englishLevelIcons} onItemSelect={() => {

                }} />
                <PrimaryButton label="To find" onClick={ () => {

                }} />
            </form>
        </aside>
    );
}

export { BackCard };