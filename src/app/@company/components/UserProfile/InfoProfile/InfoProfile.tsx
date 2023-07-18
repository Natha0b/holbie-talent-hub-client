'use client';
import React, { useEffect } from 'react';
import './InfoProfile.scss'
import { FullProfessionalProfile } from '../../../../@company/(pages)/find/search/page';
import ReactMarkdown from 'react-markdown'
import { ProfessionalContact } from '../../TalentPreview/TalentPreview';
import { API } from '../../../../../env';

export const useProfilePicture = (profile: FullProfessionalProfile) => {
    const [contacts, setContactInfo] = React.useState<ProfessionalContact[]>([]);
    
    const [profilePicture, setProfilePicture] = React.useState<string>('');


    useEffect(() => {
        if (!profile) return;
        fetch(`${API}/api/v1/professional_profiles/${profile.profile_id}/contacts`)
            .then(response => response.json() as Promise<ProfessionalContact[]>)
            .then(data => setContactInfo(data))
            .catch(error => console.error(error));
    }, [profile]);

    
    useEffect(() => {
    

        if (!((Array.isArray(contacts) ? contacts : []).at(0)?.contact_info)) return;

        const username = (Array.isArray(contacts) ? contacts : []).at(0)?.contact_info;
        const apiUrl = `https://api.github.com/users/${username}`;
    
        // Fetch user data
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Extract profile image URL from user data
                const profileImageUrl = data.avatar_url;
                setProfilePicture(profileImageUrl);
    
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }, [contacts]);

    return profilePicture;
}

// Declaration of the functional component InfoProfile that receives a profile object as a prop
const InfoProfile: React.FC<{ profile: FullProfessionalProfile }> = ({ profile }) => {
    const [contacts, setContactInfo] = React.useState<ProfessionalContact[]>([]);
    const [profileReadme, setProfileReadme] = React.useState<string>('');

    useEffect(() => {
        if (!profile) return;
        fetch(`${API}/api/v1/professional_profiles/${profile.profile_id}/contacts`)
            .then(response => response.json() as Promise<ProfessionalContact[]>)
            .then(data => setContactInfo(data))
            .catch(error => console.error(error));
    }, [profile]);

    useEffect(() => {
        if (!contacts || !(Array.isArray(contacts) ? contacts : []).at(0)) return;
        const username = (Array.isArray(contacts) ? contacts : []).at(0)!.contact_info;
        fetch(`https://raw.githubusercontent.com/${username}/${username}/main/README.md`)
            .then(response => response.text() as Promise<string>)
            .then(data => setProfileReadme(data))
            .catch(error => console.error(error));

    }, [contacts]);

    return (
        <div className='info_profile'> {/* Main container with the CSS class 'info_profile' */}
            <div className="campo">
                {profileReadme &&
                    <ReactMarkdown skipHtml={true} >{profileReadme}</ReactMarkdown>
                }
            </div>
        </div>

    );
};

export { InfoProfile }; // Exporting the InfoProfile component for use in other files
