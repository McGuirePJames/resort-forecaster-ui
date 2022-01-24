import {createTheme} from '@mui/material';
import {colorPrimary, colorSecondary} from './colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: colorPrimary,
        },
        secondary: {
            main: colorSecondary,
        },
    },
});

export default theme;
