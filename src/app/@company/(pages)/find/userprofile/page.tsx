import React from 'react';
import './UserProfile.scss'

interface Profile {
    profile_id: number;
    is_user: boolean;
    headline: string;
    about_me: string;
    location: string;
    job_name: string;
    kind_job: 'Remote' | 'Onsite' | 'Both';
    job_type: 'Full Time' | 'Part Time' | 'Intership' | 'Contact' | 'Volunteer' | 'Other';
    salary_min?: number;
    salary_max?: number;
}

interface Repository {
    id: number;
    name: string;
    description: string;
    stars: number;
}

const UserProfile: React.FC<{ profile: Profile }> = ({ profile }) => {
    return (
        <div className="profile">
            <div className='details_profile'>
                <img className="avatar" src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Avatar" />
                <h1>Eveling Rodriguez</h1>
                <h2>{profile.headline}</h2>
                <p>Enthusiastic software developer looking for exciting challenges.👩‍💻</p>

                <div className="campo">
                    <h2>Location</h2>
                    <p>{profile.location}</p>
                </div>

                <div className="campo">
                    <h2>Job Name</h2>
                    <p>{profile.job_name}</p>
                </div>

                <div className="campo">
                    <h2>Kind of Job</h2>
                    <p>{profile.kind_job}</p>
                </div>

                <div className="campo">
                    <h2>Job Type</h2>
                    <p>{profile.job_type}</p>
                </div>

                {profile.salary_min && profile.salary_max && (
                    <div className="campo">
                        <h2>Salary Range</h2>
                        <p>${profile.salary_min} - ${profile.salary_max}</p>
                    </div>
                )}

            </div>

            <div className='info_profile'>
                <div className="campo">
                    <h2>About Me</h2>
                    <p>{profile.about_me}</p>
                </div>
            </div>
            <div className='info_projects'>
                <h1>Popular Projects</h1>
                {popularRepositories.map((repo) => (
                    <article key={repo.id}>
                        <h2>{repo.name}</h2>
                        <p>{repo.description}</p>
                        <p>{repo.stars} stars</p>
                    </article>
                ))}
            </div>
        </div>
    );
};

// Ejemplo de información falsa
const profileData: Profile = {
    profile_id: 1,
    is_user: true,
    headline: "Full Stack Developer",
    about_me: "I am a passionate software developer with experience in full-stack web development. I love learning new technologies and building scalable, robust applications.",
    location: "Cali, Colombia",
    job_name: "Software Developer",
    kind_job: 'Remote',
    job_type: 'Full Time',
    salary_min: 50000,
    salary_max: 80000,
};

const popularRepositories: Repository[] = [
    {
        id: 1,
        name: 'AwesomeProject',
        description: 'An awesome project',
        stars: 100,
    },
    {
        id: 2,
        name: 'CoolApp',
        description: 'A cool app',
        stars: 50,
    },
    {
        id: 3,
        name: 'SuperLibrary',
        description: 'A super library',
        stars: 200,
    },
];

const App: React.FC = () => {
    return (
        <div>
            <UserProfile profile={profileData} />
        </div>
    );
};

export default App;
