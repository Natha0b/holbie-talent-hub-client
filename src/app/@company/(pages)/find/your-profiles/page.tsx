"use client";
import React from 'react';
import { useState } from "react";
import './profiles.scss'
import { ProfileSection } from "$/app/@company/components/profile/ProfileSection/ProfileSection";


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
    const users: User[] = [
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

    return (
        <ProfileSection
            users={users}
            handlePrevSlide={handlePrevSlide}
            handleNextSlide={handleNextSlide}
            currentSlide={currentSlide}
        />
    );
}

export { HomeProfiles };

