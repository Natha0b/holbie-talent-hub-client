'use client'; // Declaration indicating that the client is being used
import React from 'react';
import styles from './DetailsProfile.module.scss';
import { BsFillSendFill } from 'react-icons/bs';
import { FullProfessionalProfile } from '../../../../@company/(pages)/find/search/page';

import { useProfilePicture } from '../InfoProfile/InfoProfile';


// Declaration of the functional component DetailsProfile that receives a profile object as a prop
const DetailsProfile: React.FC<{ profile: FullProfessionalProfile }> = ({ profile }) => {
    const image = useProfilePicture(profile); 
    return (
        <div className={styles.details_profile}>
            <img className={styles.avatar} src={image} alt="Avatar" />
            <button className={styles.contactsearch} >
                <BsFillSendFill />
            </button>
            <h1>{profile.full_name}</h1>
            <h2>{profile && profile.headline}</h2>
            <p>{profile.about_me}</p>

            <div className={styles.campo}>
                <h2>Location</h2>
                <p>{profile && profile.location}</p>
            </div>

            <div className={styles.campo}>
                <h2>Job Name</h2>
                <p>{profile &&  profile.job_name}</p>
            </div>

            <div className={styles.campo}>
                <h2>Kind of Job</h2>
                <p>{profile &&  profile.kind_job}</p>
            </div>

            <div className={styles.campo}>
                <h2>Job Type</h2>
                <p>{profile &&  profile.job_type}</p>
            </div>

            {profile && profile.salary_min && profile.salary_max && (
                <div className={styles.campo}>
                    <h2>Salary Range</h2>
                    <p>${profile.salary_min} - ${profile.salary_max}</p>
                </div>
            )}

        </div>
    );
};

export { DetailsProfile };  // Exporting the DetailsProfile component for use in other files
