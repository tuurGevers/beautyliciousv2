import React, {useRef, useState} from 'react';
import {Box, Button, Card, CardContent, createTheme, Grid, TextField, ThemeProvider, Typography} from "@mui/material";
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const form: any = useRef();


    const theme = createTheme({
        palette: {
            primary: {
                main: "#A78D65",

            }
        }
    });

    const handleSubmit = (e: any) => {
        emailjs.sendForm('service_2232eue', 'template', form.current, '7Hn_2iqbnX2E99V5S')

    }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ml: "2.5%"}}>
                <Grid container sx={{width: "95%"}} spacing={2}>

                    <Grid item xs={12} md={6}>
                        <Card sx={{backgroundColor: "#DFE0DF"}}>
                            <form ref={form} onSubmit={handleSubmit}>
                                <CardContent>
                                    <Typography fontWeight={10}>contacteer ons</Typography>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <input type="text" name="firstName"/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <input type="email" name="email"/>

                                        </Grid>
                                        <Grid item xs={12}>
                                            <textarea rows={5} name="message"/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button type="submit" variant="contained" fullWidth
                                                    onClick={handleSubmit}>verstuur</Button>
                                        </Grid>


                                    </Grid>
                                </CardContent>
                            </form>


                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <iframe
                            className="map"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2500.041118748119!2d4.754635!3d51.199894!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c154651214f989%3A0x16dca716db3f356a!2sKempenlaan%20134%2C%202290%20Vorselaar!5e0!3m2!1snl!2sbe!4v1656761292353!5m2!1snl!2sbe"
                            width="100%" height="385px" style={{border: "0"}} allowFullScreen={true} loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"/>
                    </Grid></Grid>
            </Box>

        </ThemeProvider>
    );
};

export default ContactForm;
