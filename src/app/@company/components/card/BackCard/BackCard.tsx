// component used for filters

'use client';
import React from 'react';
import { useRouter } from 'next/navigation'
import stylesModules from './BackCard.module.scss';
import Link from 'next/link';
import { Dropdown } from '$components/Dropdown/Dropdown';
import styles from '$/app/components/PrimaryButton/PrimaryButton.module.scss';
import { listOfCitiesIcons } from './BackCard.data';
import { jobKindIcons } from '../JobCard/JobCard.data';
import { Multiselector } from '$/app/components/Multiselector/Multiselector';
import { technologyIcons } from '../TechCard/TechCard.dada';
import { englishLevelIcons } from '../EnglishCard/EnglishCard.data';



/**
 * The BackCard component represents the back side of a card that displays additional information.
 * It is used in conjunction with a front card to create a card flip effect.
 *
 * @param kindJob - The type of job associated with the card.
 * @param active - Indicates whether the back card is active or not.
 */



const BackCard: React.FC<{ kindJob: string, active: boolean }> = ({ kindJob, active }) => {
    const router = useRouter()

    return (
        <aside className={`${stylesModules.card__back} ${active && stylesModules['card__back--active']}`}>
            <form className={stylesModules.form} action="edit-profile" method="post">
                <Dropdown label={'Location'} items={listOfCitiesIcons} onItemSelect={() => {
                }} />
                <Dropdown label="Kind Job" items={jobKindIcons} onItemSelect={() => {
                }} />
                <Multiselector label="Technology" items={technologyIcons} onSelectedItems={() => {
                }} />
                <Dropdown label="English Level" items={englishLevelIcons} onItemSelect={() => {
                }} />
                <Link href="/find/your-profiles" className={styles.primaryButton}>
                    To find
                </Link>
            </form>
        </aside>
    );
}

export { BackCard };  