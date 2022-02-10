import {createContext, useEffect, useState} from 'react';
import {ThemeProvider as ThemeProviderMui} from '@mui/material';
import {darkTheme, lightTheme} from '../constants/themes';
import {preferredThemeLocalStorageKey} from '../constants/variables';

export enum Theme {
    Light = 1,
    Dark = 2,
}

export interface ThemeContextProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: Theme.Light,
    setTheme: () => {},
});

export const ThemeProvider: React.FC = ({children}) => {
    const [currentTheme, setCurrentTheme] = useState<Theme>(Theme.Light);

    useEffect(() => {
        const preferredTheme = localStorage.getItem(
            preferredThemeLocalStorageKey
        );

        if (preferredTheme) {
            setTheme(+(preferredTheme as unknown as Theme));
        } else if (window.matchMedia('(prefers-color-scheme: dark)')) {
            setTheme(Theme.Dark);
        }
    }, []);

    const setTheme = (theme: Theme) => {
        setCurrentTheme(theme);
    };

    return (
        <ThemeContext.Provider
            value={{
                theme: currentTheme,
                setTheme,
            }}
        >
            <ThemeProviderMui
                theme={currentTheme === Theme.Light ? lightTheme : darkTheme}
            >
                {children}
            </ThemeProviderMui>
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
