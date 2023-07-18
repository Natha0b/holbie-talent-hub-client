"use client";
import { useCallback, useState } from 'react';
import styles from './TalentSearch.module.scss';

// Import other components used within TalentSearch
import { SearchBar } from '../../../../@company/components/SearchBar/SearchBar';
import { TalentPreview } from '../../../../@company/components/TalentPreview/TalentPreview';
import { fullProfiles } from './fullProfiles';
import { API } from '../../../../../env';
import { useGuard } from '../../../../../useGuard';


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


export function validation<T, >({whenError}: {whenError: T}) {
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
    useGuard();

    const handleSearchSubmit = useCallback(async (keywords: string) => {
        await fetch(`${API}/api/v1/search_engine`,
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
