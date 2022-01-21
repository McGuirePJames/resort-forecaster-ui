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
        action: {
            active: colorSecondary,
            hover: colorSecondary,
            hoverOpacity: 0.7,
            focus: colorSecondary,
            focusOpacity: 1,
            selected: colorSecondary,
            selectedOpacity: 1,
        },
    },
});

export default theme;
