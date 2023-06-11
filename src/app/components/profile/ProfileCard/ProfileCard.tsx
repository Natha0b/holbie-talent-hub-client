import React from "react";
import styles from "./ProfileCard.module.css";
import { UserInfo } from "../UserInfo/UserInfo";
import { User } from "$company/(pages)/profiles-holbies/page";
import { ContactIcons } from "../ContactIcons/ContactIcons";

interface ProfileCardProps {
    user: User;
    index: number;
    currentSlide: number;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ user, index, currentSlide }) => {
    return (
        <div className={`${styles["carousel__slide"]} ${index === currentSlide ? styles["carousel__slide--active"] : ""}`}>
            <UserInfo user={user} />
            <ContactIcons user={user} />
        </div>
    );
};
