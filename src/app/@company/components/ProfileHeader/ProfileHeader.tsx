
import React from 'react';
import styles from './ProfileHeader.module.scss';

/**
 * The ProfileHeader component represents the header section of a profile.
 * It renders the profile picture, name, title, description, and a "Say hello" button.
 * The component uses CSS modules to style its elements.
 */
export const ProfileHeader: React.FC = () => {
    return (
        <div className={styles.profileHeader}>
            <div className={`${styles['profileHeader__container']} patterns-pattern1-background`}>
                </div>
            <div className={styles["home__data"]}>
                <figure style={{ '--talent1': "url(https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png)" } as React.CSSProperties} className={styles['home__img']} />
                <h1 className={styles["home__title"]}>John Doe</h1>
                <h3 className={styles["home__subtitle"]}>Back-End Developer</h3>
                <p className={styles["home__description"]}>
                    African developer who always brings his A-game to the table. He has a deep understanding of C, C++, and Python, and is highly
                    skilled in the use of HTML, JavaScript, and React. With his technical prowess and innovative approach, Kofi consistently delivers
                    top-notch results.
                </p>
                <a href="#contact" className={`${styles["button"]} ${styles["button--flex"]}`}>
                    Say hello
                    <svg className={styles["button__icon"]} xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                            fill="var(--container-color)"
                        ></path>
                        <path
                            d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                            fill="var(--container-color)"
                        ></path>
                    </svg>
                </a>
            </div>
        </div>
    );
};

