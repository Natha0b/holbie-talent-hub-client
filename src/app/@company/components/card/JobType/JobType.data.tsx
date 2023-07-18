import { IDropdownItem } from 'src/app/components/Dropdown/Dropdown.type';
import { FaUserClock } from 'react-icons/fa';


export const jobTypeIcons: IDropdownItem[] = [
  { name: 'Full Time', Icon: FaUserClock, value: 'FULL_TIME' },
  { name: 'Part Time', Icon: FaUserClock, value: 'PART_TIME' },
  { name: 'Internship', Icon: FaUserClock, value: 'INTERNSHIP' },
  { name: 'Contract', Icon: FaUserClock, value: 'CONTRACT' },
  { name: 'Volunteer', Icon: FaUserClock, value: 'VOLUNTEER'},
  { name: 'Other', Icon: FaUserClock, value: 'OTHER' },
];
