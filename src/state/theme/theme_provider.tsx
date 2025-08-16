import React, { useEffect, useState, type ReactNode } from 'react';
import { ThemeDataContext } from './theme_context';


interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeDataProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || 'client-a');
    useEffect(() => {
        const theme1 = localStorage.getItem('theme');
        if (theme1) {
            setTheme(theme1);
        }
    }, [])

    return (
        <ThemeDataContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeDataContext.Provider>
    );
};
