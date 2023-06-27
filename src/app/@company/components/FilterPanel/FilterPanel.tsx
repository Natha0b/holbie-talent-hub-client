"use client";


import React from 'react';
import styles from './FilterPanel.module.scss';
import { BsFilterRight } from 'react-icons/bs';

import { useCardState } from '$components/hooks/useCardState';
import { Dropdown } from '$components/Dropdown/Dropdown';
import { Input } from '$components/Input/Input';
import { Multiselector } from '$components/Multiselector/Multiselector';
import { IDropdownItem } from '$components/Dropdown/Dropdown.type';

import { FaGraduationCap, FaUserGraduate, FaChalkboardTeacher, FaUserMd } from 'react-icons/fa';
import { technologyIcons } from '../card/TechCard/TechCard.dada';

export const educationLevelIcons: IDropdownItem[] = [
    { name: 'Diploma', Icon: FaGraduationCap, value: 'diploma' },
    { name: "Bachelor's Degree", Icon: FaUserGraduate, value: 'bachelor' },
    { name: "Master's Degree", Icon: FaChalkboardTeacher, value: 'master' },
    { name: 'Doctorate', Icon: FaUserMd, value: 'doctorate' },
];


export const FilterPanel: React.FC<{ filters: Record<string, string>; onChange: (newFilters: object) => void }> = ({
    filters,
    onChange,
}) => {
    // Function to handle filter change
    const handleFilterChange = (filterName: string, value: string) => {
        const newFilters = { ...filters, [filterName]: value };
        onChange(newFilters);
    };

    const { active, activeShow, cardRef } = useCardState();

    return (
        <div ref={cardRef as any} className={`${styles.filterPanel} ${active && styles['filterPanel--active']}`} onMouseOver={activeShow} onClick={activeShow} >
            {/* Experience filter */}
            <i className={styles.filterIcon}>
                <BsFilterRight />
            </i>
            <section className={styles.filterSectionScroll}>
                {/* Education filter */}
                <div className={styles.filterSection}>
                    <h3>Education</h3>
                    <Dropdown
                        label="Education Level"
                        items={educationLevelIcons}
                        onItemSelect={({ value }: IDropdownItem) => handleFilterChange('educationLevel', String(value))}
                    />
                    <Input
                        label="Field of Study"
                        value={filters.fieldOfStudy ?? ''}
                        onChange={(value) => handleFilterChange('fieldOfStudy', value)}
                    />
                </div>

                {/* Skills filter */}
                <div className={styles.filterSection}>

                    <h3>Skills</h3>
                    <Multiselector label="Required Skills" items={technologyIcons} onSelectedItems={() => {

                    }} />
                    <Multiselector label="Optionals Skills" items={technologyIcons} onSelectedItems={() => {

                    }} />
                </div>

                {/* Certifications and courses filter */}
                <div className={styles.filterSection}>
                    <h3>Certifications and Courses</h3>
                    <Input
                        label="Certification:"
                        value={filters.certification}
                        onChange={(value) => handleFilterChange('certification', value)}
                    />
                    <label htmlFor="courses">Courses:</label>
                    <input
                        type="text"
                        id="courses"
                        value={filters.courses || ''}
                        onChange={(e) => handleFilterChange('courses', e.target.value)}
                    />
                </div>
            </section>
        </div>
    );
};
