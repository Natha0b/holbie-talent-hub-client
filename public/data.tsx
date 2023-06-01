import React from 'react';
import { DiAndroid, DiAptana, DiDatabase } from "react-icons/di";

const profiles =  [
    {
        jobName: 'Dev Android',
        location: 'Bogota D.C',
        kindJob: 'On site',
        icon: DiAndroid,
    },
    {
        kindJob: 'Remote',
        location: 'Medellin',
        jobName: 'Devops',
        icon: DiAptana,
    },
    {
        jobName: 'Back end',
        kindJob: 'Remote',
        location: 'Cartagena',
        icon: DiDatabase,
    }
];

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

export{ profiles, listOfCities }