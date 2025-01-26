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
        <>
        <button type="button" onClick={toggleTheme} className="text-dark">{theme == 'light' ? <MoonIcon /> : <SunIcon />}</button>
        </>
    );
};

export default ThemeSwitcher;
