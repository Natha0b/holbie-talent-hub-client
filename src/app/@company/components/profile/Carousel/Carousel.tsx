import React from "react";
import styles from "./Carousel.module.scss"
import { BsFillSendFill } from 'react-icons/bs';
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaSlack, FaEnvelope } from "react-icons/fa";
import Link from 'next/link';
import { ProfessionalProfile } from "$/app/@company/(pages)/find/search/page";
import Image from 'next/image';
import { profiles } from "../../TalentPreview/TalentPreview";

interface CarouselProps {
    matching_profiles: ProfessionalProfile[];
    handlePrevSlide: () => void;
    handleNextSlide: () => void;
    currentSlide: number;
}


export const Carousel: React.FC<CarouselProps> = ({ matching_profiles, handlePrevSlide, handleNextSlide, currentSlide }) => {
    return (
        <div className={styles.carousel}>
            <button className={styles.carousel__button} onClick={handlePrevSlide}>
                <BiChevronLeft />
            </button>
            <div className={styles.carousel__slideContainer}>
                {matching_profiles.map((profile, index) => (
                    <div key={index} className={`${styles.carousel__slide} ${index === currentSlide ? styles.carousel__slideActive : ""}`}>
                        <div className={styles.userInfo}>
                            <div className={styles.iconProfile}>
                                <Image className={styles.profilePicture} src={profiles[Math.floor(Math.random() * profiles.length)]} alt="Profile" />
                                <button className={styles.contactsProfiles} >
                                    <BsFillSendFill />
                                </button>
                            </div>
                            <div className={styles.userDetails}>
                                <h1 className={styles.name}>{profile.headline}</h1>
                                <Link href={`/watch/profile/${profile.profile_id}`} replace className={styles.showProfile}>
                                    Show profile
                                </Link>
                                <p className={styles.title}>Software Engineer</p>
                                <h3>Industry experience:</h3>
                                <p className={styles.description}>
                                    Passionate software developer with expertise in web development. Skilled in HTML, CSS, JavaScript, and Python. Committed to delivering high-quality code and exceeding client expectations. Strong problem-solving and communication skills. Seeking new challenges and opportunities in innovative projects
                                </p>
                                <p className={styles.description}>Programming Languages:</p>
                                <div className={styles.programmingLanguages}>
                                    {/* user.programmingLanguages.map((language, index) => (
                                        <div className={styles.iconsLanguages} key={index}>
                                            {getLanguageIcon(language)}
                                        </div>
                                    )) */}
                                </div>
                                <h3>Type of work sought:</h3>
                                <p className={styles.description}>
                                    Remote | Full Time
                                </p>
                            </div>
                        </div>
                        <div className={styles.contactIcons}>
                            <a href={"user.githubLink"} target="_blank" rel="noopener noreferrer">
                                <FaGithub className={styles.icon} />
                            </a>
                            <a href={"user.linkedinLink"} target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className={styles.icon} />
                            </a>
                            <a href={"user.slackLink"} target="_blank" rel="noopener noreferrer">
                                <FaSlack className={styles.icon} />
                            </a>
                            <a href={`mailto:${"user.email"}`} target="_blank" rel="noopener noreferrer">
                                <FaEnvelope className={styles.icon} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <button className={styles.carousel__button} onClick={handleNextSlide}>
                <BiChevronRight />
            </button>
           
        </div>
    );
};
