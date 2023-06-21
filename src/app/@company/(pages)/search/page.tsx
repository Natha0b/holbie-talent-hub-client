"use client";
// TalentSearch.tsx

import React, { useState } from 'react';
import styles from './TalentSearch.module.scss';
import Layout from '../find/layout';


// Import other components used within TalentSearch
import { SearchBar } from '$company/components/SearchBar/SearchBar';
import { FilterPanel } from '$company/components/FilterPanel/FilterPanel';
import { TalentPreview, Talent } from '$company/components/TalentPreview/TalentPreview';

export default function TalentSearch() {
    const [filters, setFilters] = useState({});

    // Function to handle filter changes
    const handleFilterChange = (newFilters: object) => {
        setFilters(newFilters);
    };

    // Function to handle search submit
    const handleSearchSubmit = (keywords: string) => {
        // Perform search with keywords and filters
        // Update the search results
    };

    // create a lalet facke data

    const fakeData: Talent[] = [
        {
            profilePicture: 'https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Ali',
            title: 'Web Developer',
            bio: 'Soy apasionada desarrolladora web con experiencia en el campo. Me encanta crear aplicaciones y sitios web que no solo sean visualmente atractivos, sino también funcionales y eficientes.',
        },
        {
            profilePicture: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Andres',
            title: 'Web Developer',
            bio: 'Tengo un sólido conocimiento de HTML, CSS y JavaScript, y me encanta trabajar con frameworks como React y Angular para desarrollar interfaces interactivas y dinámicas.',
        },
        {
            profilePicture: 'https://images.pexels.com/photos/997489/pexels-photo-997489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Sebastian',
            title: 'Web Developer',
            bio: '  Tengo experiencia en la integración de API y en el desarrollo de soluciones de comercio electrónico. Siempre me mantengo actualizado/a sobre las últimas tendencias y tecnologías en el desarrollo web para ofrecer las mejores soluciones a mis clientes.',
        },
        {
            profilePicture: 'https://images.pexels.com/photos/3648124/pexels-photo-3648124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Liza',
            title: 'Web Developer',
            bio: 'Con experiencia en el campo. Estoy entusiasmada de colaborar en proyectos emocionantes y de aprender de otros profesionales talentosos. ¡No dudes en contactarme para cualquier consulta o colaboración!',
        },
        {
            profilePicture: 'https://images.pexels.com/photos/15390203/pexels-photo-15390203/free-photo-of-hombre-persona-gafas-de-sol-retrato.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Hugo',
            title: 'Web Developer',
            bio: 'Tengo conocimientos en frameworks como Bootstrap y Vue.js, que me permiten desarrollar aplicaciones web rápidas y escalables. Siempre estoy dispuesto a aprender y mejorar mis habilidades para mantenerme al día con las últimas tendencias y tecnologías. ',
        },
        {
            profilePicture: 'https://images.pexels.com/photos/9578230/pexels-photo-9578230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Ana',
            title: 'Web Developer',
            bio: 'Me encanta trabajar en proyectos desafiantes y buscar soluciones creativas para cada problema que encuentro. Tengo experiencia en el desarrollo de sitios web responsivos, optimizados para dispositivos móviles y con un enfoque en la usabilidad y la accesibilidad.',
        },
    ];


    return (
        <Layout>
            <div className={styles.talentSearch}>
                <SearchBar onSubmit={handleSearchSubmit} />
                <div className={styles.contentWrapper}>
                    <FilterPanel filters={filters} onChange={handleFilterChange} />

                    <div className={styles.resultsContainer}>
                        {
                            fakeData.map((talent) => (
                                <TalentPreview talent={talent} />
                            ))
                        }
                        {/* Render talent previews based on search results */}
                        {/* Use the TalentPreview component */}

                    </div>
                </div>
            </div>
        </Layout>
    );
}
