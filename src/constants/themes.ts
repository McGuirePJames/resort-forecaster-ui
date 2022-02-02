import {createTheme} from '@mui/material';
import {
    colorPrimary,
    colorWhite,
    colorDisabledGray,
} from './colors';

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: colorPrimary,
            light: colorWhite,
        },
        secondary: {
            main: colorWhite,
            contrastText: '#212121',
        },
    },
    typography: {
        fontSize: 14,
        h1: {
            color: colorWhite,
        },
        allVariants: {
            color: '#212121',
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#1f2020',
            light: '#505050',
        },
        secondary: {
            main: '#2e2e2e',
            contrastText: colorWhite,
        },
        common: {
            white: colorWhite,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    '&.Mui-disabled': {
                        backgroundColor: colorDisabledGray,
                    },
                },
            },
        },
    },
    typography: {
        allVariants: {
            color: '#9e9e9e',
        },
    },
});
