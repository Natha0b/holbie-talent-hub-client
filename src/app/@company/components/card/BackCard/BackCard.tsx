"use client";

// component used for filters
import React, { SyntheticEvent, useEffect } from 'react';
import stylesModules from './BackCard.module.scss';
import { Dropdown } from '../../../../components/Dropdown/Dropdown';
import styles from '../../../../components/PrimaryButton/PrimaryButton.module.scss';
import { listOfCitiesIcons } from './BackCard.data';
import { jobKindIcons } from '../JobCard/JobCard.data';
import { jobTypeIcons } from '../JobType/JobType.data';
import { Multiselector } from '../../../../components/Multiselector/Multiselector';
import { technologyIcons } from '../TechCard/TechCard.dada';
import { englishLevelIcons } from '../EnglishCard/EnglishCard.data';
import { ProfileFake } from '../../../../@company/(pages)/find/profile/page';
import { Skill } from '../../UserProfile/Levels/Levels';
import { IDropdownItem } from '../../../../components/Dropdown/Dropdown.type';
import { useEasy } from 'use-easy';
import { IMultiselectorItem } from '../../../../components/Multiselector/Multiselector.type';
import { useNavigate } from 'react-router-dom';
import { API } from '../../../../../env';

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
    company_id: 1,
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
    filterKey: -1
};

const BackCard: React.FC<{ profile: ProfileFake, active: boolean, dynamic: boolean, filterKey: number }> = ({ profile, active, dynamic, filterKey }) => {

    const { state } = useEasy({ initial });

    const [item_location, setItem_location] = React.useState(listOfCitiesIcons.find(({ value }) => value === profile.location));
    const [item_kind_job, setItem_kind_job] = React.useState(jobKindIcons.find(({ value }) => value === profile.kind_job));
    const [item_job_type, setItem_job_type] = React.useState(jobTypeIcons.find(({ value }) => value === profile.job_type));
    const [item_skills, setItem_skills] = React.useState<(Skill & IMultiselectorItem)[]>([]); // IDropdownItem
    const [item_english_level, setItem_english_level] = React.useState<(Skill & IDropdownItem) | undefined>(undefined);
    const router = useNavigate();

    useEffect(() => {
        Promise.all(profile.skills.map(skill => fetch(`${API}/api/v1/skills/${skill}`)
            .then(response => response.json() as Promise<Skill>)
            .then(data => ({ ...data, ...technologyIcons.find(({ name }) => name === data.name) }) as Skill & IMultiselectorItem)
        )).then(data => setItem_skills(data));
        setItem_english_level(undefined);
    }, []);

    useEffect(() => {
        setItem_kind_job(jobKindIcons.find(({ value }) => value === profile.kind_job));
        setItem_location(listOfCitiesIcons.find(({ value }) => value === profile.location));
        setItem_skills([]);
        Promise.all(profile.skills.map(skill => fetch(`${API}/api/v1/skills/${skill}`)
            .then(response => response.json() as Promise<Skill>)
            .then(data => ({ ...data, ...technologyIcons.find(({ name }) => name === data.name) }) as Skill & IMultiselectorItem)
        )).then(data => setItem_skills(data));
        // @ts-ignore
        //state[`filter${filterKey}` as keyof typeof state] = filters as unknown as Filters;
        setItem_english_level(undefined);
    }, []);

    const handleSubmit = (event: SyntheticEvent) => {
        if (event) {
            event.preventDefault();
        }
        state.filterKey = filterKey;
        setTimeout(() => {
            router("/find/your-profiles/");
        }, 500);
    };

    const setValue = () => {
        
        const index = `filter${filterKey}` as keyof typeof state;
        if (typeof state[index] === 'object')
            (state[index] as Filters) = {
                
                location: item_location?.name ?? '' as string,
                kind_job: item_kind_job?.name ?? '' as string,
                job_type: item_job_type?.value ?? '' as string,
                skills: [...item_skills
                    ?.map(({ skill_id }) => skill_id) ?? item_english_level?.skill_id]
                    ?.filter((value) => typeof value === 'number') as number[],
                company_id: 1,
                job_name: profile.job_name

            } as Filters
    }
    // location

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
                <Multiselector label="Technology" initial={item_skills} items={technologyIcons}
                    onSelectedItems={(items_skills) => {
                        const updatedSkills = [...item_skills, ...items_skills] as (Skill & IMultiselectorItem)[];
                        setItem_skills(updatedSkills);   // @ts-ignore
                    }}
                    onItemSelectedRemove={(item_skill) => {
                        const updatedSkills = item_skills
                            .filter(({ skill_id }) => skill_id !== (item_skill as unknown as Skill).skill_id as number)
                            .filter((number) => typeof number === 'number');
                        setItem_skills(updatedSkills);   // @ts-ignore
                    }}
                />
                <Dropdown label="English Level" initial={item_english_level} items={englishLevelIcons} onItemSelect={(item_english_level) => {
                    if (item_english_level)
                        setItem_english_level(item_english_level as unknown as Skill & IDropdownItem); // @ts-ignore
                }} />
                <button className={styles.primaryButton} onMouseEnter={setValue} type="submit" >
                    To find
                </button>
            </form>
        </aside>
    );
}

export { BackCard };
