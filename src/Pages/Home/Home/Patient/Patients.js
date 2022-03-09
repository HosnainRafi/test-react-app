import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../../images/collon.png'
import pic1 from '../../../../images/people-1.png'
import pic2 from '../../../../images/people-2.png'
import pic3 from '../../../../images/people-3.png'
import SinglePatient from './SinglePatient';

const backgroundi = {
    background: `url(${bg})`,
    backgroundRepeat: 'no-repeat'
}

const Testimonial = [
    {
        name: 'Cayle Broke',
        place: 'Washington',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque necessitatibus corporis natus. Voluptatem itaque explicabo, id alias atque quasi voluptatum voluptas sit animi fugiat iste omnis quidem dolore sequi, officiis dolor reprehenderit earum perspiciatis enim unde quam a odit corrupti.',
        image: pic1
    },
    {
        name: 'Bayektor',
        place: 'London',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque necessitatibus corporis natus. Voluptatem itaque explicabo, id alias atque quasi voluptatum voluptas sit animi fugiat iste omnis quidem dolore sequi, officiis dolor reprehenderit earum perspiciatis enim unde quam a odit corrupti.',
        image: pic2
    },
    {
        name: 'Robinhood',
        place: 'New York',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque necessitatibus corporis natus. Voluptatem itaque explicabo, id alias atque quasi voluptatum voluptas sit animi fugiat iste omnis quidem dolore sequi, officiis dolor reprehenderit earum perspiciatis enim unde quam a odit corrupti.',
        image: pic3
    },
]

const Patients = () => {
    return (
        <Container>
            <Box style={backgroundi} sx={{ m: 3, mb: 6 }}>
                <Typography variant="h6" style={{ color: '#14cafc' }}>Testimonial</Typography>
                <Typography variant="h3">What patient say <br /> about us</Typography>
            </Box>
            <Box flexGrow={1}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{marginBottom: '50px' }}>
                    {
                        Testimonial.map(patient => <SinglePatient
                            patient={patient}
                            key={patient.name}
                        ></SinglePatient>)
                    }
                </Grid>
            </Box>

        </Container>
    );
};

export default Patients;