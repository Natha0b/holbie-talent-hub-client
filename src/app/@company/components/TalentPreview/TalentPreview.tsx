import React from 'react';
import styles from './TalentPreview.module.scss';
import { BsFillSendFill } from 'react-icons/bs';
import handleSendMessage from '$/app/@company/(pages)/@chat/chat/page';
import { ContactIcons } from '../profile/ContactIcons/ContactIcons';
import Link from 'next/link';


/**
 * The TalentPreview component represents a preview of a talent.
 * It displays the talent's profile picture, name, bio, title, and provides a button to send a message.
 * The component uses CSS modules to style its elements.
 */
export const TalentPreview: React.FC<{ talent: Talent, onClick?: () => void }> = ({ talent, onClick }) => {
    return (
        <div className={styles.talentPreview} onClick={onClick}>
            <header className={styles['not-opasity']}>
                <figure className={styles['liquid-animation']} >
                    <Link href={`/watch/profile/${talent.id}`} className={styles.primaryButton}>
                        <img src={talent.profilePicture} alt="Profile" className="talent-img" />
                    </Link>
                </figure>
                <h3>
                    <Link href={`/watch/profile/${talent.id}`} className={styles.primaryButton}>
                        {talent.name}
                    </Link>
                </h3>
                <button className={styles.contactsearch} onClick={handleSendMessage}>
                    <BsFillSendFill />
                </button>
            </header>

            <main>
                <div className={styles.talentInfo}>
                    <ContactIcons user={talent} />
                    <p>{talent.bio}</p>
                    <h2>{talent.title}</h2>
                    <Link href={`/watch/profile/${talent.id}`} className={styles.primaryButton}>
                        ver perfil completo
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
