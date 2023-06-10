import React from "react";
import { HomeProfiles } from "$company/(pages)/profiles-holbies/page";
import styles from "./ProfileCard.module.css";

interface ProfileCardProps {
    user: User;
    index: number;
    currentSlide: number;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user, index, currentSlide }) => {
    return (
        <div className={`${styles["carousel__slide"]} ${index === currentSlide ? styles["carousel__slide--active"] : ""}`}>
            <UserInfo user={user} />
            <ContactIcons user={user} />
        </div>
    );
};

export { ProfileCard };
