'use client';
import React from 'react';
import './InfoProfile.scss'
import { Profile } from '../profile/DetailsProfile.data';
import { FullProfessionalProfile } from '$company/(pages)/find/search/page';
import ReactMarkdown from 'react-markdown'
import { ProfessionalContact } from '../../profile/ContactIcons/ContactIcons';



// Declaration of the functional component InfoProfile that receives a profile object as a prop
const InfoProfile: React.FC<{ profile: FullProfessionalProfile }> = ({ profile }) => {
    const [contacts, setContactInfo] = React.useState<ProfessionalContact[]>([]);
    const [profileReadme, setProfileReadme] = React.useState<string>('');

    React.useEffect(() => {
        if (!profile) return;
        fetch(`https://recruitment-system-production.up.railway.app/api/v1/professional_profiles/${profile.profile_id}/contacts`)
            .then(response => response.json() as Promise<ProfessionalContact[]>)
            .then(data => setContactInfo(data))
            .catch(error => console.error(error));
    }, [profile]);

    React.useEffect(() => {
        if (!contacts || !contacts.at(0)) return;
        const username = contacts.at(0)!.contact_info;
        fetch(`https://raw.githubusercontent.com/${username}/${username}/main/README.md`)
            .then(response => response.text() as Promise<string>)
            .then(data => setProfileReadme(data))
            .catch(error => console.error(error));
    }, [contacts]);

    return (
        <div className='info_profile'> {/* Main container with the CSS class 'info_profile' */}
            <div className="campo">
                { profileReadme &&
                    <ReactMarkdown children={profileReadme} skipHtml={true} />
                }
            </div>
        </div>

    );
};

export { InfoProfile }; // Exporting the InfoProfile component for use in other files
