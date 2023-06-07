"use client";
import React from 'react';
import { useState } from "react";
import './styleprofile.css';

interface User {
    name: string;
    profilePicture: string;
    age: number;
    programmingLanguages: string[];
}

const HomeProfiles: React.FC = () => {
    const users: User[] = [
        {
            name: 'John Doe Holbie Random',
            profilePicture: '/profile1.jpg',
            age: 30,
            programmingLanguages: ['JavaScript', 'Python', 'C', 'C++'],
        },
        {
            name: 'Jane Smith',
            profilePicture: '/profile2.jpg',
            age: 25,
            programmingLanguages: ['Java', 'C#', 'Ruby'],
        },
        {
            name: 'Ana diaz',
            profilePicture: '/profile2.jpg',
            age: 25,
            programmingLanguages: ['Java', 'C#', 'Ruby'],
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

    return (
        <section className="profile">
            <h1 className="profile__title">Profiles</h1>
            <div className="carousel">
                <button className="carousel__button carousel__button--prev" onClick={handlePrevSlide}>
                    Prev
                </button>
                <div className="carousel__slide-container">
                    {users.map((user, index) => (
                        <div
                            className={`carousel__slide ${index === currentSlide ? 'carousel__slide--active' : ''}`}
                            key={index}
                        >
                            <img className="profile-picture" src="/logo.png"  width={50} height={50} />
                            <div className="user-info">
                                <h1 className="name">{user.name}</h1>
                                <p className="title">Software Engineer</p>
                                <p className="description">
                                    Experiencia en la industria: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
                                    condimentum tortor, vitae gravida ipsum. Nullam ut mi vel nisi auctor fermentum. In hac habitasse
                                    platea dictumst.
                                </p>
                                <p className="description">Lenguajes de Programación: {user.programmingLanguages.join(', ')}</p>
                                <p className="description">
                                    Tipo de trabajo buscado: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu diam eget
                                    dui euismod commodo vitae eget augue. Mauris vitae vestibulum quam.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel__button carousel__button--next" onClick={handleNextSlide}>
                    Next
                </button>
            </div>
        </section>
    );
};

export default HomeProfiles;