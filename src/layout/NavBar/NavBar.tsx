import {AppBar, Toolbar, Typography} from '@mui/material';
import './NavBar.scss';
import AvaMapLogo from '../../components/Icons/AvaMapLogo';

export const NavBar = () => {
    return (
        <AppBar className="navBar" position="static">
            <Toolbar>
                <div className="logo">
                    <AvaMapLogo height={'75px'} width={'75px'} fill={'#3d583d'} stroke={'black'}/>
                </div>
                {/* <Typography
                    sx={{flexGrow: 1, marginLeft: '20px', fontWeight: 300}}
                    fontSize={26}
                >
                    AvaMap
                </Typography> */}
                <Typography
                    variant="h1"
                    component="div"
                    sx={{flexGrow: 1, textAlign: 'center', fontWeight: 400}}
                    fontSize={30}
                >
                    Avalanches In Utah: March 2012 - Jan 2022
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
