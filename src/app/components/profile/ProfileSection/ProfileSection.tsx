import React from "react";
import { User } from "$company/(pages)/profiles-holbies/page";
import { Carousel } from "../Carousel/Carousel";
import styles from "./ProfileSection.module.scss";

interface ProfileSectionProps {
    users: User[];
    handlePrevSlide: () => void;
    handleNextSlide: () => void;
    currentSlide: number;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ users, handlePrevSlide, handleNextSlide, currentSlide }) => {
    return (
        <section className={styles.profile}>
            <h1 className={styles.profile__title}>Profiles</h1>
            <div className={styles.container}>
                <div className={styles.card}>
                    <Carousel
                        users={users}
                        handlePrevSlide={handlePrevSlide}
                        handleNextSlide={handleNextSlide}
                        currentSlide={currentSlide}
                    />
                </div>
            </div>
        </section>
    );
};

