import React from "react";
import { HomeProfiles  } from "$company/(pages)/profiles-holbies/page";
import { Carousel } from "../Carousel/Carousel";
import styles from "./ProfileSection.module.css";

interface ProfileSectionProps {
    users: User[];
    handlePrevSlide: () => void;
    handleNextSlide: () => void;
    currentSlide: number;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ users, handlePrevSlide, handleNextSlide, currentSlide }) => {
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

export { ProfileSection };
