import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import doctor from '../../../../images/doctor.png';
import bg from '../../../../images/appointment-bg.png';
import { Button, Container, Typography } from '@mui/material';
import MuiButton from '../../../../StyledComponent/MuiButton';


const appointmentBg= {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74, .75)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 150
}

const AppointmentBanner = () => {
    return (
        <div  style={appointmentBg}>
            <Container >
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img src={doctor} 
                        style={{width: '400px', marginTop: -95}} />
                    </Grid>
                    <Grid item xs={12} md={6}
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        textAlign: 'start',
                        alignItems: 'center'
                    }}
                    >
                        <Box>
                        <Typography variant='h6'  style={{color: '#0098f7'}}>
                            Appointment
                        </Typography>
                        <Typography variant='h4' sx={{mt: 3}} style={{color: '#f7f4f4'}}>
                          Make an Appointment Today
                        </Typography>
                        <Typography variant='h6' sx={{mb: 2}} style={{fontSize: '15px' ,fontWeight: '300', color:'#f7f4f4'}}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore quos maiores dolorem! Incidunt repellendus esse, enim numquam quasi laboriosam quae.
                        </Typography>
                        <MuiButton variant='contained'>Learned more</MuiButton>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            </Container>
            
        </div>
    );
};

export default AppointmentBanner;