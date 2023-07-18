import { IDropdownItem } from '../../../../components/Dropdown/Dropdown.type';
import { FaLaptop, FaBuilding, FaExchangeAlt } from 'react-icons/fa';

export const jobKindIcons: IDropdownItem[] = [
    { name: 'Remote', Icon: FaLaptop, value: 'REMOTE' },
    { name: 'Onside', Icon: FaBuilding, value: 'ONSIDE' },
    { name: 'Both', Icon: FaExchangeAlt, value: 'BOTH' },
];
