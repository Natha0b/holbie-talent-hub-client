import React, { useState, useEffect, FC } from "react";
import styles from "./Carousel.module.scss"
import { BsFillSendFill } from 'react-icons/bs';
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FullProfessionalProfile, ProfessionalProfile } from "../../../(pages)/find/search/page";
import { useProfilePicture } from "../../UserProfile/InfoProfile/InfoProfile";
import { ProfessionalContact } from "../../TalentPreview/TalentPreview";
import { Levels } from "../../UserProfile/Levels/Levels";


interface CarouselProps {
    matching_profiles: FullProfessionalProfile[];
    handlePrevSlide: () => void;
    handleNextSlide: () => void;
    currentSlide: number;
}


export const Image: FC<{talent: ProfessionalProfile}> = ({talent}) => {
    const image = useProfilePicture(talent as FullProfessionalProfile);


    return <img className={styles.profilePicture} src={image} alt="Profile" />
}

export const Carousel: React.FC<CarouselProps> = ({ matching_profiles, handlePrevSlide, handleNextSlide, currentSlide }) => {

    const [githubUsers, setGithubUsers] = useState<{ [profile_id: number]: string }[]>([]);

    useEffect(() => {
        matching_profiles.forEach(profile => {
            fetch(`https://recruitment-system-production.up.railway.app/api/v1/professional_profiles/${profile.profile_id}/contacts`)
                .then(response => response.json() as Promise<ProfessionalContact[]>)
                .then(data => setGithubUsers(prevGithubUsers => ({
                    ...prevGithubUsers,
                    [profile.profile_id]: data[0]?.contact_info || ""
                  })))
                .catch(error => console.error(error));
        });
    }, [matching_profiles])

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
                                <Image talent={profile}/>
                                <button className={styles.contactsProfiles} >
                                    <BsFillSendFill />
                                </button>
                            </div>
                            <div className={styles.userDetails}>
                                <h1 className={styles.name}>{profile.full_name}</h1>
                                <Link to={`/watch/profile/${profile.profile_id}`} replace className={styles.showProfile}>
                                    Show profile
                                </Link>
                                <p className={styles.title}>{profile.headline}</p>
                                <h3>About me</h3>
                                <p className={styles.description}>
                                    {profile.about_me}
                                </p>
                                <h3>Skills</h3>
                                <Levels owner='professional_profiles' id={String(profile.profile_id)} prevProfile={true} />
                                <h3>Type of work sought</h3>
                                <p className={styles.description}>
                                    {profile.job_type.replace(/_/g, ' ')}
                                </p>
                            </div>
                        </div>
                        <div className={styles.contactIcons}>
                            <a href={`https://github.com/${githubUsers[profile.profile_id]}`} target="_blank" rel="noopener noreferrer">
                                <FaGithub className={styles.icon} />
                            </a>
                            <a href={`mailto:${profile.email}`} target="_blank" rel="noopener noreferrer">
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
