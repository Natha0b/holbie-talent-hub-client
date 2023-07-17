"use client";
/* page showing more information about the user's project */
import React from 'react';
import styles from './ProjectsDetails.module.scss'
import { TalentPreview } from '$company/components/TalentPreview/TalentPreview';
import { FaGithub, FaGlobe, FaCalendarAlt, FaRegClock, FaClock } from "react-icons/fa";
import { Levels } from '$/app/@company/components/UserProfile/Levels/Levels';
import { ProfessionalProfile } from '../../profile/[id]/page';
import { User } from '$/app/@unsignedin/(pages)/(log)/login/page';
import { FullProfessionalProfile } from '../../../find/search/page';
import { fullProfiles } from '../../../find/search/fullProfiles';

export interface Project {
    project_id: number;
    title: string;
    description: string;
    repository: string;
    website: string;
    start_date: string;
    end_date: string;
    created_at: string;
    updated_at: string;
}

export interface Media {
    media_id: number;
    media_type: string;
    file_path: string;
    created_at: string;
    updated_at: string;
    project_id: number;
}

export interface Skill {
    skill_id: number;
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
}

const ProjectView: React.FC<{ params: { id: string } }> = ({ params: { id } }) => {

    const [project, setProject] = React.useState<Project | null>(null);
    const [colaborators, setColaborators] = React.useState<FullProfessionalProfile[]>([]);
    const [multimedia, setMultimedia] = React.useState<Media[]>([]);

    React.useEffect(() => {
        fetch(`https://165.232.131.33/api/v1/projects/${id}`)
            .then(res => res.json())
            .then(data => setProject(data))
            .catch(error => console.error(error));


        (async () => {

            const profiles = await fetch(`https://165.232.131.33/api/v1/projects/${id}/collaborators`)
                .then(res => res.json() as Promise<ProfessionalProfile[]>);

            const completeProfiles: FullProfessionalProfile[] = await fullProfiles(profiles);
            setColaborators(completeProfiles)
            return completeProfiles;
        })().catch(error => console.error(error));


        fetch(`https://165.232.131.33/api/v1/projects/${id}/multimedia`)
            .then(res => res.json() as Promise<Media[]>)
            .then(data => setMultimedia(data))
            .catch(error => console.error(error));

    }, [id])

    return (
        <>
            <div id={styles.contentProject}>
                {
                    project && (
                        <div className={styles.project}>
                            <div className={styles.projectDetails}>
                                <div key={project.project_id}>
                                    <h1>{project.title}</h1>
                                    <p>{project.description}</p>
                                    <nav>
                                        <a className="btn" target="_blank"  rel="noreferrer"  href={project.repository}>
                                            <FaGithub size={20} />
                                            Repository
                                        </a>
                                        <a className="btn" target="_blank"  rel="noreferrer"  href={project.website}>
                                            <FaGlobe size={20} />
                                            Website
                                        </a>
                                    </nav>
                                    <nav>
                                        <span>Start Date:</span>
                                        <div className={styles.badge}>
                                            <FaCalendarAlt size={20} />
                                            <p>{project.start_date}</p>
                                        </div>
                                        <span>End Date:</span>
                                        <div className={styles.badge}>
                                            <FaRegClock size={20} />
                                            <p>{project.end_date}</p>
                                        </div>
                                        <span>Updated At:</span>
                                        <div className={styles.badge}>
                                            <FaClock size={20} />
                                            <p>{project.updated_at}</p>
                                        </div>
                                    </nav>
                                </div>
                            </div>


                            <div id={styles.contentprofile}>
                                <div className={styles.focusInfo} >
                                    <div className={styles.projectProfessional}>
                                        <h2>Team of the project</h2>

                                        {colaborators.length > 0 && colaborators.map((profile, key) => (
                                            <TalentPreview key={key} talent={profile} />
                                        ))}
                                    </div>

                                    <div className={styles.projectMultimedia}>
                                        <h2>Multimedia</h2>
                                        <section>
                                            {multimedia.map((media) => (
                                                <div key={media.media_id}>
                                                    <span>{media.media_type}</span>
                                                    {
                                                        media.media_type === 'video'
                                                            ? <video src={media.file_path} controls></video>
                                                            : media.media_type === 'audio'
                                                                ? <audio src={media.file_path} controls></audio>
                                                                : media.media_type === 'image'
                                                                    ? <img src={media.file_path} alt="Project Media" />
                                                                    : false
                                                    }
                                                </div>
                                            ))}
                                        </section>
                                    </div>
                                    <Levels owner='projects' id={String(project.project_id)} />
                                    <div className={styles.contenedorReadme}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )

                }
            </div>
        </>
    );
};

export default ProjectView;