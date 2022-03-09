import React from 'react';
import {Box, Container, Grid, Typography} from '@mui/material';
import chair from '../../../images/chair.png'
import Calender from '../../NewShared/Calender/Calender';
import bg from '../../../images/bg.png'

const AppointmentHeader = ({date,setDate}) => {

    const bgImage = {
        background: `url(${bg})`,
        width: '100%',
        paddingTop: '20px'
    }

    return (
        <div style={bgImage}>
            <Container>
            <Grid container spacing={2}  sx={{mt: 4}}>
                <Grid xs={12} md={5}>
                    <Box sx={{mb: 3}}>
                    <Typography variant='h4' sx={{mb:2}} >Appointment</Typography>
                    </Box>
                    <Box sx={{boxShadow: 3,borderRadius: 8}} style={{marginBottom: '-4%'}}>
                    <Calender date={date} setDate={setDate}></Calender>
                    </Box>
                </Grid>
                <Grid xs={12} md={6} sx={{ml: 4}}>
                <img src={chair} alt="" width='100%'/>
                </Grid>
            </Grid>
        </Container>
        </div>
        
    );
};

export default AppointmentHeader;