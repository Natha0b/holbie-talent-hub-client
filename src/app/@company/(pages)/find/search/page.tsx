"use client";
import React, { useCallback, useState } from 'react';
import styles from './TalentSearch.module.scss';

// Import other components used within TalentSearch
import { SearchBar } from '$company/components/SearchBar/SearchBar';
import { TalentPreview } from '$company/components/TalentPreview/TalentPreview';
import { User } from '$/app/@unsignedin/(pages)/(log)/login/page';


export interface SearchRequestBody {
    filters: string;
}

export interface ProfessionalProfile {
    profile_id: number;
    is_user: number;
    headline: string;
    about_me: string;
    location: string;
    job_name: string;
    kind_job: string;
    job_type: string;
    salary_min: number;
    salary_max: number;
    created_at: Date;
    updated_at: Date;
}

export interface FullProfessionalProfile extends ProfessionalProfile {
    user_id: number;
    first_name: string;
    last_name: string;
    email: string;
    role: string;
    full_name: string;
}

export async function fullProfiles(profiles: ProfessionalProfile[]): Promise<FullProfessionalProfile[]> {
    let completeProfiles: FullProfessionalProfile[] = [];
 
    await Promise.all(profiles.map(async (profile: ProfessionalProfile) => {
        try {
            const {professional_id: _, company_id: __, ...user} = await fetch(`https://recruitment-system-production.up.railway.app/api/v1/professional_profiles/${profile.profile_id}/user`)
            .then(response => response.json() as Promise<User>);

            completeProfiles.push({
                ...user, ...profile, full_name: `${user.first_name} ${user.last_name}`
            });
        } catch (error) {
            console.error(error);
        }

    }));

    return completeProfiles;
}

function validation<T, >({whenError}: {whenError: T}) {
    return async (response: Response) => {

        if (response.status === 200) {
            return response.json() as Promise<T>;
        }
    
        if (response.status === 201) {
            const data = await response.json() as Promise<T>;
            console.log(`${response.status}, register created successfully:`,  data);
            return data;
        }
    
        if (response.status === 400) {
            const res = await response.json() as {message: string};
            console.error(`${response.status}:`, res.message)
            return whenError
        }

        if (response.status === 401) {
            const res = await response.json() as {message: string};
            console.error(`${response.status}:`, res.message)
            return whenError
        }

        if (response.status === 404) {
            const res = await response.json() as {message: string};
            console.error(`${response.status}:`, res.message)
            return whenError
        }
    
        if (response.status === 500) {
            const res = await response.json() as {message: string};
            console.error(`${response.status}:`, res.message)
            return whenError
        }

        return whenError
    }
}

export default function TalentSearch() {
    const [profiles, setProfiles] = useState<FullProfessionalProfile[]>([]);

    const handleSearchSubmit = useCallback(async (keywords: string) => {
        await fetch("https://recruitment-system-production.up.railway.app/api/v1/search_engine",
            {
                method: 'POST',
                headers: {accept: 'application/json', 'content-type': 'application/json'},
                body: JSON.stringify({
                    "filters": keywords
                } as SearchRequestBody)
            }
        )
        .then(validation<ProfessionalProfile[]>({whenError: []}))
        .then(data => fullProfiles(data))
        .then(data => setProfiles(data as FullProfessionalProfile[]))
        .catch(error => console.error(error));
    }, []);

    return (
        <div className={styles.talentSearch}>
            <SearchBar onSubmit={handleSearchSubmit} />
            <div className={styles.contentWrapper}>
                <div className={styles.resultsContainer}>
                    {
                        profiles.map((talent, index) => (
                            <div key={index}>
                                <TalentPreview talent={talent} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
