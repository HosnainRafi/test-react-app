import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from './../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: whitening
    }
]



const Services = () => {
    return (
        <Container>
            <Typography variant="h5" component="div" sx={{ color: 'success.main' ,fontWeight: 500, mt: 2 }}>
                Our services
            </Typography>
            <Typography variant="h4" component="div" sx={{ fontWeight: 600 ,m:3}}>
            Services we provide
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            service={service}
                            key={service.name}
                        ></Service>)

                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Services;