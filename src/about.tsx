import React from 'react';
import {Box, Grid, Typography} from "@mui/material";


const About = () => {
    return (
        <>
            <div id="about">
            </div>
            <Grid container sx={{mt: "24px", width: "90%", ml: "auto", mr: "auto"}}>
                <Grid item xs={12} md={5}><img src={require("./images/dorien/about1.jpg")} alt="dorien"
                                               style={{border: "6px solid #DFE0DF", width:"90%",marginTop:"20%"}}/> </Grid>
                <Grid item xs={12} md={7}>
                    <Box>
                        <Typography variant="h4" textAlign="center" className="titel">Wie ben ik?</Typography>
                        <Typography sx={{lineHeight: "32px", fontSize: "24px",mt:"4px"}} className="tekst">
                            Hey hallo, ik ben <span style={{color: "#FFF8E8", fontWeight: "bold"}}>Dorien</span>. Fijn
                            dat je me beter wil leren kennen!<br/>
                            Ik ben boven al een <span
                            style={{color: "#FFF8E8", fontWeight: "bold"}}>doorbijtertje</span>.
                            In 2012 rondde ik mijn studies in de <span style={{color: "#FFF8E8", fontWeight: "bold"}}>esthetische lichaamsverzorging</span>
                            af met een specialisatiejaar.
                            Ik <span style={{color: "#FFF8E8", fontWeight: "bold"}}>droomde</span> er toen al van om
                            een <span style={{color: "#FFF8E8", fontWeight: "bold"}}>wellness service</span>
                            uit te bouwen op mijn manier en begon te timmeren aan dat pad.
                            Door continue aan <span
                            style={{color: "#FFF8E8", fontWeight: "bold"}}>mezelf</span> te <span
                            style={{color: "#FFF8E8", fontWeight: "bold"}}>werken</span>
                            kan ik u de <span style={{color: "#FFF8E8", fontWeight: "bold"}}>beste zorgen</span> bieden,
                            in alle <span style={{color: "#FFF8E8", fontWeight: "bold"}}>kwaliteit, sereniteit en geborgenheid.</span>
                            Ik hoop snel van je te horen en je te helpen om je nog beter in je vel te laten voelen.
                            Want geef toe, jij verdient dat!
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

        </>

    );
};

export default About;
