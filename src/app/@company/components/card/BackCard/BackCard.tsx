"use client";

// component used for filters
import React, { useEffect } from 'react';
import stylesModules from './BackCard.module.scss';
import Link from 'next/link';
import { Dropdown } from '$components/Dropdown/Dropdown';
import styles from '$/app/components/PrimaryButton/PrimaryButton.module.scss';
import { listOfCitiesIcons } from './BackCard.data';
import { jobKindIcons } from '../JobCard/JobCard.data';
import { jobTypeIcons } from '../JobType/JobType.data';
import { Multiselector } from '$/app/components/Multiselector/Multiselector';
import { technologyIcons } from '../TechCard/TechCard.dada';
import { englishLevelIcons } from '../EnglishCard/EnglishCard.data';
import { ProfileFake } from '$/app/@company/(pages)/find/profile/page';
import { Skill } from '../../UserProfile/Levels/Levels';
import { IDropdownItem } from '$/app/components/Dropdown/Dropdown.type';
import { useEasy } from 'use-easy';

/**
 * The BackCard component represents the back side of a card that displays additional information.
 * It is used in conjunction with a front card to create a card flip effect.
 *
 * @param kindJob - The type of job associated with the card.
 * @param active - Indicates whether the back card is active or not.
 */


export interface Initial {
    filters: {
        company_id: number;
        location: string;
        job_name: string;
        kind_job: string;
        job_type: string;
        skills: number[];
    };
}

export const initial: Initial = {
    filters: {
        "company_id": 0,
        "location": "",
        "job_name": "",
        "kind_job": "",
        "job_type": "",
        "skills": []
    }
};

const BackCard: React.FC<{ profile: ProfileFake, active: boolean, dynamic: boolean }> = ({ profile, active }) => {

    const { state } = useEasy({ initial });

    const [item_kind_job, setItem_kind_job] = React.useState(jobKindIcons.find(({ value }) => value === profile.kind_job));
    const [item_job_type, setItem_job_type] = React.useState(jobTypeIcons.find(({ value }) => value === profile.job_type));
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
        state.filters = profile as unknown as Initial["filters"];
        setItem_english_level(undefined);
    }, [profile]);


    return (
        <aside className={`${stylesModules.card__back} ${active && stylesModules['card__back--active']}`}>
            <form className={stylesModules.form} action="edit-profile" method="post">
                <Dropdown label={'Location'} initial={item_location} items={listOfCitiesIcons} onItemSelect={(item_location) => {
                    setItem_location(item_location);
                    state.filters.location = item_location.value as string;
                }} />
                <Dropdown label="Kind Job" initial={item_kind_job} items={jobKindIcons} onItemSelect={(item_kind_job) => {
                    setItem_kind_job(item_kind_job);
                    state.filters.kind_job = item_kind_job.value as string;
                }} />
                <Dropdown label="Job Type" initial={item_job_type} items={jobTypeIcons} onItemSelect={(item_job_type) => {
                    setItem_job_type(item_job_type);
                    state.filters.job_type = item_job_type.value as string;
                }} />
                <Multiselector label="Technology" initial={item_skills} items={technologyIcons} onSelectedItems={(items_skills) => {
                    //const updatedSkills = [...items_skills];
                    //setItem_skills(updatedSkills);
                    //@ts-ignore
                    state.filters.skills = items_skills.map(({ id }) => id) as number[];
                }} />
                <Dropdown label="English Level" initial={item_english_level} items={englishLevelIcons} onItemSelect={() => {
                }} />
                <Link href={`/find/your-profiles/`} className={styles.primaryButton}>
                    To find
                </Link>
            </form>
        </aside>
    );
}

export { BackCard };
