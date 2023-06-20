import { IDropdownItem } from '$/app/components/Dropdown/Dropdown.type';
import { FaLaptop, FaBuilding, FaExchangeAlt } from 'react-icons/fa';

export const jobKindIcons: IDropdownItem[] = [
    { name: 'Remote', Icon: FaLaptop, value: 'Remote' },
    { name: 'Onside', Icon: FaBuilding, value: 'Onside' },
    { name: 'Both', Icon: FaExchangeAlt, value: 'Both' },
];
