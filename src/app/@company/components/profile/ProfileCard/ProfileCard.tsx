import React from "react";
import styles from "./ProfileCard.module.scss";
import { UserInfo } from "../UserInfo/UserInfo";
import { User } from "$/app/@company/(pages)/find/your-profiles/page";
import { ContactIcons } from "../ContactIcons/ContactIcons";

interface ProfileCardProps {
    user: User;
    index: number;
    currentSlide: number;
}


/**
 * The ProfileCard component represents a profile card in the carousel.
 * It receives a user object, index, and currentSlide as props.
 * The user object contains information about the user to be displayed in the card.
 * The index represents the position of the card in the carousel.
 * The currentSlide indicates the currently active slide in the carousel.
 * The component renders the UserInfo component and the ContactIcons component for the user.
 * The active slide is highlighted with a specific CSS class.
 */
export const ProfileCard: React.FC<ProfileCardProps> = ({ user, index, currentSlide }) => {
    return (
        <div className={`${styles["carousel__slide"]} ${index === currentSlide ? styles["carousel__slide--active"] : ""}`}>

            <UserInfo user={user} />
            <ContactIcons user={user} />
        </div>
        
    );
};
