import React from "react";
import styles from "./UserInfo.module.scss";
import Image from 'next/image';
import javascriptIcon from "../../../../../../public/imagenescoderise/java-script1.png";
import cIcon from "../../../../../../public/imagenescoderise/c-.png";
import { User } from "$company/(pages)/profiles-holbies/page";
import rubyIcon from "../../../../../../public/imagenescoderise/ruby.png";

interface UserInfoProps {
    user: User;
}

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
                <p className={styles["title"]}>Software Engineer</p>
                <h3>Industry experience:</h3>
                <p className={styles["description"]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget condimentum tortor, vitae gravida ipsum. Nullam ut mi vel nisi auctor fermentum. In hac habitasse platea dictumst.
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu diam eget dui euismod commodo vitae eget augue. Mauris vitae vestibulum quam.
                </p>
            </div>
        </div>
    );
};

