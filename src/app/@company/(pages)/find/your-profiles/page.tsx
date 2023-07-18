"use client";
import React from 'react';
import { useState, useEffect } from "react";
import './profiles.scss';
import { ProfileSection } from "../../../../@company/components/profile/ProfileSection/ProfileSection";
import { ProfessionalProfile, FullProfessionalProfile } from '../search/page';
import { useEasy } from 'use-easy';
import { initial } from '../../../../@company/components/card/BackCard/BackCard';
import { NotificationItem } from '../../../../components/NotificationAlert/NotificationAlert';
import { useNavigate } from 'react-router-dom';
import { API } from '../../../../../env';
import { useGuard } from '../../../../../useGuard';
import { fullProfiles } from '../search/fullProfiles';


const ProfilesResult: React.FC = () => {

    /* @ts-ignore */
    const { state } = useEasy({ initial: { ...initial, notifications: [] as NotificationItem[] } });

    const [matching_profiles, setMatchingProfiles] = useState<ProfessionalProfile[]>([]);
    const [fullMatchingProfiles, setFullMatchingProfiles] = useState<FullProfessionalProfile[]>([]);
    const [loading, setLoanding] = useState<boolean>(false)
    const [adding, setAdding] = useState<boolean>(false)
    useGuard();

    const router = useNavigate();

    useEffect(() => {
        if (state.filterKey === -1) return;

        if (typeof state[`filter${state.filterKey}` as keyof typeof state] === 'undefined') return;

        console.log(state);
        fetch(`${API}/api/v1/filters`, {
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
        (async () => {
            await setFullMatchingProfiles(await fullProfiles(matching_profiles));
        })();
    }, [matching_profiles]);

    useEffect(() => {
        
        if (state.filterKey === -1) return;

        if (typeof state[`filter${state.filterKey}` as keyof typeof state] === 'undefined') return;

        
        //console.log(state.filterKey);
        if (loading && matching_profiles.length === 0 && !adding) {
            setAdding(true);
            const newNotification: NotificationItem = {
                type: 'danger',
                message: 'No matching profiles 🚨'
            };

            state.notifications = [
                ...state.notifications,
                newNotification
            ];

            
        }

    }, [loading, state, matching_profiles, adding]);

    useEffect(() => {
        const timer = setTimeout(() => {
            state.notifications = [];
        }, 6000);

        return () => clearTimeout(timer);
    }, [adding]);
        

    const handleReturn = () => {
        delete state.notifications[0];
        state.notifications = [];
        setLoanding(false);
        router("/find/search");
    };

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
                (loading && matching_profiles.length === 0 && adding) ?
                    <section className='alertBox'>
                        {/* <NotificationAlert /> */}
                        <div>
                            <p>{state.notifications.at(0)!.message}</p>
                            <button className='alertButton' onClick={handleReturn}>Return</button>
                        </div>
                    </section>
                    : <ProfileSection
                        matching_profiles={fullMatchingProfiles}
                        handlePrevSlide={handlePrevSlide}
                        handleNextSlide={handleNextSlide}
                        currentSlide={currentSlide}
                    />
            }
        </div>
    );
};

export default ProfilesResult;
