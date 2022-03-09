import React from 'react';
import chair from '../../../../images/chair.png'
import bg from '../../../../images/bg.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import { Button, Container, Typography } from '@mui/material';
import MuiButton from '../../../../StyledComponent/MuiButton';
import {Link } from "react-router-dom";

const bannerBg = {
    background: `url(${bg})`
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: '500px',
    backgroundSize: 'cover'
}

const Banner = () => {
    return (
        <Box style={bannerBg}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{ textAlign: 'start' }} style={{ ...verticalCenter }}>
                        <Box>
                            <Typography variant='h3'>
                                Your new journey <br />
                                Starts Here
                            </Typography>
                            <Typography variant='h6' sx={{
                                fontSize: '14px', fontWeight: '400',
                                color: 'gray'
                            }}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, itaque. Perspiciatis, illo tenetur eos minus architecto veniam recusandae possimus ducimus consectetur maxime aut ab corrupti iste quibusdam! Laboriosam, facilis error
                            </Typography>
                            
                            <Link to="/appointment" style={{textDecoration: 'none'}}><MuiButton variant='contained' >Get Appointment</MuiButton></Link>
                            
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} style={{ ...verticalCenter, justifyContent: 'center' }}>
                        <img src={chair} alt="" style={{ width: '380px', }} />
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;