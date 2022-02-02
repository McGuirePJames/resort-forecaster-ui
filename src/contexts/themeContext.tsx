import {createContext, useState} from 'react';
import {ThemeProvider as ThemeProviderMui} from '@mui/material';
import {darkTheme, lightTheme} from '../constants/themes';

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
