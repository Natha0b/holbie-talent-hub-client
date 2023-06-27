// Static information on English language levels
import { IDropdownItem } from '$components/Dropdown/Dropdown.type';
import { FaLanguage } from 'react-icons/fa';

const englishLevel = [
    'A0: Beginner',
    'A1-A2: Basic',
    'A2-B1: Pre-intermediate',
    'B1: Intermediate',
    'B2: Upper-intermediate',
    'C1-C2: Advanced',
];


export const englishLevelIcons: IDropdownItem[] = englishLevel.map((level) => ({
  name: level,
  Icon: FaLanguage,
  value: level,
}));
