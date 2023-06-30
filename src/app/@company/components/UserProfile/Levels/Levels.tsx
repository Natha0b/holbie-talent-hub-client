'use client';
import React from 'react';
import styles from './Levels.module.scss'
import { AiFillStar } from 'react-icons/ai'
import { technologyIcons } from '../../card/TechCard/TechCard.dada';
import { IDropdownItem } from '$/app/components/Dropdown/Dropdown.type';

const skilsIcon = Object.fromEntries(technologyIcons.map(({ name, ...properties }) => [name.toLowerCase(), properties as IDropdownItem]));

export interface Skill {
    skill_id: number;
    name: string;
    description: string;
    proficiency_level: number;
  }
  
// Declaration of the functional component Levels
const Levels: React.FC<{ id: string, owner: "projects" | "professional_profiles" }> = ({id, owner}) => {

    const [skills, setSkills] = React.useState<(Skill & IDropdownItem)[]>([]);
    React.useEffect(() => {
        fetch(`https://recruitment-system-production.up.railway.app/api/v1/${owner}/${id}/skills/`)
            .then(res => res.json() as Promise<Skill[]>)
            .then(data => data.map(skill => ({ ...skill, ...skilsIcon[skill.name.toLowerCase()] }) as Skill & IDropdownItem))
            .then(data => setSkills(data))
            .catch(error => console.error(error));

    }, [id])

    return (
        <div className={styles.levels}>
            <h2>Skills</h2>
            {
                skills.map(({ value, color, Icon }) => (
                    <div className={styles.skill}>
                        {Icon && <Icon className={styles.Icon} style={{ '--color': color } as React.CSSProperties} />}
                        <span className={styles["skill-name"]}>{value}</span>
                        <div>
                            {
                                Array.from({ length: 5 }, (_, key) => (<AiFillStar key={key} className={styles.skillicon} />))
                            }
                        </div>
                    </div>))
            }
        </div>
    );
};

export { Levels }; // Exporting the Levels component for use in other files