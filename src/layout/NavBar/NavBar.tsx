import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {AppBar, Toolbar, Typography} from '@mui/material';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import './NavBar.scss';

export const NavBar = () => {
    return (
        <AppBar className="navBar" position="static">
            <Toolbar>
                <FontAwesomeIcon icon={faCoffee} size="2x" />
                <Typography sx={{ flexGrow: 1, marginLeft: '15px' }} fontSize={26}>AvaMap</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
