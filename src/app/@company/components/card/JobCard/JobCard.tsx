import React from 'react';
import { Dropdown } from '../../../../components/Dropdown/Dropdown';
import { jobKindIcons } from './JobCard.data';

/**
 * The JobCard component represents a card that displays job information.
 * It includes a Dropdown component to select the kind of job.
 */
const JobCard = () => (
    <Dropdown label="Kind Job" items={jobKindIcons} />
);

export { JobCard };
