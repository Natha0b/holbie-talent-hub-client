import React from "react";
import styles from "./ContactIcons.module.scss"
import { useEffect, useState } from "react";
import { ProfessionalProfile } from '../../../(pages)/find/search/page';
import { set } from "date-fns";
import { userAgent } from "next/server";
import { FullProfessionalProfile } from '$company/(pages)/find/search/page';
import { profile } from "console";
import { ProfessionalContact } from "../../TalentPreview/TalentPreview";


/**
 * The ContactIcons component displays contact icons for a user.
 * It receives a user object as a prop and renders icons for GitHub, LinkedIn, Slack, and Gmail.
 * Each icon is wrapped in an anchor tag with the corresponding URL from the user object.
 */
export const ContactIcons: React.FC<{ profile: FullProfessionalProfile }> = ({ profile }) => {
    const [contacts, setContactInfo] = useState<ProfessionalContact[]>([]);

    useEffect(() => {
        if (!profile) return;
        fetch(`https://165.232.131.33/api/v1/professional_profiles/${profile.profile_id}/contacts`)
            .then(response => response.json() as Promise<ProfessionalContact[]>)
            .then(data => setContactInfo(data))
            .catch(error => console.error(error));
    }, [profile])

    const githubContact = contacts.at(0);

    return (
        <div className={styles["contact-icons"]}>
            {githubContact && (
                <a href={`https://github.com/${githubContact.contact_info}`} target="_blank" rel="noopener noreferrer">
                    <img className={styles.icon} src="/imagenescoderise/github.png" alt="GitHub" />
                </a>
            )}
            <a href={`mailto:${profile.email}`} target="_blank" rel="noopener noreferrer">
                <img className={styles.icon} src="/imagenescoderise/gmail.png" alt="Gmail" />
            </a>
        </div>
    );

};
