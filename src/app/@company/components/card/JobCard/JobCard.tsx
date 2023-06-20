import React from 'react';
import { Dropdown } from '$components/Dropdown/Dropdown';
import { jobKindIcons } from './JobCard.data';

const JobCard = () => (
  <Dropdown label="Kind Job" items={jobKindIcons} />
);

export { JobCard };
