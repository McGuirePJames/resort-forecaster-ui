import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import React from 'react';

export const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} />
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
