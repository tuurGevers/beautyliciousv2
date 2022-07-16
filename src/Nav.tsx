import React, {useEffect, useState} from 'react';
import {
    AppBar,
    Grid,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    Box,
    List,
    ListItemButton,
    ListItemText, Select, SelectChangeEvent, MenuItem
} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';


let navlinks = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    position: "sticky",


}

let navlinksSmall = {
    fontSize: "20px",
    "&:hover": {
        color: "#e2b402",
    },
}


let link = {
    borderRadius: 0,
    textDecoration: "none",
    color: "#FFF8E8",
    fontSize: "20px",
    display: {xs: 'none', sm: 'block',},
}


const Nav = () => {
    const [open, setState] = useState(false);
    const toggleDrawer = (open: boolean) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(open);
    };

    return (
            <AppBar sx={{width: "97%", backgroundColor: "#896310",ml:"1.5%", mr:"1.5%",mt:"24px", position:"sticky", top:"4px",}}>
                <Toolbar>
                    <Grid container>
                        <Grid item xs={11} sx={navlinks}>
                            <IconButton
                                aria-label="open drawer"
                                onClick={toggleDrawer(true)}
                                sx={{display: {xs: 'block', sm: 'none',}, m: "auto"}}>
                                <MenuIcon sx={{color: "white"}}/>
                            </IconButton>
                            <Drawer
                                anchor="top"
                                variant="temporary"
                                open={open}
                                onClose={toggleDrawer(false)}

                            >
                                <Box sx={{backgroundColor: "#272727", color: "#FFF8E8"}}>
                                    <a href="#">
                                        <Typography onClick={toggleDrawer(false)} className="titel" sx={navlinksSmall}>Home</Typography>
                                    </a>
                                    <a href="#about">
                                        <Typography onClick={toggleDrawer(false)}
                                                    sx={navlinksSmall} className="titel">Dorien</Typography>
                                    </a>
                                    <a href="#diensten">
                                        <Typography onClick={toggleDrawer(false)} sx={navlinksSmall} className="titel">diensten
                                        </Typography></a>
                                    <a href="#contact">
                                        <Typography onClick={toggleDrawer(false)} sx={navlinksSmall} className="titel">contact
                                        </Typography></a>
                                </Box>
                            </Drawer>


                            <a href="#">
                                <Typography sx={link} className="titel">Home</Typography>
                            </a>
                            <a href="#about">
                                <Typography sx={link} className="titel">Dorien</Typography>
                            </a>
                            <a href="#diensten">
                                <Typography sx={link} className="titel">diensten</Typography>
                            </a>
                            <a href="#contact">
                                <Typography sx={link} className="titel">contact</Typography>
                            </a>


                        </Grid>

                    </Grid>


                </Toolbar>

            </AppBar>

    );
};

export default Nav;
