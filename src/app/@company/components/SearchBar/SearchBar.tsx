"use client";
import React, { useState } from 'react';
import styles from './SearchBar.module.scss';

/**
 * The SearchBar component represents a search bar form.
 * It allows users to enter keywords and submit the search.
 * The component uses CSS modules to style its elements.
 * It receives a callback function onSubmit to handle the search submission.
 */
export const SearchBar: React.FC<{ onSubmit: (keywords: string) => void }> = ({ onSubmit }) => {
    const [keywords, setKeywords] = useState('');

    // Function to handle keyword input change
    const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKeywords(event.target.value);
    };

    // Function to handle search submit
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit(keywords);
    };

    return (
        <form className={styles.searchBar} onSubmit={handleSubmit}>
            <input
                type="text"
                value={keywords}
                onChange={handleKeywordChange}
                placeholder="Enter keywords"
            />
            <button type="submit">Search</button>
        </form>
    );
};

