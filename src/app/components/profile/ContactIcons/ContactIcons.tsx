import React from "react";
import styles from "./ContactIcons.module.css"

interface ContactIconsProps {
    user: User;
}

const ContactIcons: React.FC<ContactIconsProps> = ({ user }) => {
    return (
        <div className={styles["contact-icons"]}>
            <a href={user.githubUrl} target="_blank" rel="noopener noreferrer">
                <img className={styles.icon} src="/ruta-completa-a-github.png" alt="GitHub" />
            </a>
            <a href={user.linkedinUrl} target="_blank" rel="noopener noreferrer">
                <img className={styles.icon} src="/ruta-completa-a-linkedin.png" alt="LinkedIn" />
            </a>
            <a href={user.slackUrl} target="_blank" rel="noopener noreferrer">
                <img className={styles.icon} src="/ruta-completa-a-slack.png" alt="Slack" />
            </a>
            <a href={user.gmailUrl} target="_blank" rel="noopener noreferrer">
                <img className={styles.icon} src="/ruta-completa-a-gmail.png" alt="Gmail" />
            </a>
        </div>
    );
};

export { ContactIcons };