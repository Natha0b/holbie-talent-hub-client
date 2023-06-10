import React from "react";
import { ProfileCard } from "../ProfileCard/ProfileCard"
import styles from "./Carousel.module.css"

interface CarouselProps {
    users: User[];
    handlePrevSlide: () => void;
    handleNextSlide: () => void;
    currentSlide: number;
}

const Carousel: React.FC<CarouselProps> = ({ users, handlePrevSlide, handleNextSlide, currentSlide }) => {
    return (
        <div className={styles.carousel}>
            <button className={styles["carousel__button carousel__button--prev"]} onClick={handlePrevSlide}>
                &lt;
            </button>
            <div className={styles["carousel__slide-container"]}>
                {users.map((user, index) => (
                    <ProfileCard user={user} index={index} currentSlide={currentSlide} key={index} />
                ))}
            </div>
            <button className={styles["carousel__button carousel__button--next"]} onClick={handleNextSlide}>
                &gt;
            </button>
        </div>
    );
};

export { Carousel };






