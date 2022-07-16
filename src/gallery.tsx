import React, {useEffect, useState} from 'react';
import {AppBar, Box, Button, Drawer, Grid, IconButton, List, ListItem, Toolbar, Typography} from "@mui/material";
import styled from "@emotion/styled";
import HideImageIcon from '@mui/icons-material/HideImage';
import ImageIcon from '@mui/icons-material/Image';
import Gelaat from "./prijzen/Gelaat";
import Massage from "./prijzen/Massage";
import Nagels from "./prijzen/Nagels";
import Ontharing from "./prijzen/Ontharing";
import Wenkbrouwen from "./prijzen/Wenkbrouwen";
import Wimpers from "./prijzen/Wimpers";
import MenuIcon from "@mui/icons-material/Menu";

const Gallery = () => {
    const [selected, setSelected] = useState(1)
    const [images, setImages] = useState<any>({})

    const [open, setState] = useState(false);
    const toggleDrawer = (open: boolean) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(open);
    };

    const StyledButton = styled(Button)({
        color:"#DFE0DF",
        backgroundColor:"#A78D65",
        minWidth:"100px",
        height:"48px",
        "&:hover": {
            backgroundColor:"#d7ae6b",
        }
    })
    function importAll(r:any) {
        let images:any = {};
        r.keys().map((item:any, index:number) => { images[item.replace('./', '')] = r(item); });
        return images;
    }



    useEffect(() =>{
        let images = 1;
        if(selected == 1){
             images = importAll(require.context('./images/massage', true, /\.(png|jpe?g|svg)$/));
        }else if(selected==2){
             images = importAll(require.context('./images/nagels', true, /\.(png|jpe?g|svg)$/));
        }else if(selected==3){
             images = importAll(require.context('./images/ontharing', true, /\.(png|jpe?g|svg)$/));
        }else if(selected==4){
             images = importAll(require.context('./images/wenkbrouwen', true, /\.(png|jpe?g|svg)$/));
        }else if(selected==5){
             images = importAll(require.context('./images/wimpers', true, /\.(png|jpe?g|svg)$/));
        }
        setImages(images)

    },[selected])
    return (
        <div>
            <div id="diensten">
            </div>
            <AppBar sx={{width: "95%", backgroundColor: "#896310",ml:"2.5%", mr:"2.5%",mt:"24px",position:"static", height:"80px"}}>
                <Toolbar sx={{display:"flex", justifyContent:"space-around", alignItems:"center", mt:"auto", mb:"auto"}}>
                    <IconButton
                        aria-label="open drawer"
                        onClick={toggleDrawer(true)}
                        sx={{display: {sm: 'block', md: 'none',}, m: "auto"}}>
                        <MenuIcon/>
                    </IconButton>
                    <Drawer
                        anchor="top"
                        variant="temporary"
                        open={open}
                        onClose={toggleDrawer(false)}

                    >
                        <Box sx={{backgroundColor: "#272727", color: "#FFF8E8"}}>
                            <StyledButton variant={"contained"} className="titel" onClick={()=> {setSelected(1)
                                toggleDrawer(false)}} >massage</StyledButton>
                            <StyledButton variant={"contained"} className="titel" onClick={()=> {setSelected(2)
                                toggleDrawer(false)}}>nagels</StyledButton>
                            <StyledButton variant={"contained"} className="titel"onClick={()=> {setSelected(3)
                                toggleDrawer(false)}}>ontharing</StyledButton>
                            <StyledButton variant={"contained"} className="titel" onClick={()=> {setSelected(4)
                                toggleDrawer(false)}}>wenkbrouwen</StyledButton>
                            <StyledButton variant={"contained"} className="titel" onClick={()=> {setSelected(5)
                                toggleDrawer(false)}}>wimpers</StyledButton>

                        </Box>
                    </Drawer>
                    <Box className="hide">
                        <StyledButton variant={"contained"} className="titel" onClick={()=> setSelected(1)}>massage</StyledButton>
                        <StyledButton variant={"contained"} className="titel" onClick={()=> setSelected(2)}>nagels</StyledButton>
                        <StyledButton variant={"contained"} className="titel" onClick={()=> setSelected(3)}>ontharing</StyledButton>
                        <StyledButton variant={"contained"} className="titel" onClick={()=> setSelected(4)}>wenkbrouwen</StyledButton>
                        <StyledButton variant={"contained"} className="titel" onClick={()=> setSelected(5)}>wimpers</StyledButton>
                    </Box>

                    <IconButton onClick={()=>  selected==0?setSelected(1):setSelected(0)} sx={{color:"#A78D65"}}>
                        {selected==0?<HideImageIcon fontSize="large"/>:<ImageIcon fontSize="large"/>}
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Grid container spacing={3} sx={{width:"90%", ml:"auto", mr:"auto", mt:"16px"}}>
                <Grid item xs={12} sm={6} md={6}>
                        {selected==1?<Massage/>:selected==2?<Nagels/>:selected==3?<Ontharing/>:selected==4?<Wenkbrouwen/>:selected==5?<Wimpers/>:""}
                </Grid>
                {
                    Object.keys(images).map((key, value)=>{
                        const image = images[key]
                        return(
                            <Grid item xs={12} sm={6} md={4}><img src={image} alt="img" className="gallery-img"/></Grid>
                        )
                    })
                }

            </Grid>


        </div>
    );
};

export default Gallery;
