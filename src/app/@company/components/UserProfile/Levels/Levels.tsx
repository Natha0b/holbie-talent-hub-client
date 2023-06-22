'use client'; // Declaration indicating that the client is being used
import React from 'react';
import './Levels.scss'
import { AiFillStar } from 'react-icons/ai'
import { technologyIcons } from '../../card/TechCard/TechCard.dada';


// Declaration of the functional component Levels
const Levels: React.FC = () => {
    return (
        <div className="levels">
            <h2>Skills</h2>

            {
                technologyIcons.map(({ name, color, Icon }) => (
                    <div className="skill">
                        {Icon && <Icon className='Icon' style={{ '--color': color } as React.CSSProperties} />}
                        <span className="skill-name">{name}</span>
                        <div>
                            {
                                Array.from({ length: 5 }, () => (<AiFillStar className='skillicon' />))
                            }
                        </div>
                    </div>))
            }
        </div>
    );
};

export { Levels }; // Exporting the Levels component for use in other files