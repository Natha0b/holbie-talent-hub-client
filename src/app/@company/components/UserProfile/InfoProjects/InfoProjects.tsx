'use client';  // Declaration indicating that the client is being used
import React from 'react';
import './InfoProjects.scss'
import './InfoProjects.data'
import { popularRepositories } from './InfoProjects.data';


// Declaration of the functional component InfoProjects
const InfoProjects: React.FC = () => {
    return (
        <div className='info_projects'>
            <h1>Popular Projects</h1>
            {popularRepositories.map((repo) => (
                <article key={repo.id}>
                    <h2>{repo.name}</h2>
                    <p>{repo.description}</p>
                    <p>{repo.stars} stars</p>
                </article>
            ))}
        </div>
    );
};

export { InfoProjects }; // Exporting the InfoProjects component for use in other files


