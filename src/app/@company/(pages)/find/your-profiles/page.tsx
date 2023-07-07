"use client";
import React, { use } from 'react';
import { useState, useEffect } from "react";
import './profiles.scss';
import { ProfileSection } from "$/app/@company/components/profile/ProfileSection/ProfileSection";
import { ProfessionalProfile } from '../search/page';
import { useEasy } from 'use-easy';
import { initial } from '$company/components/card/BackCard/BackCard';
import { NotificationItem } from '$components/NotificationAlert/NotificationAlert';

const ProfilesResult: React.FC = () => {

  /* @ts-ignore */
  const { state } = useEasy({ initial: { ...initial, notifications: [] as NotificationItem[] } });

  const [matching_profiles, setMatchingProfiles] = useState<ProfessionalProfile[]>([]);

  const [loading, setLoanding] = useState<boolean>(false)

  useEffect(() => {
    (async () => {
      await fetch("https://recruitment-system-production.up.railway.app/api/v1/filters", {
        method: "POST",
        headers: {
          accept: 'application/json',
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state.filters),
      })
        .then((response) => response.json() as Promise<ProfessionalProfile[]>)
        .then(data => {
          setMatchingProfiles(data as ProfessionalProfile[]);
          setLoanding(true);
        })
        .catch(error => console.error(error));
    })();
  }, []);

  useEffect(() => {

    if (loading && matching_profiles.length === 0) {
      const newNotification: NotificationItem = {
        type: 'danger',
        message: 'No matching profiles 😢'
      };
      
      state.notifications = [
        ...state.notifications, 
        newNotification
      ];

      setTimeout(() => {
        state.notifications = state.notifications
          .filter((notification) => notification !== newNotification);
      }, 60000);
    }

  }, [loading, matching_profiles]);

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
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? matching_profiles.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {  // Implementation to go to the next slide
    setCurrentSlide((prevSlide) => (prevSlide === matching_profiles.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <ProfileSection
      matching_profiles={matching_profiles}
      handlePrevSlide={handlePrevSlide}
      handleNextSlide={handleNextSlide}
      currentSlide={currentSlide}
    />
  );
}

export default ProfilesResult;