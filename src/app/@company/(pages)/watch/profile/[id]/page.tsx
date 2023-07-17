"use client";
import React from 'react';
import styles from './UserProfile.module.scss'
import { DetailsProfile } from '$/app/@company/components/UserProfile/profile/DetailsProfile';
import { InfoProfile } from '$/app/@company/components/UserProfile/InfoProfile/InfoProfile';
import { InfoProjects } from '$/app/@company/components/UserProfile/InfoProjects/InfoProjects';
import { Levels } from '$/app/@company/components/UserProfile/Levels/Levels';
import { fullProfiles, FullProfessionalProfile } from '../../../find/search/page';

export interface ProfessionalProfile {
    profile_id: number;
    is_user: number;
    headline: string;
    about_me: string;
    location: string;
    job_name: string;
    kind_job: string;
    job_type: string;
    salary_min: number;
    salary_max: number;
    created_at: Date;
    updated_at: Date;
}


const UserProfile: React.FC<{ params: { id: string } }> = ({ params: { id } }) => {
    const [profile, setProfile] = React.useState<ProfessionalProfile | null>(null);
    const [fullProfile, setFullProfile] = React.useState<FullProfessionalProfile | undefined>(undefined);

    React.useEffect(() => {
        (async () => {
            await fetch(`https://165.232.131.33/api/v1/professional_profiles/${id}`)
                .then(res => res.json())
                .then(data => setProfile(data))
        })().catch(error => console.error(error));
    }, [id])

    React.useEffect(() => {
        (async () => {
            if (!profile) return;
            const completeProfile: FullProfessionalProfile[] = await fullProfiles([profile]);
            setFullProfile(completeProfile.at(0));
        })().catch(error => console.error(error));
    }, [profile])

    return (
        <>
            <div id={styles.content}>
                {
                    fullProfile && (
                        <div className={styles.profile}>
                            <DetailsProfile profile={fullProfile} />
                            <div id={styles.contentprofile}>
                                <div className={styles.profileRight} >
                                    <InfoProfile profile={fullProfile} />
                                    <InfoProjects id={String(fullProfile.profile_id)} />
                                    <Levels owner='professional_profiles' id={String(fullProfile.profile_id)} />

                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>

    );
};

export default UserProfile;
