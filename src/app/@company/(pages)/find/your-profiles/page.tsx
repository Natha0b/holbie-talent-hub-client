"use client";
import React from 'react';
import { useState } from "react";
import './profiles.scss'
import { ProfileSection } from "$/app/@company/components/profile/ProfileSection/ProfileSection";
import { ProfessionalProfile } from '../search/page';

const ProfilesResult: React.FC<{ params: { id: string } }> = ({ params: { id } }) => {

   // const [users, setUsers] = useState<User[]>([]);
    

    const users: ProfessionalProfile[] = [
        {
          "profile_id": 17,
          "is_user": 1,
          "headline": "Backend Developer",
          "about_me": "Backend Developer with knowledge in several technologies with 5 years of work experience",
          "location": "Madrid",
          "job_name": "Backend",
          "kind_job": "REMOTE",
          "job_type": "FULL_TIME",
          "salary_min": 8000,
          "salary_max": 10000,
          "created_at": "2023-06-22T12:34:56Z" as unknown as Date,
          "updated_at": "2023-06-22T12:34:56Z" as unknown as Date
        },
        {
          "profile_id": 23,
          "is_user": 1,
          "headline": "Frontend Developer",
          "about_me": "Frontend Developer in a startup with 2 years of work experience",
          "location": "Madrid",
          "job_name": "Backend",
          "kind_job": "REMOTE",
          "job_type": "FULL_TIME",
          "salary_min": 4000,
          "salary_max": 10000,
          "created_at": "2023-06-22T12:34:56Z" as unknown as Date,
          "updated_at": "2023-06-22T12:34:56Z" as unknown as Date
        },
        {
          "profile_id": 54,
          "is_user": 1,
          "headline": "devops",
          "about_me": "devops in a startup with 2 years of work experience",
          "location": "Madrid",
          "job_name": "Backend",
          "kind_job": "REMOTE",
          "job_type": "FULL_TIME",
          "salary_min": 2000,
          "salary_max": 5000,
          "created_at": "2023-06-22T12:34:56Z" as unknown as Date,
          "updated_at": "2023-06-22T12:34:56Z" as unknown as Date
        }
      ];

    const [currentSlide, setCurrentSlide] = useState(0); // Use the hook useState for the state

    const handlePrevSlide = () => {  // Implementation to go to previous slide
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? users.length - 1 : prevSlide - 1));
    };

    const handleNextSlide = () => {  // Implementation to go to the next slide
        setCurrentSlide((prevSlide) => (prevSlide === users.length - 1 ? 0 : prevSlide + 1));
    };

    return (
        <ProfileSection
            users={users}
            handlePrevSlide={handlePrevSlide}
            handleNextSlide={handleNextSlide}
            currentSlide={currentSlide}
        />
    );
}

export default ProfilesResult;