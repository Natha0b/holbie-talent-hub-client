import React from 'react';
import { Dropdown } from '../../../../components/Dropdown/Dropdown';
import { jobTypeIcons } from './JobType.data';

/**
 * The JobTypeCard component represents a dropdown for selecting a job type.
 * It uses the Dropdown component from 'src/app/components/Dropdown/Dropdown'.
 * The dropdown items are populated from the jobTypeOptions data.
 */
const JobTypeCard = () => (
    <Dropdown
        label="Job Type"
        items={jobTypeIcons}
    />

);

export { JobTypeCard };
