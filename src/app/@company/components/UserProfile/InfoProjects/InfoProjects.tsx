'use client';
import React, { useEffect } from 'react';
import styles from './InfoProjects.module.scss'
import './InfoProjects.data'
import { Link } from "react-router-dom";
import { API } from '../../../../../env';


export interface Project {
    project_id: number;
    title: string;
    description: string;
    repository: string;
    website: string;
    start_date: Date;
    end_date: Date;
    created_at: Date;
    updated_at: Date;
}

const InfoProjects: React.FC<{ id: string }> = ({ id }) => {
    const [projects, setProjects] = React.useState<Project[]>([]);

    useEffect(() => {
        fetch(`${API}/api/v1/professional_profiles/${id}/projects`)
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(error => console.error(error));

    }, [id])

    return (
        <div className={styles.info_projects}>
            <h1>Popular Projects</h1>
            {projects.map((repo, key) => (
                <Link to={`/watch/project/${repo.project_id}`} key={key} >
                    <article key={repo.project_id}>
                        <h2>{repo.title} </h2>
                        <p>{repo.description}</p>
                    </article>
                </Link>
            ))}
        </div>
    );
};

export { InfoProjects }; // Exporting the InfoProjects component for use in other files


