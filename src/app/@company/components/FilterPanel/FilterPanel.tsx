"use client";


import React from 'react';
import styles from './FilterPanel.module.scss';
import { useCardState } from '$/app/components/hooks/useCardState';

export const FilterPanel: React.FC<{ filters: Record<string, string>; onChange: (newFilters: object) => void }> = ({
    filters,
    onChange,
}) => {
    // Function to handle filter change
    const handleFilterChange = (filterName: string, value: string) => {
        const newFilters = { ...filters, [filterName]: value };
        onChange(newFilters);
    };

    const {active, activeShow, cardRef } = useCardState();

    return (
        <div ref={cardRef as any} className={`${styles.filterPanel} ${active && styles['filterPanel--active']}`} onMouseOver={activeShow} onClick={activeShow} >
            {/* Experience filter */}
            <div className={styles.filterSection}>
                <h3>Experience</h3>
                <label htmlFor="experienceYears">Years of Experience:</label>
                <select
                    value={filters?.experience ?? ''}
                    onChange={(e) => handleFilterChange('experience', e.target.value)}
                >
                    <option value="">Any</option>
                    <option value="1">1 year</option>
                    <option value="2">2 years</option>
                    <option value="3">3 years</option>
                    {/* Add more options as needed */}
                </select>
                <label htmlFor="previousIndustries">Previous Industries:</label>
                <input
                    type="text"
                    id="previousIndustries"
                    value={filters.previousIndustries || ''}
                    onChange={(e) => handleFilterChange('previousIndustries', e.target.value)}
                />
                <label htmlFor="responsibilityLevel">Responsibility Level:</label>
                <select
                    id="responsibilityLevel"
                    value={filters.responsibilityLevel || ''}
                    onChange={(e) => handleFilterChange('responsibilityLevel', e.target.value)}
                >
                    <option value="">Any</option>
                    <option value="junior">Junior</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="senior">Senior</option>
                </select>
            </div>

            {/* Education filter */}
            <div className={styles.filterSection}>
                <h3>Education</h3>
                <label htmlFor="educationLevel">Education Level:</label>
                <select
                    id="educationLevel"
                    value={filters.educationLevel || ''}
                    onChange={(e) => handleFilterChange('educationLevel', e.target.value)}
                >
                    <option value="">Any</option>
                    <option value="diploma">Diploma</option>
                    <option value="bachelor">Bachelor's Degree</option>
                    <option value="master">Master's Degree</option>
                    <option value="doctorate">Doctorate</option>
                </select>
                <label htmlFor="fieldOfStudy">Field of Study:</label>
                <input
                    type="text"
                    id="fieldOfStudy"
                    value={filters.fieldOfStudy || ''}
                    onChange={(e) => handleFilterChange('fieldOfStudy', e.target.value)}
                />
            </div>

            {/* Skills filter */}
            <div className={styles.filterSection}>
                <h3>Skills</h3>
                <label htmlFor="requiredSkills">Required Skills:</label>
                <input
                    type="text"
                    id="requiredSkills"
                    value={filters.requiredSkills || ''}
                    onChange={(e) => handleFilterChange('requiredSkills', e.target.value)}
                />
                <label htmlFor="skillLevel">Skill Level:</label>
                <select
                    id="skillLevel"
                    value={filters.skillLevel || ''}
                    onChange={(e) => handleFilterChange('skillLevel', e.target.value)}
                >
                    <option value="">Any</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>
            </div>

            {/* Certifications and courses filter */}
            <div className={styles.filterSection}>
                <h3>Certifications and Courses</h3>
                <label htmlFor="certifications">Certifications:</label>
                <input
                    type="text"
                    id="certifications"
                    value={filters.certifications || ''}
                    onChange={(e) => handleFilterChange('certifications', e.target.value)}
                />
                <label htmlFor="courses">Courses:</label>
                <input
                    type="text"
                    id="courses"
                    value={filters.courses || ''}
                    onChange={(e) => handleFilterChange('courses', e.target.value)}
                />
            </div>

            {/* Add more filter sections as needed */}
        </div>
    );
};
