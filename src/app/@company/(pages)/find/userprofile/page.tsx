import React from 'react';
import './UserProfile.scss'

interface Profile {
  profile_id: number;
  is_user: boolean;
  headline: string;
  about_me: string;
  location: string;
  job_name: string;
  kind_job: 'REMOTE' | 'ONSITE' | 'BOTH';
  job_type: 'FULL_TIME' | 'PART_TIME' | 'INTERNSHIP' | 'CONTRACT' | 'VOLUNTEER' | 'OTHER';
  salary_min?: number;
  salary_max?: number;
  created_at: string;
  updated_at: string;
}

const UserProfile: React.FC<{ profile: Profile }> = ({ profile }) => {
  return (
    <div className="profile">
      <h2>{profile.headline}</h2>
      <p>{profile.about_me}</p>

      <div className="details">
        <div className="detail">
          <h4>Location</h4>
          <p>{profile.location}</p>
        </div>
        <div className="detail">
          <h4>Job Title</h4>
          <p>{profile.job_name}</p>
        </div>
        <div className="detail">
          <h4>Job Type</h4>
          <p>{profile.job_type}</p>
        </div>
        <div className="detail">
          <h4>Job Kind</h4>
          <p>{profile.kind_job}</p>
        </div>
        {profile.salary_min && profile.salary_max && (
          <div className="detail">
            <h4>Salary Range</h4>
            <p>${profile.salary_min} - ${profile.salary_max}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Ejemplo de información falsa
const profileData: Profile = {
  profile_id: 1,
  is_user: true,
  headline: "Desarrollador Full Stack",
  about_me: "Soy un apasionado desarrollador de software con experiencia en el desarrollo web de pila completa. Me encanta aprender nuevas tecnologías y construir aplicaciones escalables y robustas.",
  location: "Ciudad Ficticia",
  job_name: "Desarrollador de Software",
  kind_job: 'REMOTE',
  job_type: 'FULL_TIME',
  salary_min: 50000,
  salary_max: 80000,
  created_at: "2023-06-15T10:00:00",
  updated_at: "2023-06-15T14:30:00",
};

const App: React.FC = () => {
  return (
    <div>
      <UserProfile profile={profileData} />
    </div>
  );
};

export default App;
