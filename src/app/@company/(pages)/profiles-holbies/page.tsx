"use client";
import React from 'react';
import { useState } from "react";
import './profiles.scss'
import Image from 'next/image';
import javascriptIcon from '../../../../../public/imagenescoderise/java-script1.png';
import cIcon from '../../../../../public/imagenescoderise/c-.png';
import rubyIcon from '../../../../../public/imagenescoderise/ruby.png';
import { ProfileSection } from "$/app/@company/components/profile/ProfileSection/ProfileSection";

import Layout from '../find/layout';

export interface User {
    name: string;
    profilePicture: string;
    age: number;
    programmingLanguages: string[];
    githubUrl: string;
    linkedinUrl: string;
    gmailUrl: string;
    slackUrl: string;
}

export default function HomeProfiles() {
    const users: User[] = [  // Array of user objects with their profile information
        {
            name: 'John Doe',
            profilePicture: 'profile1.jpg',
            age: 30,
            programmingLanguages: ['JavaScript', 'C'],
            githubUrl: 'https://github.com/',
            linkedinUrl: 'https://linkedin.com/',
            gmailUrl: 'https://gmail.com',
            slackUrl: 'https://slack.com/',
        },
        {
            name: 'Ana Diaz',
            profilePicture: 'profile2.jpg',
            age: 25,
            programmingLanguages: ['JavaScript', 'Ruby'],
            githubUrl: 'https://github.com/',
            linkedinUrl: 'https://linkedin.com/',
            gmailUrl: 'https://gmail.com',
            slackUrl: 'https://slack.com/',
        },
        {
            name: 'Jane Smith',
            profilePicture: 'profile3.jpg',
            age: 25,
            programmingLanguages: ['JavaScript', 'C', 'Ruby'],
            githubUrl: 'https://github.com/',
            linkedinUrl: 'https://linkedin.com/',
            gmailUrl: 'https://gmail.com',
            slackUrl: 'https://slack.com/',
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrevSlide = () => {  // Implementation to handle going to the previous slide
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? users.length - 1 : prevSlide - 1));
    };

    const handleNextSlide = () => {  // Implementation to handle going to the next slide
        setCurrentSlide((prevSlide) => (prevSlide === users.length - 1 ? 0 : prevSlide + 1));
    };

    const getLanguageIcon = (language: string) => { // Implementation to return the icon component based on the provided language
        switch (language) {
            case 'JavaScript':
                return <Image src={javascriptIcon} alt="JavaScript" />;
            case 'C':
                return <Image src={cIcon} alt="C" />;
            case 'Ruby':
                return <Image src={rubyIcon} alt="Ruby" />;
            default:
                return null;
        }
    };

    return (
        <Layout>
            {/* Renders the ProfileSection component */}
            <ProfileSection
                users={users}
                handlePrevSlide={handlePrevSlide}
                handleNextSlide={handleNextSlide}
                currentSlide={currentSlide}
            />

        </Layout>
    );
}

export { HomeProfiles };

