"use client";
import React from 'react';
import { useState } from "react";
import './profiles.scss';
import DashboardLayout from '../find/layout';
import Image from 'next/image';
import javascriptIcon from '../../../../../public/imagenescoderise/java-script1.png';
import cIcon from '../../../../../public/imagenescoderise/c-.png';
import rubyIcon from '../../../../../public/imagenescoderise/ruby.png';

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
            name: 'Ana diaz',
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
        // Agrega más usuarios aquí si es necesario
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    /*Estas funciones actualizan el estado currentSlide para mostrar el perfil de usuario anterior o siguiente en el carrusel.*/
    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? users.length - 1 : prevSlide - 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === users.length - 1 ? 0 : prevSlide + 1));
    };

    const getLanguageIcon = (language: string) => {
        switch (language) {
            case 'JavaScript':
                return <Image src={javascriptIcon} alt="JavaScript" width={32} height={32} />;
            case 'C':
                return <Image src={cIcon} alt="C" width={32} height={32} />;
            case 'Ruby':
                return <Image src={rubyIcon} alt="Ruby" width={32} height={32} />;
            default:
                return null;
        }
    };

    return (
        <>
            <Carousel users={users} handlePrevSlide={function (): void {
                throw new Error('Function not implemented.');
            } } handleNextSlide={function (): void {
                throw new Error('Function not implemented.');
            } } currentSlide={0}/>
            {/* <ContactIcons user={undefined}/>
            <ProfileCard user={undefined} index={0} currentSlide={0}/> */}
            <ProfileSection users={[]} handlePrevSlide={function (): void {
                throw new Error('Function not implemented.');
            } } handleNextSlide={function (): void {
                throw new Error('Function not implemented.');
            } } currentSlide={0}/>
            {/* <UserInfo user={undefined}/> */}
            <ProfileSection
                users={users}
                handlePrevSlide={handlePrevSlide}
                handleNextSlide={handleNextSlide}
                currentSlide={currentSlide}
            />
        </>
    );
};

export default HomeProfiles;
