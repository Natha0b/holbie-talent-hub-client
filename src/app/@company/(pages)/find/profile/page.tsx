'use client';
import { Card } from '$company/components/card/Card/Card';
import profile from '../profile/profile.module.scss';
import { useEffect, useState } from 'react';

export interface ProfileFake {
    profile_id: number;
    location: string;
    job_name: string;
    kind_job: string;
    job_type: string;
    skills: number[];
}

const icons: string[] = [
    'https://cdn-icons-png.flaticon.com/512/2166/2166823.png',
    'https://cdn-icons-png.flaticon.com/512/5272/5272339.png',
    'https://cdn-icons-png.flaticon.com/512/6405/6405224.png',
    'https://cdn-icons-png.flaticon.com/512/4668/4668052.png'
];

const emptyFakeProfile: ProfileFake = {
    profile_id: 0,
    location: '',
    job_name: '',
    kind_job: '',
    job_type: '',
    skills: []
};

export default function Find() {
    const [profiles, setProfiles] = useState<ProfileFake[]>([]);

    useEffect(() => {
        fetch("https://recruitment-system-production.up.railway.app/api/v1/popular_filters")
            .then(response => response.json() as Promise<ProfileFake[]>)
            .then(data => setProfiles(data as ProfileFake[]))
            .catch(error => console.error(error));
    }, []);

    /* useEffect(() => {
        console.log(profiles);
    }, [profiles]); */

    return (
        <section className={profile.profile}>
            <h1 className={profile.profile__title}>Select the profile that you want</h1>
            <nav className={profile.profile__navigation}>
                {
                    profiles.map((profile, key) => (
                        <Card key={key} filterKey={key} dynamic={false} profile={profile} icon={icons[key % icons.length]} />
                    ))
                }
                <Card key={3} filterKey={3} dynamic={true} profile={emptyFakeProfile} icon={icons[3 % icons.length]} />
            </nav>
        </section>
    )
}
