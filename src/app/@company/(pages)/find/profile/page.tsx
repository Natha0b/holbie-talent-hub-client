'use client';
import { Card } from '$company/components/card/Card/Card';
import { profiles } from './profile.data';
import profile from '../profile/profile.module.scss';


export default function Find() {
    return (
        <section className={profile.profile}>
            <h1 className={profile.profile__title}>Select the profile that you want</h1>
            <nav className={profile.profile__navigation}>
                {
                    profiles.map(({ jobName, icon: icon, kindJob }, key) => (    // Map through each profile in the profiles array
                        <Card key={key} icon={icon} jobName={jobName} kindJob={kindJob} />  // Render a Card component for each profile
                    ))
                }
            </nav>
        </section>
    )
}
