import React from "react";
import { ProfileCard } from "../ProfileCard/ProfileCard"
import styles from "./Carousel.module.scss"
import { User } from "$/app/@company/(pages)/find/your-profiles/page";
import handleSendMessage from '$/app/@company/(pages)/@chat/chat/page';
import { BsFillSendFill } from 'react-icons/bs';

interface CarouselProps {
    users: User[];
    handlePrevSlide: () => void;
    handleNextSlide: () => void;
    currentSlide: number;
}

/**
 * The Carousel component represents a carousel/slider for displaying profile cards.
 * It receives an array of users, previous slide handler, next slide handler, and the current slide index as props.
 * It renders profile cards for each user and provides navigation buttons for previous and next slides.
 * It also includes a button for sending messages and uses the BsFillSendFill icon from react-icons.
 */

export const Carousel: React.FC<CarouselProps> = ({ users, handlePrevSlide, handleNextSlide, currentSlide }) => {
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
            <button className={styles.contactsprofiles} onClick={handleSendMessage}>
                <BsFillSendFill />
            </button>

        </div>
    );
};
