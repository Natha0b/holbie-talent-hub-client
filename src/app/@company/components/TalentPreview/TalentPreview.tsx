"use client";
import React, { useEffect } from 'react';
import styles from './TalentPreview.module.scss';
import { BsFillSendFill } from 'react-icons/bs';
import { ContactIcons } from '../profile/ContactIcons/ContactIcons';
import Link from 'next/link';
import { FullProfessionalProfile } from '../../(pages)/find/search/page';

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
/**
 * The TalentPreview component represents a preview of a talent.
 * It displays the talent's profile picture, name, bio, title, and provides a button to send a message.
 * The component uses CSS modules to style its elements.
 */

export const TalentPreview: React.FC<{ talent: FullProfessionalProfile, onClick?: () => void }> = ({ talent, onClick }) => {

    const [profilePicture, setProfilePicture] = React.useState<StaticImageData| null>(null);

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
                    <ContactIcons user={talent} />
                    <p>{talent.about_me}</p>
                    <h2>{talent.headline}</h2>
                    <Link href={`/watch/profile/${talent.profile_id}`} className={styles.primaryButton}>
                        Show profile
                    </Link>
                </div>
            </main>
        </div>

    );
};


/**
 * The Talent interface represents the data structure of a talent.
 * It includes properties such as profilePicture, name, title, bio, and additional properties.
 */
export interface Talent {
    profilePicture: string;
    name: string;
    title: string;
    bio: string;
    githubLink: string;
    slackLink: string;
    linkedinLink: string;
    gmailLink: string;
    id: Number;
}
