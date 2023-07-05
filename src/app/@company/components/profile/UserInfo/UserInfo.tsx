"use client"
import React from "react";
import Link from "next/link";
import styles from "./UserInfo.module.scss";
import Image from 'next/image';
import javascriptIcon from "../../../../../../public/imagenescoderise/java-script1.png";
import cIcon from "../../../../../../public/imagenescoderise/c-.png";
import rubyIcon from "../../../../../../public/imagenescoderise/ruby.png";
import { ProfessionalProfile } from "$/app/@company/(pages)/find/search/page";

interface UserInfoProps {
    user: ProfessionalProfile;
}

/**
 * The UserInfo component represents the user information section in the profile card.
 * It receives the user object as a prop.
 * The component renders the user's profile picture, name, title, industry experience, programming languages, and type of work sought.
 * It uses switch statements to dynamically render language icons based on the user's programming languages.
 */

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
    const getLanguageIcon = (language: string) => {
        switch (language) {
            case 'JavaScript':
                return <Image src={javascriptIcon} alt="JavaScript" className="icon" />;
            case 'C':
                return <Image src={cIcon} alt="C" className="icon" />;
            case 'Ruby':
                return <Image src={rubyIcon} alt="Ruby" className="icon" />;
            default:
                return null;
        }
    };
    return (
        <div className={styles["user-info"]}>
            <div className={styles["icon-profile"]}>
                <img className={styles["profile-picture"]} src={`../../../../imagenescoderise/${user.profilePicture}`} alt="Profile" />
            </div>
            <div className={styles["user-details"]}>
                <h1 className={styles["name"]}>{user.name}</h1>
                <Link href={`/watch/profile/`} className={styles.showprofile}>
                    Show profile
                </Link>
                <p className={styles["title"]}>Software Engineer</p>
                <h3>Industry experience:</h3>
                <p className={styles["description"]}>
                    Passionate software developer with expertise in web development. Skilled in HTML, CSS, JavaScript, and Python. Committed to delivering high-quality code and exceeding client expectations. Strong problem-solving and communication skills. Seeking new challenges and opportunities in innovative projects
                </p>
                <p className={styles["description"]}>Programming Languages:</p>
                <div className={styles["programming-languages"]}>
                    {user.programmingLanguages.map((language, index) => (
                        <div className={styles["icons-languajes"]} key={index}>
                            {getLanguageIcon(language)}
                        </div>
                    ))}
                </div>
                <h3>Type of work sought:</h3>
                <p className={styles["description"]}>
                    Remote | Full Time
                </p>
            </div>
        </div>
    );
};

