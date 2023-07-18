"use client";
import React, { useCallback, useEffect, useState } from 'react';
import styles from './ThemeButton.module.scss';
// get sun icon from 'react-icons'
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri';

export const ThemeButton: React.FC = () => {
    const [value, setTheme] = useState('');


    const getStateTheme = useCallback(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            return 'dark';
        }
        if (theme === 'light') {
            return 'light';
        }

        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }

        return 'light';
    }, []);

    useEffect(() => {
        const theme = getStateTheme();
        setTheme(theme);
        if (theme) {
            document.documentElement.setAttribute('data-theme', theme);
        }
    }, [getStateTheme]);

    const toggleTheme = useCallback(() => {
        const theme = getStateTheme();
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            setTheme('light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        }
    }, [getStateTheme]);



    return (
        <button className={styles.themeButton} onClick={toggleTheme}>
            {
                value && (
                    value === 'dark'
                        ? <RiSunFill />
                        : <RiMoonClearFill />
                )
            }
        </button>
    );
};
