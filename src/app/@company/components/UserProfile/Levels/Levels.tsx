'use client';
import React from 'react';
import styles from './Levels.module.scss'
import { AiFillStar } from 'react-icons/ai'
import { technologyIcons } from '../../card/TechCard/TechCard.dada';


// Declaration of the functional component Levels
const Levels: React.FC = () => {
    return (
        <div className={styles.levels}>
            <h2>Skills</h2>
            {
                technologyIcons.sort(() => Math.random() - .5).slice(0, Math.floor((Math.random() * 10) + 4)).map(({ name, color, Icon }) => (
                    <div className={styles.skill}>
                        {Icon && <Icon className={styles.Icon} style={{ '--color': color } as React.CSSProperties} />}
                        <span className={styles["skill-name"]}>{name}</span>
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