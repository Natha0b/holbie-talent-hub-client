import React from "react";
import styles from "./ContactIcons.module.scss"
import { User } from "$/app/@company/(pages)/profiles-holbies/page";

interface ContactIconsProps {
    user: User;
}

export const ContactIcons: React.FC<ContactIconsProps> = ({ user }) => {
    return (
        <div className={styles["contact-icons"]}>
            <a href={user.githubUrl} target="_blank" rel="noopener noreferrer">
                <img className={styles.icon} src="/imagenescoderise/github.png" alt="GitHub" />
            </a>
            <a href={user.linkedinUrl} target="_blank" rel="noopener noreferrer">
                <img className={styles.icon} src="/imagenescoderise/linkedin.png" alt="LinkedIn" />
            </a>
            <a href={user.slackUrl} target="_blank" rel="noopener noreferrer">
                <img className={styles.icon} src="/imagenescoderise/slack.png" alt="Slack" />
            </a>
            <a href={user.gmailUrl} target="_blank" rel="noopener noreferrer">
                <img className={styles.icon} src="/imagenescoderise/gmail.png" alt="Gmail" />
            </a>
        </div>
    );
};
