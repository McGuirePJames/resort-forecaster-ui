import {BottomNavigation, useTheme} from '@material-ui/core';
import './Footer.scss';

export const Footer = () => {
    const theme = useTheme();

    return (
        <BottomNavigation
            className="footer"
            style={{backgroundColor: theme.palette.primary.main}}
        />
    );
};

export default Footer;
