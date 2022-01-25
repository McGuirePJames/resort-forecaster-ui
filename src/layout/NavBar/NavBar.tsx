import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {AppBar, Toolbar, Typography} from '@mui/material';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import './NavBar.scss';

export const NavBar = () => {
    return (
        <AppBar className="navBar" position="static">
            <Toolbar>
                <FontAwesomeIcon icon={faCoffee} size="2x" />
                <Typography
                    sx={{flexGrow: 1, marginLeft: '15px', fontWeight: 300}}
                    fontSize={26}
                >
                    AvaMap
                </Typography>
                <Typography
                    variant="h1"
                    component="div"
                    sx={{flexGrow: 1}}
                    fontSize={30}
                >
                    Avalanches In Utah: March 2012 - Jan 2022
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
