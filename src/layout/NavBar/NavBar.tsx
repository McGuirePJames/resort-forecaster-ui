import {AppBar, Toolbar, Typography} from '@mui/material';
import './NavBar.scss';
import AvaMapLogo from '../../components/Icons/AvaMapLogo';
import { ThemeSlider } from '../../components/Display/ThemeSlider';

export const NavBar = () => {
    return (
        <AppBar className="navBar" position="static">
            <Toolbar>
                {/* <div className="logo">
                    <AvaMapLogo height={'75px'} width={'75px'} fill={'#527652'} stroke={'black'}/>
                </div> */}
                <Typography
                    variant="h1"
                    component="div"
                    sx={{flexGrow: 1, textAlign: 'center', fontWeight: 400}}
                    fontSize={30}
                    className="title"
                >
                    Utah Avalanches: March 2012 - Jan 2022
                </Typography>
                <ThemeSlider />
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
