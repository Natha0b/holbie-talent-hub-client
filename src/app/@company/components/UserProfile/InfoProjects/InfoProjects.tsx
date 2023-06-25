'use client';  // Declaration indicating that the client is being used
import React from 'react';
import styles from './InfoProjects.module.scss'
import './InfoProjects.data'
import { popularRepositories } from './InfoProjects.data';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';

const InfoProjects: React.FC = () => {
    return (
        <div className={styles.info_projects}>
            <h1>Popular Projects</h1>
            {popularRepositories.map((repo) => (
                <Link href={`/watch/project/${repo.id}`} >
                    <article key={repo.id}>
                        <h2>{repo.name}</h2>
                        <p>{repo.description}</p>
                        <p>{repo.stars} <AiFillStar className={styles.start} /></p>
                    </article>
                </Link>
            ))}
        </div>
    );
};

export { InfoProjects }; // Exporting the InfoProjects component for use in other files


