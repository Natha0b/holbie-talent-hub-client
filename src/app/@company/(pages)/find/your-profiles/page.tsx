"use client";
import React, { use } from 'react';
import { useState, useEffect } from "react";
import './profiles.scss';
import { ProfileSection } from "$/app/@company/components/profile/ProfileSection/ProfileSection";
import { ProfessionalProfile } from '../search/page';
import { useEasy } from 'use-easy';
import { initial } from '$company/components/card/BackCard/BackCard';
import { NotificationAlert, NotificationItem } from '$components/NotificationAlert/NotificationAlert';
import { useRouter } from 'next/navigation';
import Link from "next/link";

const ProfilesResult: React.FC = () => {

    /* @ts-ignore */
    const { state } = useEasy({ initial: { ...initial, notifications: [] as NotificationItem[] } });

    const [matching_profiles, setMatchingProfiles] = useState<ProfessionalProfile[]>([]);
    const [loading, setLoanding] = useState<boolean>(false)

    const router = useRouter();

    useEffect(() => {
        fetch("https://recruitment-system-production.up.railway.app/api/v1/filters", {
            method: "POST",
            headers: {
                accept: 'application/json',
                "Content-Type": "application/json",
            },
            body: JSON.stringify(state[`filter${state.filterKey}` as keyof typeof state]),
        })
            .then((response) => response.json() as Promise<ProfessionalProfile[]>)
            .then(data => {
                setMatchingProfiles(Array.isArray(data) ? data as ProfessionalProfile[] : []);
                setLoanding(true);
            })
            .catch(error => console.error(error));
    }, [state]);

    useEffect(() => {
        //console.log(state.filterKey);
        if (loading && matching_profiles.length === 0) {
            const newNotification: NotificationItem = {
                type: 'danger',
                message: 'No matching profiles 🚨'
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

    const [currentSlide, setCurrentSlide] = useState(0); // Use the hook useState for the state

    const handlePrevSlide = () => {  // Implementation to go to previous slide
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? matching_profiles.length - 1 : prevSlide - 1));
    };

    const handleNextSlide = () => {  // Implementation to go to the next slide
        setCurrentSlide((prevSlide) => (prevSlide === matching_profiles.length - 1 ? 0 : prevSlide + 1));
    };

    return (
        <div>
            {!loading ? (
                <div>Loading...</div>
            ) :
                (loading && matching_profiles.length === 0) ?
                    <section className='alertBox'>
                        {/* <NotificationAlert /> */}
                        <div>
                            <p>{/* {state.notifications.at(0)!.message} */}No matching profiles 🚨</p>
                            <div className='alertButton'><Link href='/find/search'>Return</Link></div>
                        </div>
                    </section>
                    : <ProfileSection
                        matching_profiles={matching_profiles}
                        handlePrevSlide={handlePrevSlide}
                        handleNextSlide={handleNextSlide}
                        currentSlide={currentSlide}
                    />
            }
        </div>
    );
};

export default ProfilesResult;
