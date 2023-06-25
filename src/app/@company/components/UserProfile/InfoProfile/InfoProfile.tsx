'use client';
import React from 'react';
import './InfoProfile.scss'
import { Profile } from '../profile/DetailsProfile.data';


// Declaration of the functional component InfoProfile that receives a profile object as a prop
const InfoProfile: React.FC<{ profile: Profile }> = ({ profile }) => {
    return (

        <div className='info_profile'> {/* Main container with the CSS class 'info_profile' */}
            <div className="campo">
                <h2>Welcome to my Holbie Profile!👋🏼</h2>
                <h3>I'm Eveling Rodriguez👩‍💻💫</h3>
                <p>{profile.about_me}</p>
                <ul>
                    <li>🔭 I’m graduate of holberton school.</li>
                    <li>🌱 I’m currently learning different programming languages.</li>
                    <li>📫 How to reach me: eve0128@gmail.com</li>
                </ul>
            </div>
        </div>

    );
};

export { InfoProfile }; // Exporting the InfoProfile component for use in other files