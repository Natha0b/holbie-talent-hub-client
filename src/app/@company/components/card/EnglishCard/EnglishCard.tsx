import React from 'react';
import styles from './EnglishCard.module.scss'
import { Dropdown } from '$components/Dropdown/Dropdown';
import { englishLevelIcons } from './EnglishCard.data';



const EnglishCard = () => (
    <Dropdown
        label="English Level"
        items={englishLevelIcons}
    />
);

export { EnglishCard };
