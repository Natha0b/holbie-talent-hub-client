"use client";
import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './TalentPreview.module.scss';
import { BsFillSendFill } from 'react-icons/bs';
import { ContactIcons } from '../profile/ContactIcons/ContactIcons';
import Link from 'next/link';
import { FullProfessionalProfile } from '../../(pages)/find/search/page';

import {NextConfig} from'next';
import profile1 from '$share/image/01.jpg';
import profile2 from '$share/image/02.jpg';
import profile3 from '$share/image/03.jpg';
import profile4 from '$share/image/04.jpg';
import profile5 from '$share/image/05.jpg';
import profile6 from '$share/image/06.jpg';
import profile7 from '$share/image/07.jpg';
import profile8 from '$share/image/08.jpg';
import profile9 from '$share/image/09.jpg';
import profile10 from '$share/image/10.jpg';
import profile11 from '$share/image/11.jpg';
import profile12 from '$share/image/12.jpg';
import profile13 from '$share/image/13.jpg';
import profile14 from '$share/image/14.jpg';
import profile15 from '$share/image/15.jpg';
import profile16 from '$share/image/16.jpg';
import profile17 from '$share/image/17.jpg';
import Image, { StaticImageData } from 'next/image';

export const profiles = [
    profile1,
    profile2,
    profile3,
    profile4,
    profile5,
    profile6,
    profile7,
    profile8,
    profile9,
    profile10,
    profile11,
    profile12,
    profile13,
    profile14,
    profile15,
    profile16,
    profile17,
];

export interface ProfessionalContact {
    contact_id: number;
    contact_type: string;
    contact_info: string;
    created_at: Date;
    updated_at: Date;
    profile_id: number;
}

/**
 * The TalentPreview component represents a preview of a talent.
 * It displays the talent's profile picture, name, bio, title, and provides a button to send a message.
 * The component uses CSS modules to style its elements.
 */

export const TalentPreview: React.FC<{ talent: FullProfessionalProfile, onClick?: () => void }> = ({ talent, onClick }) => {

    const [profilePicture, setProfilePicture] = React.useState<StaticImageData | string | null>(null);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [contacts, setContactInfo] = useState<ProfessionalContact[]>([]);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const getDescription = () => {
        if (showFullDescription || talent.about_me.length <= 50) {
            return talent.about_me;
        }
        return talent.about_me.slice(0, 50) + '...';
    };
    
    useEffect(() => {
        if (!talent) return;
        fetch(`https://165.232.131.33/api/v1/professional_profiles/${talent.profile_id}/contacts`)
            .then(response => response.json() as Promise<ProfessionalContact[]>)
            .then(data => setContactInfo(data))
            .catch(error => console.error(error));
    }, [talent])

    /*const githubContact = contacts.at(0);

    useEffect(() => {
        const githubUsername: string | undefined = githubContact?.contact_info;
        let profilePicture: StaticImageData | string | null = profiles[Math.floor(Math.random() * profiles.length)];
        if (!githubUsername) {
            setProfilePicture(profilePicture);
            return;
        }
        (async () => {
            try {
                const response = await fetch(`https://github.com/${githubUsername}`);
                const html = await response.text();
                const parser = new DOMParser();
                const document = parser.parseFromString(html, 'text/html');
                const imageTag = document.querySelector('body > div:nth-of-type(1) > div:nth-of-type(6) > main > div > div > div:nth-of-type(1) > div > div > div:nth-of-type(1) > div:nth-of-type(1) > a > img');

                if (imageTag) {
                    profilePicture = imageTag.getAttribute('src');
                    console.log(profilePicture);
                    setProfilePicture(profilePicture);
                }
            } catch (error) {
                console.error(error);
                setProfilePicture(profilePicture);
            }
        })();
    

    }, [githubContact]);*/

    useEffect(() => {
        const profilePicture = profiles[Math.floor(Math.random() * profiles.length)];
        setProfilePicture(profilePicture);
    }, []);



    return (
        <div className={styles.talentPreview} onClick={onClick}>
            <header className={styles['not-opasity']}>
                <figure className={styles['liquid-animation']}>
                    {profilePicture && <Image src={profilePicture} alt="Profile Picture" />}
                </figure>
                <h3>
                    <Link href={`/watch/profile/${talent.profile_id}`} className={styles.primaryButton}>
                        {talent.full_name}
                    </Link>
                </h3>
                <button className={styles.contactsearch} >
                    <BsFillSendFill />
                </button>
            </header>

            <main>
                <div className={styles.talentInfo}>
                    <ContactIcons profile={talent} />
                    <p onClick={toggleDescription}>{getDescription()}</p>
                    <h2>{talent.headline}</h2>
                    <Link href={`/watch/profile/${talent.profile_id}`} className={styles.primaryButton}>
                        Show profile
                    </Link>
                </div>
            </main>
        </div>

    );
};
