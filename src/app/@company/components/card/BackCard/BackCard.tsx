// component used for filters

'use client';
import React, { useEffect } from 'react';
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
import { ProfileFake } from '$/app/@company/(pages)/find/profile/page';
import { Skill } from '../../UserProfile/Levels/Levels';
import { IDropdownItem } from '$/app/components/Dropdown/Dropdown.type';
import { set } from 'date-fns';



/**
 * The BackCard component represents the back side of a card that displays additional information.
 * It is used in conjunction with a front card to create a card flip effect.
 *
 * @param kindJob - The type of job associated with the card.
 * @param active - Indicates whether the back card is active or not.
 */



const BackCard: React.FC<{ profile: ProfileFake, active: boolean }> = ({ profile, active }) => {
    const router = useRouter()

    const [item_kind_job, setItem_kind_job] = React.useState(jobKindIcons.find(({ value }) => value === profile.kind_job));
    const [item_location, setItem_location] = React.useState(listOfCitiesIcons.find(({ value }) => value === profile.location));
    const [item_skills, setItem_skills] = React.useState<(Skill & IDropdownItem)[]>([]);
    const [item_english_level, setItem_english_level] = React.useState(undefined);

    useEffect(() => {
        Promise.all(profile.skills.map(skill => fetch(`https://recruitment-system-production.up.railway.app/api/v1/skills/${skill}`)
            .then(response => response.json() as Promise<Skill>)
            .then(data => ({ ...data, ...technologyIcons.find(({ name }) => name === data.name) }) as Skill & IDropdownItem)
        )).then(data => setItem_skills(data));
        setItem_english_level(undefined);
    }, []);

    useEffect(() => {
        setItem_kind_job(jobKindIcons.find(({ value }) => value === profile.kind_job));
        setItem_location(listOfCitiesIcons.find(({ value }) => value === profile.location));
        setItem_skills([]);
        Promise.all(profile.skills.map(skill => fetch(`https://recruitment-system-production.up.railway.app/api/v1/skills/${skill}`)
            .then(response => response.json() as Promise<Skill>)
            .then(data => ({ ...data, ...technologyIcons.find(({ name }) => name === data.name) }) as Skill & IDropdownItem)
        )).then(data => setItem_skills(data));
        setItem_english_level(undefined);
    }, [profile]);


    return (
        <aside className={`${stylesModules.card__back} ${active && stylesModules['card__back--active']}`}>
            <form className={stylesModules.form} action="edit-profile" method="post">
                <Dropdown label={'Location'} initial={item_location} items={listOfCitiesIcons} onItemSelect={(item_location) => setItem_location(item_location)} />
                <Dropdown label="Kind Job" initial={item_kind_job} items={jobKindIcons} onItemSelect={(item_kind_job) => setItem_kind_job(item_kind_job)} />
                <Multiselector label="Technology" initial={item_skills} items={technologyIcons} onSelectedItems={() => {
                }} />
                <Dropdown label="English Level" initial={item_english_level} items={englishLevelIcons} onItemSelect={() => {
                }} />
                <Link href={`/find/your-profiles/${profile.profile_id}`} className={styles.primaryButton}>
                    To find
                </Link>
            </form>
        </aside>
    );
}

export { BackCard };  