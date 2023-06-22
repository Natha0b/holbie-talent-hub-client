export interface Repository {
    id: number;
    name: string;
    description: string;
    stars: number;
}

export const popularRepositories: Repository[] = [
    {
        id: 1,
        name: 'AirBnb Clone',
        description: 'The project aims to deploy a server on a simple copy of the AirBnB website.',
        stars: 200,
    },
    {
        id: 2,
        name: 'Simple Shell',
        description: 'In this project the reconstruction of the Unix Shell a command line interpreter is performed.',
        stars: 100,
    },
    {
        id: 3,
        name: 'Printf Project',
        description: ' Printf is the function we use to make a formatted printout. Printf= the f stands for input by formatted output',
        stars: 50,
    },
];