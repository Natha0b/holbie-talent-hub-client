
export interface Profile {
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

export const profileData: Profile = {
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