import { FaUserClock } from 'react-icons/fa';
import { IDropdownItem } from '../../../../components/Dropdown/Dropdown.type';


export const jobTypeIcons: IDropdownItem[] = [
  { name: 'Full Time', Icon: FaUserClock, value: 'FULL_TIME' },
  { name: 'Part Time', Icon: FaUserClock, value: 'PART_TIME' },
  { name: 'Internship', Icon: FaUserClock, value: 'INTERNSHIP' },
  { name: 'Contract', Icon: FaUserClock, value: 'CONTRACT' },
  { name: 'Volunteer', Icon: FaUserClock, value: 'VOLUNTEER'},
  { name: 'Other', Icon: FaUserClock, value: 'OTHER' },
];
