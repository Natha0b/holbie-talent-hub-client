import React from 'react';
import './UserProfile.scss'
import { DetailsProfile } from '$/app/@company/components/UserProfile/profile/DetailsProfile';
import { InfoProfile } from '$/app/@company/components/UserProfile/InfoProfile/InfoProfile';
import { InfoProjects } from '$/app/@company/components/UserProfile/InfoProjects/InfoProjects';
import { Levels } from '$/app/@company/components/UserProfile/Levels/Levels';
import { profileData } from '$/app/@company/components/UserProfile/profile/DetailsProfile.data';

const UserProfile: React.FC = () => {
    const profile = profileData
    return (
        <div className="profile">
            <DetailsProfile profile={profile} />
            <InfoProfile profile={profile} />
            <InfoProjects />
            <Levels />
        </div>
    );
};

export default UserProfile;


/*
const App: React.FC = () => {
    return (
        <div>
            <UserProfile profile={profileData} />
        </div>
    );
};

export { App };
*/