"use client";
import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './TalentPreview.module.scss';
import { BsFillSendFill } from 'react-icons/bs';
import { ContactIcons } from '../profile/ContactIcons/ContactIcons';
import { Link } from "react-router-dom";

import { FullProfessionalProfile } from '../../(pages)/find/search/page';
import { API } from '../../../../env';
import { useProfilePicture } from '../UserProfile/InfoProfile/InfoProfile';


export const profiles = [
    '/image/01.jpg',
    '/image/02.jpg',
    '/image/03.jpg',
    '/image/04.jpg',
    '/image/05.jpg',
    '/image/06.jpg',
    '/image/07.jpg',
    '/image/08.jpg',
    '/image/09.jpg',
    '/image/10.jpg',
    '/image/11.jpg',
    '/image/12.jpg',
    '/image/13.jpg',
    '/image/14.jpg',
    '/image/15.jpg',
    '/image/16.jpg',
    '/image/17.jpg',
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

    const [showFullDescription, setShowFullDescription] = useState(false);
    const [contacts, setContactInfo] = useState<ProfessionalContact[]>([]);
    const profilePicture = useProfilePicture(talent);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const getDescription = () => {
        if (showFullDescription || (talent.about_me ?? []).length <= 50) {
            return talent.about_me;
        }
        return talent.about_me.slice(0, 50) + '...';
    };
    
    useEffect(() => {
        if (!talent) return;
        fetch(`${API}/api/v1/professional_profiles/${talent.profile_id}/contacts`)
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



    return (
        <div className={styles.talentPreview} onClick={onClick}>
            <header className={styles['not-opasity']}>
                <figure className={styles['liquid-animation']}>
                    {profilePicture && <img src={profilePicture} alt="Profile Picture" />}
                </figure>
                <h3>
                    <Link to={`/watch/profile/${talent.profile_id}`} className={styles.primaryButton}>
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
                    <Link to={`/watch/profile/${talent.profile_id}`} className={styles.primaryButton}>
                        Show profile
                    </Link>
                </div>
            </main>
        </div>

    );
};
