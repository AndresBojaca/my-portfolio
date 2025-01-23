'use client';

import React, { useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import {
    SunIcon,
    MoonIcon
} from "@radix-ui/react-icons";

const ThemeSwitcher: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div className='fixed bottom-10 w-auto right-10 z-50'>
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Sitio web en Construcción!</span>
            <button type="button" onClick={toggleTheme} className="text-dark bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm p-4 me-2 mb-2 dark:text-light dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{theme == 'light' ? <MoonIcon /> : <SunIcon /> }</button>
        </div>
    );
};

export default ThemeSwitcher;
