import {createTheme} from '@material-ui/core';
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
