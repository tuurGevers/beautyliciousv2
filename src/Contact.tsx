import React, {useState} from 'react';
import {Typography, Grid, Box, Button, List, ListItem, Card, CardContent, TextField, createTheme, ThemeProvider} from "@mui/material";
import Axios from "axios";


const Contact = () => {


    return (
        <Box sx={{width:"90%", ml:"auto", mr:"auto"}}>
            <div id="contact">
            </div>
            <div>
                <Typography variant="h4" className="titel">contacteer me</Typography>
                <Typography sx={{lineHeight: "32px", fontSize: "24px",mt:"24px"}} className="tekst">
                    Is er nog iets onduidelijk, heb je speciale wensen of wil je al meteen een afspraak maken?
                    Fijn, laat me maar gauw weten waarmee ik je van dienst kan zijn.
                    Hieronder vind je mijn contactgegevens, je kan ook gebruik maken van het contactformulier.<br/><br/>

                    Ik stel alles in het werk om je zo snel mogelijk te antwoorden en je een onvergetelijke wellness beleving te bezorgen.
                    Hartelijke groetjes, Dorien.<br/><br/>




                    <Grid container>
                        <Grid item xs={12} sm={4}>
                            <span style={{color: "#FFF8E8", fontWeight: "bold"}} className="titel"> Beautilicious</span> <br/>
                            Kempenlaan 134<br/>
                            2290 Vorselaar<br/><br/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <span style={{color: "#FFF8E8", fontWeight: "bold"}} className="titel"> Bel me<br/></span>
                            0486 05 17 18<br/><br/>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                           <span style={{color: "#FFF8E8", fontWeight: "bold"}} className="titel"> Mail me<br/></span>
                            dorien1308@gmail.com<br/>
                        </Grid>
                    </Grid>







                </Typography>
            </div>
        </Box>
    );
};

export default Contact;
