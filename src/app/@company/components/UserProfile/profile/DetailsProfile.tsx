'use client'; // Declaration indicating that the client is being used
import React from 'react';
import './DetailsProfile.scss'
import { Profile } from './DetailsProfile.data';


// Declaration of the functional component DetailsProfile that receives a profile object as a prop
const DetailsProfile: React.FC<{ profile: Profile }> = ({ profile }) => {
    return (
        <div className='details_profile'>
            <img className="avatar" src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Avatar" />
            <h1>Eveling Rodriguez</h1>
            <h2>{profile.headline}</h2>
            <p>Enthusiastic software developer looking for exciting challenges.👩‍💻</p>

            <div className="campo">
                <h2>Location</h2>
                <p>{profile.location}</p>
            </div>

            <div className="campo">
                <h2>Job Name</h2>
                <p>{profile.job_name}</p>
            </div>

            <div className="campo">
                <h2>Kind of Job</h2>
                <p>{profile.kind_job}</p>
            </div>

            <div className="campo">
                <h2>Job Type</h2>
                <p>{profile.job_type}</p>
            </div>

            {profile.salary_min && profile.salary_max && (
                <div className="campo">
                    <h2>Salary Range</h2>
                    <p>${profile.salary_min} - ${profile.salary_max}</p>
                </div>
            )}

        </div>
    );
};

export { DetailsProfile };  // Exporting the DetailsProfile component for use in other files
