"use client";
// TalentSearch.tsx

import React, { useState } from 'react';
import styles from './TalentSearch.module.scss';
import Layout from '../layout';



// Import other components used within TalentSearch
import { SearchBar } from '$company/components/SearchBar/SearchBar';
import { FilterPanel } from '$company/components/FilterPanel/FilterPanel';
import { TalentPreview, Talent } from '$company/components/TalentPreview/TalentPreview';

export default function TalentSearch() {
    const [filters, setFilters] = useState({});

    // Function to handle filter changes
    const handleFilterChange = (newFilters: object) => {
        setFilters(newFilters);
    };

    // Function to handle search submit
    const handleSearchSubmit = (keywords: string) => {
        // Perform search with keywords and filters
        // Update the search results
    };

    // create a lalet facke data


    const fakeData: Talent[] = [
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/1?v=4',
            name: 'John Doe',
            title: 'Frontend Developer',
            bio: 'Passionate frontend developer with expertise in JavaScript frameworks and UI/UX design. I love creating intuitive and visually appealing user interfaces that enhance the overall user experience. Always eager to learn and stay up-to-date with the latest web technologies.',
            githubLink: 'https://github.com/johndoe',
            linkedinLink: 'https://www.linkedin.com/in/johndoe',
            slackLink: '@John Doe',
            gmailLink: 'johndoe@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/2?v=4',
            name: 'Jane Smith',
            title: 'UI/UX Designer',
            bio: 'Experienced UI/UX designer with a focus on creating elegant and user-centered designs. I have a strong understanding of design principles and tools, and I enjoy collaborating with development teams to bring designs to life. Passionate about creating visually appealing interfaces that provide seamless user experiences.',
            githubLink: 'https://github.com/janesmith',
            linkedinLink: 'https://www.linkedin.com/in/janesmith',
            slackLink: '@Jane Smith',
            gmailLink: 'janesmith@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/3?v=4',
            name: 'Robert Johnson',
            title: 'Full Stack Developer',
            bio: 'Full stack developer with a focus on building scalable and performant web applications. I have expertise in both frontend and backend technologies, and I enjoy working on end-to-end solutions. Passionate about writing clean and maintainable code that solves real-world problems.',
            githubLink: 'https://github.com/robertjohnson',
            linkedinLink: 'https://www.linkedin.com/in/robertjohnson',
            slackLink: '@Robert Johnson',
            gmailLink: 'robertjohnson@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/4?v=4',
            name: 'Sarah Johnson',
            title: 'Mobile App Developer',
            bio: 'Experienced mobile app developer specializing in Android and iOS platforms. I have a strong understanding of mobile app architecture and design patterns. I enjoy creating high-quality, user-friendly mobile applications that provide a seamless experience. Always up for new challenges and eager to learn.',
            githubLink: 'https://github.com/sarahjohnson',
            linkedinLink: 'https://www.linkedin.com/in/sarahjohnson',
            slackLink: '@Sarah Johnson',
            gmailLink: 'sarahjohnson@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/5?v=4',
            name: 'Michael Brown',
            title: 'Data Scientist',
            bio: 'Passionate data scientist with expertise in machine learning and data analysis. I enjoy working with large datasets and extracting valuable insights. Skilled in Python and R, with a strong mathematical background. Always seeking new challenges to apply data science techniques in innovative ways.',
            githubLink: 'https://github.com/michaelbrown',
            linkedinLink: 'https://www.linkedin.com/in/michaelbrown',
            slackLink: '@Michael Brown',
            gmailLink: 'michaelbrown@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/6?v=4',
            name: 'Emily Davis',
            title: 'Product Manager',
            bio: 'Experienced product manager with a proven track record of successfully launching and managing products. I have a strong understanding of product development lifecycles and a passion for creating user-centric products. Skilled in market research, strategic planning, and cross-functional collaboration.',
            githubLink: 'https://github.com/emilydavis',
            linkedinLink: 'https://www.linkedin.com/in/emilydavis',
            slackLink: '@Emily Davis',
            gmailLink: 'emilydavis@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/7?v=4',
            name: 'David Wilson',
            title: 'DevOps Engineer',
            bio: 'DevOps engineer with expertise in automating and optimizing software development processes. I have experience in cloud platforms, CI/CD pipelines, and infrastructure as code. Passionate about streamlining workflows and improving collaboration between development and operations teams.',
            githubLink: 'https://github.com/davidwilson',
            linkedinLink: 'https://www.linkedin.com/in/davidwilson',
            slackLink: '@David Wilson',
            gmailLink: 'davidwilson@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/8?v=4',
            name: 'Sophia Thompson',
            title: 'UI Designer',
            bio: 'Passionate UI designer with a keen eye for aesthetics and attention to detail. I specialize in creating visually stunning interfaces that provide a delightful user experience. Proficient in design tools such as Sketch and Figma. Always seeking new design challenges and staying up-to-date with the latest design trends.',
            githubLink: 'https://github.com/sophiathompson',
            linkedinLink: 'https://www.linkedin.com/in/sophiathompson',
            slackLink: '@Sophia Thompson',
            gmailLink: 'sophiathompson@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/9?v=4',
            name: 'Christopher Martin',
            title: 'Backend Developer',
            bio: 'Backend developer with a focus on building scalable and efficient server-side applications. Proficient in languages such as Java and Node.js. Experienced in designing and implementing RESTful APIs and working with databases. Passionate about writing clean and maintainable code.',
            githubLink: 'https://github.com/christophermartin',
            linkedinLink: 'https://www.linkedin.com/in/christophermartin',
            slackLink: '@Christopher Martin',
            gmailLink: 'christophermartin@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/10?v=4',
            name: 'Olivia Wilson',
            title: 'Frontend Developer',
            bio: 'Frontend developer with a focus on creating interactive and user-friendly web applications. Experienced in HTML, CSS, and JavaScript frameworks such as React and Angular. Passionate about delivering high-quality code and ensuring optimal performance across different devices.',
            githubLink: 'https://github.com/oliviawilson',
            linkedinLink: 'https://www.linkedin.com/in/oliviawilson',
            slackLink: '@Olivia Wilson',
            gmailLink: 'oliviawilson@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/11?v=4',
            name: 'William Davis',
            title: 'Software Engineer',
            bio: 'Software engineer with a focus on building robust and scalable applications. Experienced in various programming languages and frameworks. Skilled in problem-solving and collaborating with cross-functional teams. Passionate about creating efficient and elegant software solutions.',
            githubLink: 'https://github.com/williamdavis',
            linkedinLink: 'https://www.linkedin.com/in/williamdavis',
            slackLink: '@William Davis',
            gmailLink: 'williamdavis@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/12?v=4',
            name: 'Ava Thompson',
            title: 'Frontend Developer',
            bio: 'Passionate frontend developer with expertise in building responsive and intuitive user interfaces. Proficient in HTML, CSS, and JavaScript frameworks like Vue.js and TypeScript. Committed to delivering high-quality code and creating engaging web experiences.',
            githubLink: 'https://github.com/avathompson',
            linkedinLink: 'https://www.linkedin.com/in/avathompson',
            slackLink: '@Ava Thompson',
            gmailLink: 'avathompson@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/13?v=4',
            name: 'James Anderson',
            title: 'Data Analyst',
            bio: 'Experienced data analyst with a strong background in statistical analysis and data visualization. Proficient in tools like Python and R, with expertise in SQL for data manipulation and querying. Passionate about extracting meaningful insights from data to drive informed decision-making.',
            githubLink: 'https://github.com/jamesanderson',
            linkedinLink: 'https://www.linkedin.com/in/jamesanderson',
            slackLink: '@James Anderson',
            gmailLink: 'jamesanderson@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/14?v=4',
            name: 'Isabella Clark',
            title: 'UI/UX Designer',
            bio: 'Creative UI/UX designer with a focus on crafting visually appealing and user-friendly interfaces. Proficient in design tools such as Sketch and Adobe XD. Experienced in conducting user research and translating insights into compelling designs. Committed to delivering exceptional user experiences.',
            githubLink: 'https://github.com/isabellaclark',
            linkedinLink: 'https://www.linkedin.com/in/isabellaclark',
            slackLink: '@Isabella Clark',
            gmailLink: 'isabellaclark@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/15?v=4',
            name: 'Daniel Roberts',
            title: 'Full Stack Developer',
            bio: 'Full stack developer with expertise in frontend and backend technologies. Skilled in languages like JavaScript, Python, and PHP. Experienced in building and deploying web applications with a focus on performance and scalability. Passionate about creating innovative solutions.',
            githubLink: 'https://github.com/danielroberts',
            linkedinLink: 'https://www.linkedin.com/in/danielroberts',
            slackLink: '@Daniel Roberts',
            gmailLink: 'danielroberts@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/16?v=4',
            name: 'Mia Walker',
            title: 'Mobile App Developer',
            bio: 'Passionate mobile app developer specializing in iOS development. Experienced in Swift and Objective-C, with a strong understanding of mobile app architecture and design patterns. Committed to creating high-quality and engaging mobile experiences for users.',
            githubLink: 'https://github.com/miawalker',
            linkedinLink: 'https://www.linkedin.com/in/miawalker',
            slackLink: '@Mia Walker',
            gmailLink: 'miawalker@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/17?v=4',
            name: 'Alexander Evans',
            title: 'Backend Developer',
            bio: 'Backend developer with a focus on building scalable and secure server-side solutions. Proficient in languages like Python and Java, with experience in frameworks such as Django and Spring Boot. Passionate about optimizing application performance and ensuring data integrity.',
            githubLink: 'https://github.com/alexanderevans',
            linkedinLink: 'https://www.linkedin.com/in/alexanderevans',
            slackLink: '@Alexander Evans',
            gmailLink: 'alexanderevans@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/18?v=4',
            name: 'Charlotte Baker',
            title: 'UI Designer',
            bio: 'Creative UI designer with a passion for crafting visually stunning and intuitive interfaces. Proficient in design tools such as Adobe XD and Figma. Experienced in user research and wireframing. Committed to delivering exceptional user experiences through thoughtful design.',
            githubLink: 'https://github.com/charlottebaker',
            linkedinLink: 'https://www.linkedin.com/in/charlottebaker',
            slackLink: '@Charlotte Baker',
            gmailLink: 'charlottebaker@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/19?v=4',
            name: 'Henry Green',
            title: 'Full Stack Developer',
            bio: 'Full stack developer with expertise in frontend and backend technologies. Skilled in JavaScript, PHP, and SQL. Experienced in building and maintaining web applications from concept to deployment. Passionate about continuous learning and exploring new technologies.',
            githubLink: 'https://github.com/henrygreen',
            linkedinLink: 'https://www.linkedin.com/in/henrygreen',
            slackLink: '@Henry Green',
            gmailLink: 'henrygreen@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/20?v=4',
            name: 'Amelia Turner',
            title: 'Frontend Developer',
            bio: 'Passionate frontend developer with expertise in building responsive and accessible web applications. Proficient in HTML, CSS, and JavaScript frameworks such as React and Vue.js. Dedicated to creating engaging user experiences and optimizing website performance.',
            githubLink: 'https://github.com/ameliaturner',
            linkedinLink: 'https://www.linkedin.com/in/ameliaturner',
            slackLink: '@Amelia Turner',
            gmailLink: 'ameliaturner@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/21?v=4',
            name: 'Benjamin Adams',
            title: 'Data Scientist',
            bio: 'Data scientist with a focus on leveraging data to drive business insights. Skilled in Python, R, and SQL for data analysis and modeling. Experienced in machine learning algorithms and statistical analysis. Passionate about using data-driven approaches to solve complex problems.',
            githubLink: 'https://github.com/benjaminadams',
            linkedinLink: 'https://www.linkedin.com/in/benjaminadams',
            slackLink: '@Benjamin Adams',
            gmailLink: 'benjaminadams@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/22?v=4',
            name: 'Grace Hill',
            title: 'UI/UX Designer',
            bio: 'Creative UI/UX designer specializing in creating visually appealing and user-centric designs. Proficient in design tools such as Sketch and Adobe XD. Experienced in conducting user research, prototyping, and creating interactive design solutions.',
            githubLink: 'https://github.com/gracehill',
            linkedinLink: 'https://www.linkedin.com/in/gracehill',
            slackLink: '@Grace Hill',
            gmailLink: 'gracehill@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/23?v=4',
            name: 'Samuel Phillips',
            title: 'DevOps Engineer',
            bio: 'DevOps engineer with expertise in automating and optimizing software delivery pipelines. Proficient in cloud platforms like AWS and Azure. Skilled in infrastructure as code, containerization, and CI/CD practices. Passionate about streamlining processes and improving collaboration across teams.',
            githubLink: 'https://github.com/samuelphillips',
            linkedinLink: 'https://www.linkedin.com/in/samuelphillips',
            slackLink: '@Samuel Phillips',
            gmailLink: 'samuelphillips@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/24?v=4',
            name: 'Natalie Wilson',
            title: 'UI Designer',
            bio: 'Passionate UI designer with a focus on creating visually stunning and intuitive user interfaces. Skilled in design tools like Sketch and Adobe XD. Experienced in wireframing, prototyping, and collaborating with cross-functional teams to deliver exceptional designs.',
            githubLink: 'https://github.com/nataliewilson',
            linkedinLink: 'https://www.linkedin.com/in/nataliewilson',
            slackLink: '@Natalie Wilson',
            gmailLink: 'nataliewilson@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/25?v=4',
            name: 'Christopher Turner',
            title: 'Backend Developer',
            bio: 'Backend developer with expertise in building scalable and secure server-side applications. Skilled in languages like Python, Java, and Node.js. Experienced in designing and implementing RESTful APIs and working with databases. Passionate about writing clean and efficient code.',
            githubLink: 'https://github.com/christopherturner',
            linkedinLink: 'https://www.linkedin.com/in/christopherturner',
            slackLink: '@Christopher Turner',
            gmailLink: 'christopherturner@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/26?v=4',
            name: 'Chloe Hall',
            title: 'Frontend Developer',
            bio: 'Frontend developer specializing in building responsive and interactive web applications. Proficient in HTML, CSS, and JavaScript frameworks such as React and Angular. Passionate about creating seamless user experiences and writing clean, modular code.',
            githubLink: 'https://github.com/chloehall',
            linkedinLink: 'https://www.linkedin.com/in/chloehall',
            slackLink: '@Chloe Hall',
            gmailLink: 'chloehall@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/27?v=4',
            name: 'Ryan Roberts',
            title: 'Software Engineer',
            bio: 'Software engineer with a focus on building robust and scalable applications. Experienced in various programming languages and frameworks. Skilled in problem-solving and collaborating with cross-functional teams to deliver high-quality software solutions.',
            githubLink: 'https://github.com/ryanroberts',
            linkedinLink: 'https://www.linkedin.com/in/ryanroberts',
            slackLink: '@Ryan Roberts',
            gmailLink: 'ryanroberts@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/28?v=4',
            name: 'Lily Adams',
            title: 'Mobile App Developer',
            bio: 'Passionate mobile app developer with expertise in both Android and iOS platforms. Skilled in Java, Kotlin, Swift, and Objective-C. Experienced in building and deploying mobile applications with a focus on performance and user experience.',
            githubLink: 'https://github.com/lilyadams',
            linkedinLink: 'https://www.linkedin.com/in/lilyadams',
            slackLink: '@Lily Adams',
            gmailLink: 'lilyadams@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/29?v=4',
            name: 'Jackson Clark',
            title: 'Backend Developer',
            bio: 'Backend developer with a focus on building scalable and efficient server-side solutions. Proficient in languages like Python, Node.js, and Go. Experienced in designing and implementing RESTful APIs and working with databases. Passionate about writing clean and maintainable code.',
            githubLink: 'https://github.com/jacksonclark',
            linkedinLink: 'https://www.linkedin.com/in/jacksonclark',
            slackLink: '@Jackson Clark',
            gmailLink: 'jacksonclark@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/30?v=4',
            name: 'Sophie Wilson',
            title: 'UI/UX Designer',
            bio: 'Creative UI/UX designer with a passion for crafting visually appealing and user-centric interfaces. Proficient in design tools such as Sketch, Figma, and Adobe XD. Experienced in conducting user research, creating wireframes, and prototyping interactive designs.',
            githubLink: 'https://github.com/sophiewilson',
            linkedinLink: 'https://www.linkedin.com/in/sophiewilson',
            slackLink: '@Sophie Wilson',
            gmailLink: 'sophiewilson@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/31?v=4',
            name: 'Henry Anderson',
            title: 'Full Stack Developer',
            bio: 'Full stack developer with expertise in frontend and backend technologies. Skilled in JavaScript, Python, and SQL. Experienced in building and deploying web applications with a focus on performance and user experience. Passionate about continuous learning and problem-solving.',
            githubLink: 'https://github.com/henryanderson',
            linkedinLink: 'https://www.linkedin.com/in/henryanderson',
            slackLink: '@Henry Anderson',
            gmailLink: 'henryanderson@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/32?v=4',
            name: 'Scarlett Turner',
            title: 'Frontend Developer',
            bio: 'Passionate frontend developer with expertise in building modern and responsive web applications. Proficient in HTML, CSS, and JavaScript frameworks such as React and Angular. Committed to creating engaging user experiences and writing clean, maintainable code.',
            githubLink: 'https://github.com/scarlettturner',
            linkedinLink: 'https://www.linkedin.com/in/scarlettturner',
            slackLink: '@Scarlett Turner',
            gmailLink: 'scarlettturner@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/33?v=4',
            name: 'Leo Hill',
            title: 'Data Scientist',
            bio: 'Data scientist with expertise in data analysis, machine learning, and statistical modeling. Proficient in Python, R, and SQL. Experienced in working with large datasets and extracting meaningful insights. Passionate about leveraging data to drive informed decision-making.',
            githubLink: 'https://github.com/leohill',
            linkedinLink: 'https://www.linkedin.com/in/leohill',
            slackLink: '@Leo Hill',
            gmailLink: 'leohill@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/34?v=4',
            name: 'Emma Baker',
            title: 'UI/UX Designer',
            bio: 'Creative UI/UX designer with a focus on crafting visually appealing and user-friendly interfaces. Proficient in design tools such as Sketch, Adobe XD, and Figma. Experienced in conducting user research, creating wireframes, and prototyping interactive designs.',
            githubLink: 'https://github.com/emmabaker',
            linkedinLink: 'https://www.linkedin.com/in/emmabaker',
            slackLink: '@Emma Baker',
            gmailLink: 'emmabaker@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/35?v=4',
            name: 'Thomas Roberts',
            title: 'DevOps Engineer',
            bio: 'DevOps engineer with expertise in automating and optimizing software development processes. Skilled in cloud platforms like AWS and Azure. Experienced in CI/CD pipelines, infrastructure as code, and containerization. Passionate about improving efficiency and collaboration in software development.',
            githubLink: 'https://github.com/thomasroberts',
            linkedinLink: 'https://www.linkedin.com/in/thomasroberts',
            slackLink: '@Thomas Roberts',
            gmailLink: 'thomasroberts@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/36?v=4',
            name: 'Mila Wilson',
            title: 'Mobile App Developer',
            bio: 'Passionate mobile app developer with expertise in both Android and iOS platforms. Skilled in Java, Kotlin, Swift, and Objective-C. Experienced in building and deploying high-quality mobile applications with a focus on performance and user experience.',
            githubLink: 'https://github.com/milawilson',
            linkedinLink: 'https://www.linkedin.com/in/milawilson',
            slackLink: '@Mila Wilson',
            gmailLink: 'milawilson@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/37?v=4',
            name: 'Nathan Clark',
            title: 'Backend Developer',
            bio: 'Backend developer with expertise in building scalable and efficient server-side applications. Proficient in languages like Python, Node.js, and Go. Experienced in designing and implementing RESTful APIs and working with databases. Passionate about writing clean and maintainable code.',
            githubLink: 'https://github.com/nathanclark',
            linkedinLink: 'https://www.linkedin.com/in/nathanclark',
            slackLink: '@Nathan Clark',
            gmailLink: 'nathanclark@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/38?v=4',
            name: 'Aria Davis',
            title: 'UI/UX Designer',
            bio: 'Creative UI/UX designer with a passion for crafting visually appealing and user-centric interfaces. Proficient in design tools such as Sketch, Figma, and Adobe XD. Experienced in conducting user research, creating wireframes, and prototyping interactive designs.',
            githubLink: 'https://github.com/ariadavis',
            linkedinLink: 'https://www.linkedin.com/in/ariadavis',
            slackLink: '@Aria Davis',
            gmailLink: 'ariadavis@gmail.com',
        },
        {
            profilePicture: 'https://avatars.githubusercontent.com/u/39?v=4',
            name: 'Ethan Roberts',
            title: 'Full Stack Developer',
            bio: 'Full stack developer with expertise in frontend and backend technologies. Skilled in JavaScript, Python, and SQL. Experienced in building and deploying web applications with a focus on performance and user experience. Passionate about continuous learning and problem-solving.',
            githubLink: 'https://github.com/ethanroberts',
            linkedinLink: 'https://www.linkedin.com/in/ethanroberts',
            slackLink: '@Ethan Roberts',
            gmailLink: 'ethanroberts@gmail.com',
        },
    ];



    return (
            <div className={styles.talentSearch}>
                <SearchBar onSubmit={handleSearchSubmit} />
                <div className={styles.contentWrapper}>
                    <FilterPanel filters={filters} onChange={handleFilterChange} />
                    <div className={styles.resultsContainer}>
                        {
                            fakeData.map((talent) => (
                                <TalentPreview talent={talent} />
                            ))
                        }
                    </div>
                </div>
            </div>
    );
}
