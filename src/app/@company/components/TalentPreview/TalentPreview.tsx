import React from 'react';
import styles from './TalentPreview.module.scss';
import { BsFillSendFill } from 'react-icons/bs';
import handleSendMessage from '$company/(pages)/find/chat/page';
import { ContactIcons } from '../profile/ContactIcons/ContactIcons';
import { User } from "$company/(pages)/profiles-holbies/page";

const user: User[] = [];
const contactIconsInstance = <ContactIcons user={user} />;

export const TalentPreview: React.FC<{ talent: Talent }> = ({ talent }) => {
    return (
        <div className={styles.talentPreview}>
            <header className={styles['not-opasity']}>

                <figure className={styles['liquid-animation']} >
                    <img src={talent.profilePicture} alt="Profile" className="talent-img" />
                </figure>
                <h2>{talent.name}</h2>
                <button className={styles.contactsearch} onClick={handleSendMessage}>
                    <BsFillSendFill />
                </button>
            </header>

            <main>
                <div className={styles.talentInfo}>
                {contactIconsInstance}
                    <h2>{talent.bio}</h2>
                    <p>{talent.title}</p>
                    
                    {/* Display other relevant information */}
                </div>

                {/* Add additional UI elements and interactions */}

            </main>
        </div>
    );
};

export interface Talent {
    profilePicture: string;
    name: string;
    title: string;
    bio: string;
    // Add additional properties
}
