import React from 'react';
import styles from './EnglishCard.module.scss'
import { Dropdown } from '$components/Dropdown/Dropdown';
import { englishLevelIcons } from './EnglishCard.data';

/**
 * The EnglishCard component represents a dropdown for selecting an English level.
 * It uses the Dropdown component from '$components/Dropdown/Dropdown'.
 * The dropdown items are populated from the englishLevelIcons data.
 */
const EnglishCard = () => (
    <Dropdown
        label="English Level"
        items={englishLevelIcons}
    />
);

export { EnglishCard };
