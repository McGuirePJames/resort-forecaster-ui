import { createTheme, ListItemText } from '@mui/material';
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
    typography: {
        allVariants: {
            color: colorPrimary,
        }
    }
});

export default theme;
