"use client";
import React from 'react';
import { useState } from "react";
import './profiles.scss';
import DashboardLayout from '../find/layout';
import Image from 'next/image';
import javascriptIcon from '../../../../../public/imagenescoderise/java-script1.png';
import cIcon from '../../../../../public/imagenescoderise/c-.png';
import rubyIcon from '../../../../../public/imagenescoderise/ruby.png';
import { ProfileSection } from "$/app/@company/components/profile/ProfileSection/ProfileSection";
import { Carousel } from "$/app/@company/components/profile/Carousel/Carousel";
import { ProfileCard } from "$/app/@company/components/profile/ProfileCard/ProfileCard";
import { UserInfo } from "$/app/@company/components/profile/UserInfo/UserInfo";
import { ContactIcons } from "$/app/@company/components/profile/ContactIcons/ContactIcons";

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

/*"use client";
import React from 'react';
import { useState } from "react";
import './profiles.scss';
import DashboardLayout from '../find/layout';
import Image from 'next/image';
import javascriptIcon from '../../../../../public/imagenescoderise/java-script1.png';
import cIcon from '../../../../../public/imagenescoderise/c-.png';
import rubyIcon from '../../../../../public/imagenescoderise/ruby.png';

interface User {
    name: string;
    profilePicture: string;
    age: number;
    programmingLanguages: string[];
    githubUrl: string;
    linkedinUrl: string;
    gmailUrl: string;
    slackUrl: string;

}

const HomeProfiles: React.FC = () => {
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
            programmingLanguages:['JavaScript', 'C', 'Ruby'],
            githubUrl: 'https://github.com/',
            linkedinUrl: 'https://linkedin.com/',
            gmailUrl: 'https://gmail.com',
            slackUrl: 'https://slack.com/',
        },
        // Agrega más usuarios aquí si es necesario
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    Estas funciones actualizan el estado currentSlide para mostrar el perfil de usuario anterior o siguiente en el carrusel.
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
        <DashboardLayout>
            <section className="profile">
                <h1 className="profile__title">Profiles</h1>
                <div className="container">
                    <div className="card">
                        <div className="carousel">
                            <button className="carousel__button carousel__button--prev" onClick={handlePrevSlide}>
                                &lt;
                            </button>
                            <div className="carousel__slide-container">
                                {users.map((user, index) => (
                                    <div
                                        className={`carousel__slide ${index === currentSlide ? 'carousel__slide--active' : ''}`}
                                        key={index}
                                    >

                                        <div className="user-info">
                                            <div className="icon-profile">
                                                <img className="profile-picture" src={`../../../../imagenescoderise/${user.profilePicture}`} />
                                            </div>
                                            <div className="user-details">
                                                <h1 className="name">{user.name}</h1>
                                                <p className="title">Software Engineer</p>
                                                <p className="description">
                                                    Industry experience: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
                                                    condimentum tortor, vitae gravida ipsum. Nullam ut mi vel nisi auctor fermentum. In hac habitasse
                                                    platea dictumst.
                                                </p>
                                                <p className="description">Programming Languages</p>
                                                <div className="programming-languages">
                                                    {user.programmingLanguages.map((language, index) => (
                                                        <div className="icons-languajes" key={index}>{getLanguageIcon(language)}</div>
                                                    ))}
                                                </div>
                                                <p className="description">
                                                    Type of work sought: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu diam eget
                                                    dui euismod commodo vitae eget augue. Mauris vitae vestibulum quam.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="contact-icons">
                                            <a href={user.githubUrl} target="_blank"><img className="icon" src="../../../../imagenescoderise/github.png" alt="GitHub" width={32} height={32} /> </a>
                                            <a href={user.linkedinUrl} target="_blank"><img className="icon" src="../../../../imagenescoderise/linkedin.png" alt="LinkedIn" width={32} height={32} /> </a>
                                            <a href={user.slackUrl} target="_blank"><img className="icon" src="../../../../imagenescoderise/slack.png" alt="Slack" width={32} height={32} /> </a>
                                            <a href={user.gmailUrl} target="_blank"><img className="icon" src="../../../../imagenescoderise/gmail.png" alt="Gmail" width={32} height={32} /> </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="carousel__button carousel__button--next" onClick={handleNextSlide}>
                                &gt;
                            </button>
                        </div>
                    </div>
                </div >
            </section >
        </DashboardLayout>
    );
};

export default HomeProfiles;*/