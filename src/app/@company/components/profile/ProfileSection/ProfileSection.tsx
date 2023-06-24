import React from "react";
import { User } from "$/app/@company/(pages)/find/your-profiles/page";
import { Carousel } from "../Carousel/Carousel";
import styles from "./ProfileSection.module.scss";

interface ProfileSectionProps {
    users: User[];
    handlePrevSlide: () => void;
    handleNextSlide: () => void;
    currentSlide: number;
}


/**
 * The ProfileSection component represents a section containing profiles.
 * It receives users, handlePrevSlide, handleNextSlide, and currentSlide as props.
 * The users array contains the list of users to be displayed in the carousel.
 * The handlePrevSlide and handleNextSlide functions are used to navigate the carousel.
 * The currentSlide represents the currently active slide in the carousel.
 * The component renders a title and the Carousel component with the provided props.
 */
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

