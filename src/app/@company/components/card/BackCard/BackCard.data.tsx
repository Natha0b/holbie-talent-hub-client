// date static

import { IDropdownItem } from '$components/Dropdown/Dropdown.type';
import { MdLocationCity } from 'react-icons/md';

const listOfCities = [
    'Bogota D.C',
    'Medellin',
    'Cartagena',
    'Barranquilla',
    'Cali',
    'Bucaramanga',
    'Pereira',
    'Santa Marta',
    'Villavicencio',
    'Cucuta',
    'Ibague',
    'Pasto',
    'Manizales',
    'Armenia',
    'Neiva',
    'Popayan',
    'Monteria',
    'Valledupar',
    'Sincelejo',
    'Tunja',
    'Riohacha',
    'Florencia',
    'Yopal',
    'Quibdo',
    'Mocoa',
    'San Jose del Guaviare',
    'Mitú',
    'Puerto Carreño',
    'Leticia',
];

export const listOfCitiesIcons: IDropdownItem[] = listOfCities.map((city) => ({
    name: city,
    Icon: MdLocationCity,
    value: city,
}));

