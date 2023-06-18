"use client";
// TalentSearch.tsx

import React, { useState } from 'react';
import styles from './TalentSearch.module.scss';
import Layout from '../find/layout';


// Import other components used within TalentSearch
import { SearchBar } from '$company/components/SearchBar/SearchBar';
import { FilterPanel } from '$company/components/FilterPanel/FilterPanel';
import { TalentPreview, Talent } from '$company/components/TalentPreview/TalentPreview';

export default function TalentSearch() {
    const [filters, setFilters] = useState({});

    // Function to handle filter changes
    const handleFilterChange = (newFilters: object) => {
        setFilters(newFilters);
    };

    // Function to handle search submit
    const handleSearchSubmit = (keywords: string) => {
        // Perform search with keywords and filters
        // Update the search results
    };

    // create a lalet facke data

    const fakeData: Talent[] = [
        {
            profilePicture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
            name: 'Ali',
            title: 'Web Developer',
        },
        {
            profilePicture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
            name: 'Reza',
            title: 'Web Developer',
        },
        {
            profilePicture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
            name: 'Mehdi',
            title: 'Web Developer',
        },
        {
            profilePicture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
            name: 'Saeed',
            title: 'Web Developer',
        },
        {
            profilePicture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
            name: 'Ahmad',
            title: 'Web Developer',
        },
        {
            profilePicture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
            name: 'Hossein',
            title: 'Web Developer',
        },
    ];


    return (
        <Layout>
            <div className={styles.talentSearch}>
                <SearchBar onSubmit={handleSearchSubmit} />
                <div className={styles.contentWrapper}>
                    <FilterPanel filters={filters} onChange={handleFilterChange} />
                    <div className={styles.resultsContainer}>
                        {
                            fakeData.map((talent) => (
                                <TalentPreview talent={talent} />
                            ))
                        }
                        {/* Render talent previews based on search results */}
                        {/* Use the TalentPreview component */}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
