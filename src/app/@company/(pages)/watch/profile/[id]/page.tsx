/* page showing more information about the user's */

import React from 'react';
import styles from './UserProfile.module.scss'
import { DetailsProfile } from '$/app/@company/components/UserProfile/profile/DetailsProfile';
import { InfoProfile } from '$/app/@company/components/UserProfile/InfoProfile/InfoProfile';
import { InfoProjects } from '$/app/@company/components/UserProfile/InfoProjects/InfoProjects';
import { Levels } from '$/app/@company/components/UserProfile/Levels/Levels';
import { profileData } from '$/app/@company/components/UserProfile/profile/DetailsProfile.data';

const UserProfile: React.FC = () => {
    const profile = profileData;
    return (
        <div className={styles.profile}>
            <DetailsProfile profile={profile} />
            <div className={styles.profileRight} >
                <InfoProfile profile={profile} />  
                <InfoProjects />
                <Levels /> 
            </div>
        </div>
    );
};

export default UserProfile;