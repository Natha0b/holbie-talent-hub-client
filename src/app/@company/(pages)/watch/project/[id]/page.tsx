import React from 'react';
import styles from './ProjectsDetails.module.scss'
import { TalentPreview, Talent } from '$company/components/TalentPreview/TalentPreview';
// import { Carousel, handlePrevSlide, handleNextSlide, currentSlide }from '$company/components/profile/Carousel';


interface Profile {
    profile_id: number;
    is_user: boolean;
    headline: string;
    about_me: string;
    email: string;
    location: string;
    job_name: string;
    kind_job: 'Remote' | 'Onsite' | 'Both';
    job_type: 'Full Time' | 'Part Time' | 'Intership' | 'Contact' | 'Volunteer' | 'Other';
    salary_min?: number;
    salary_max?: number;
}



interface Contact {
    contact_id: number;
    contact_type: string;
    contact_info: string;
    created_at: string;
    updated_at: string;
}

export interface Multimedia {
    media_id: number;
    media_type: string;
    file_path: string;
    created_at: string;
    updated_at: string;
}

export interface Project {
    project_id: number;
    title: string;
    description: string;
    repository: string;
    website: string;
    start_date: string;
    end_date: string;
    created_at: string;
    updated_at: string;
}

export interface Skill {
    skill_id: number;
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
}



// Ejemplo de información falsa
const profileData: Profile = {
    profile_id: 1,
    is_user: true,
    headline: "Full Stack Developer",
    about_me: "The Holberton-WeatherApp is a command-line application that provides accurate and up-to-date weather information for any user-specified location.",
    location: "Cali, Colombia",
    email: "evelingdev@gmail.com",
    job_name: "Software Developer",
    kind_job: 'Remote',
    job_type: 'Full Time',
    salary_min: 50000,
    salary_max: 80000,
};

const projectsData: Project[] = [
    {
        project_id: 1,
        title: "Holberton-WeatherApp☀️",
        description: "The Holberton-WeatherApp is a command-line application that provides accurate and up-to-date weather information for any user-specified location🌍.",
        repository: "https://github.com/user/project1",
        website: "https://project1.com",
        start_date: "2023-01-01",
        end_date: "2023-06-22",
        created_at: "2023-01-01",
        updated_at: "2023-06-22",
    },
    // Add more project objects as needed
];

const skillsData: Skill[] = [
    {
        skill_id: 1,
        name: 'skills used',
        description: 'Python 3.9.',
        created_at: '2022-01-01',
        updated_at: '2022-06-30',
    },

]

const fakeData: Talent[] = [
    {
        profilePicture: 'https://avatars.githubusercontent.com/u/40?v=4',
        name: 'Liam Walker',
        title: 'Frontend Developer',
        bio: 'Passionate frontend developer with expertise in building responsive and interactive web applications. Proficient in HTML, CSS, and JavaScript frameworks such as React and Vue.js. Committed to creating engaging user experiences and writing clean, maintainable code.',
        githubLink: 'https://github.com/liamwalker',
        linkedinLink: 'https://www.linkedin.com/in/liamwalker',
        slackLink: '@Liam Walker',
        gmailLink: 'liamwalker@gmail.com',
    },
    {
        profilePicture: 'https://avatars.githubusercontent.com/u/41?v=4',
        name: 'Aurora Turner',
        title: 'Data Scientist',
        bio: 'Data scientist with expertise in data analysis, machine learning, and statistical modeling. Proficient in Python, R, and SQL. Experienced in working with large datasets and extracting meaningful insights. Passionate about leveraging data to drive informed decision-making.',
        githubLink: 'https://github.com/auroraturner',
        linkedinLink: 'https://www.linkedin.com/in/auroraturner',
        slackLink: '@Aurora Turner',
        gmailLink: 'auroraturner@gmail.com',
    },
    {
        profilePicture: 'https://avatars.githubusercontent.com/u/42?v=4',
        name: 'Luna Baker',
        title: 'UI/UX Designer',
        bio: 'Creative UI/UX designer with a focus on crafting visually appealing and user-friendly interfaces. Proficient in design tools such as Sketch, Figma, and Adobe XD. Experienced in conducting user research, creating wireframes, and prototyping interactive designs.',
        githubLink: 'https://github.com/lunabaker',
        linkedinLink: 'https://www.linkedin.com/in/lunabaker',
        slackLink: '@Luna Baker',
        gmailLink: 'lunabaker@gmail.com',
    },
    {
        profilePicture: 'https://avatars.githubusercontent.com/u/43?v=4',
        name: 'James Wilson',
        title: 'DevOps Engineer',
        bio: 'DevOps engineer with expertise in automating and optimizing software development processes. Skilled in cloud platforms like AWS and Azure. Experienced in CI/CD pipelines, infrastructure as code, and containerization. Passionate about improving efficiency and collaboration in software development.',
        githubLink: 'https://github.com/jameswilson',
        linkedinLink: 'https://www.linkedin.com/in/jameswilson',
        slackLink: '@James Wilson',
        gmailLink: 'jameswilson@gmail.com',
    },
]

const multimedia: Multimedia[] = [
    {
        media_id: 1,
        file_path: 'https://via.placeholder.com/150',
        media_type: 'image',
        created_at: '2023-01-01',
        updated_at: '2023-01-01'
    },
    {
        media_id: 2,
        file_path: 'https://via.placeholder.com/150',
        media_type: 'image',
        created_at: '2023-01-01',
        updated_at: '2023-01-01'
    }
];



const UserProfile: React.FC<{ profile: Profile }> = ({ profile }) => {
    return (
        <div className={styles.profile}>
            <div className={styles.details_profile}>

                {projectsData.map((project) => (
                    <div key={project.project_id}>
                        <h1>{project.title}</h1>
                        <h2>{project.description}</h2>
                        <h3>The Holberton-WeatherApp displays the current and detailed weather forecast for the specified location, including temperature, humidity, wind speed, and an overall weather description📑.</h3>
                        <h3>In addition to the current forecast, the application also provides the weather forecast for the next 5 days, allowing users to plan their activities accordingly☔.</h3>
                        <h3>The Holberton-WeatherApp runs from the command line, enabling users to quickly obtain weather information without the need for a complex graphical interface.</h3>
                        <h3>Users can customize the temperature unit (Celsius or Fahrenheit) and default location in the application settings, allowing them to tailor the experience to their preferences.</h3>
                        <p>Repository: <a href={project.repository}>{project.repository}</a></p>
                        <p>Website: <a href={project.website}>{project.website}</a></p>
                        <p>Start Date: {project.start_date}</p>
                        <p>End Date: {project.end_date}</p>
                        <p>Updated At: {project.updated_at}</p>
                    </div>
                ))}

                {skillsData.map((skill) => (
                    <div key={skill.skill_id}>
                        <h2>{skill.name}</h2>
                        <h3>{skill.description}</h3>
                    </div>
                ))}

                <div>
                    <h3>Installation and Usage Instructions</h3>
                    <li>git clone https://github.com/your_username/Holberton-WeatherApp.git</li>
                    <p>Install the necessary dependencies by running the following command:</p>
                    <li>pip install -r requirements.txt</li>
                    <p>Retrieve the weather forecast for a specific location:</p>
                    <li>python app.py --location "Medellín"</li>
                </div>
            </div>
            <div className={styles.holbies_parnets}>
                <div className={styles.resultsContainer}>
                    {
                        fakeData.map((talent) => (
                            <TalentPreview talent={talent} />
                        ))
                    }
                </div>
            </div>
            <div className={styles.info_multimedia}>
                {multimedia.map((media) => (
                    <div key={media.media_id}>
                        <span>{media.media_type}</span>
                        <img src={media.file_path} alt="Project Media" />
                    </div>
                ))}
            </div>
        </div>
    );
};
