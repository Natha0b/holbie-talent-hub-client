"use client";

// component used for filters
import React, { SyntheticEvent, useEffect } from 'react';
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
import { IMultiselectorItem } from '$/app/components/Multiselector/Multiselector.type';
import { BsFillFilterSquareFill } from 'react-icons/bs';
//import { Router } from 'next/router';
import { useRouter } from 'next/navigation';

/**
 * The BackCard component represents the back side of a card that displays additional information.
 * It is used in conjunction with a front card to create a card flip effect.
 *
 * @param kindJob - The type of job associated with the card.
 * @param active - Indicates whether the back card is active or not.
 */

export interface Filters {
    company_id: number;
    location: string;
    job_name: string;
    kind_job: string;
    job_type: string;
    skills: number[];
}

export interface Initial {
    filter0: Filters;
    filter1: Filters;
    filter2: Filters;
    filter3: Filters;
    filterKey: number;
}

export const filters = {
    company_id: 0,
    location: "",
    job_name: "",
    kind_job: "",
    job_type: "",
    skills: []
};

export const initial: Initial = {
    filter0: JSON.parse(JSON.stringify(filters)) as Filters,
    filter1: JSON.parse(JSON.stringify(filters)) as Filters,
    filter2: JSON.parse(JSON.stringify(filters)) as Filters,
    filter3: JSON.parse(JSON.stringify(filters)) as Filters,
    filterKey: 0
};

const BackCard: React.FC<{ profile: ProfileFake, active: boolean, dynamic: boolean, filterKey: number }> = ({ profile, active, dynamic, filterKey }) => {

    const { state } = useEasy({ initial });

    const [item_kind_job, setItem_kind_job] = React.useState(jobKindIcons.find(({ value }) => value === profile.kind_job));
    const [item_job_type, setItem_job_type] = React.useState(jobTypeIcons.find(({ value }) => value === profile.job_type));
    const [item_location, setItem_location] = React.useState(listOfCitiesIcons.find(({ value }) => value === profile.location));
    const [item_skills, setItem_skills] = React.useState<(Skill & IMultiselectorItem)[]>([]); // IDropdownItem
    const [item_english_level, setItem_english_level] = React.useState<(Skill & IDropdownItem) | undefined>(undefined);
    const router = useRouter();

    useEffect(() => {
        Promise.all(profile.skills.map(skill => fetch(`https://recruitment-system-production.up.railway.app/api/v1/skills/${skill}`)
            .then(response => response.json() as Promise<Skill>)
            .then(data => ({ ...data, ...technologyIcons.find(({ name }) => name === data.name) }) as Skill & IMultiselectorItem)
        )).then(data => setItem_skills(data));
        setItem_english_level(undefined);
    }, [profile]);

    useEffect(() => {
        setItem_kind_job(jobKindIcons.find(({ value }) => value === profile.kind_job));
        setItem_location(listOfCitiesIcons.find(({ value }) => value === profile.location));
        setItem_skills([]);
        Promise.all(profile.skills.map(skill => fetch(`https://recruitment-system-production.up.railway.app/api/v1/skills/${skill}`)
            .then(response => response.json() as Promise<Skill>)
            .then(data => ({ ...data, ...technologyIcons.find(({ name }) => name === data.name) }) as Skill & IMultiselectorItem)
        )).then(data => setItem_skills(data));
        // @ts-ignore
        state[`filter${filterKey}` as keyof typeof state] = profile as unknown as Filters;
        //debugger;
        setItem_english_level(undefined);
    }, [profile, filterKey]);

    const handleSubmit = (event: SyntheticEvent) => {
        if (event) {
            event.preventDefault();
        }
        state.filterKey = filterKey;
        setTimeout(() => {
            router.push("/find/your-profiles/");
            router.refresh();
        }, 500);
    };

    // location
    useEffect(() => {
        const index = `filter${filterKey}` as keyof typeof state;
        if (typeof state[index] === 'object' && item_location?.value)
        (state[index] as Filters).location = item_location.value as string;
    }, [item_location, state])
    
    // item_kind_job
    useEffect(() => {
        const index = `filter${filterKey}` as keyof typeof state;
        if (typeof state[index] === 'object' && item_kind_job?.value)
        (state[index] as Filters).kind_job = item_kind_job.value as string;
    }, [item_kind_job, state])
    
    // job_type
    useEffect(() => {
        const index = `filter${filterKey}` as keyof typeof state;
        if (typeof state[index] === 'object' && item_job_type?.value)
            (state[index] as Filters).job_type = item_job_type?.value as string;
    }, [item_job_type, state])

    // updatedSkills
    useEffect(() => {
        const index = `filter${filterKey}` as keyof typeof state;
        if (typeof state[index] === 'object' && item_skills?.length)
            (state[index] as Filters).skills = item_skills?.map(({ skill_id }) => skill_id) as number[];
    }, [item_skills, state])
    
    // english_level
    useEffect(() => {
        const index = `filter${filterKey}` as keyof typeof state;
        if (typeof state[index] === 'object' && item_english_level?.skill_id)
            (state[index] as Filters).skills.push(item_english_level?.skill_id as number);
    }, [item_english_level, state])

    return (
        <aside className={`${stylesModules.card__back} ${active && stylesModules['card__back--active']}`}>
            <form className={stylesModules.form} id="filtersForm" onSubmit={handleSubmit} >
                <Dropdown label={'Location'} initial={item_location} items={listOfCitiesIcons} onItemSelect={(item_location) => 
                    setItem_location(item_location) // @ts-ignore
                } />
                <Dropdown label="Kind Job" initial={item_kind_job} items={jobKindIcons} onItemSelect={(item_kind_job) => 
                    setItem_kind_job(item_kind_job) // @ts-ignore
                } />
                <Dropdown label="Job Type" initial={item_job_type} items={jobTypeIcons} onItemSelect={(item_job_type) => 
                    setItem_job_type(item_job_type) // @ts-ignore
                } />
                <Multiselector label="Technology" initial={item_skills} items={technologyIcons} onSelectedItems={(items_skills) => {
                    const updatedSkills = [...item_skills, ...items_skills] as (Skill & IMultiselectorItem)[];
                    setItem_skills(updatedSkills);   // @ts-ignore
                }} />
                <Dropdown label="English Level" initial={item_english_level} items={englishLevelIcons} onItemSelect={(item_english_level) => {
                    if (item_english_level)
                        setItem_english_level(item_english_level as unknown as Skill & IDropdownItem); // @ts-ignore
                }} />
                <button className={styles.primaryButton} type="submit" >
                    To find
                </button>
            </form>
        </aside>
    );
}

export { BackCard };
