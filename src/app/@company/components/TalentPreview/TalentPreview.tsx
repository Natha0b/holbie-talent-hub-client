import React from 'react';
import styles from './TalentPreview.module.scss';
import { BsFillSendFill } from 'react-icons/bs';
import handleSendMessage from '$company/(pages)/find/chat/page';
import { ContactIcons } from '../profile/ContactIcons/ContactIcons';
import { User } from "$company/(pages)/profiles-holbies/page";


// An empty array of User type
const user: User[] = [];

// An instance of the ContactIcons component
const contactIconsInstance = <ContactIcons user={user} />;


/**
 * The TalentPreview component represents a preview of a talent.
 * It displays the talent's profile picture, name, bio, title, and provides a button to send a message.
 * The component uses CSS modules to style its elements.
 */
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


/**
 * The Talent interface represents the data structure of a talent.
 * It includes properties such as profilePicture, name, title, bio, and additional properties.
 */
export interface Talent {
    profilePicture: string;
    name: string;
    title: string;
    bio: string;
    // Add additional properties
}
