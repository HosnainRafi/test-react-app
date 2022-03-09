import React from 'react';
import clock from '../../../../images/clock.jpg'
import location from '../../../../images/location.jpg'
import contact from '../../../../images/contact.png'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SingleInfo from './SingleInfo';


const Information = [
    {
        name: 'Opening Hours',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, veniam.',
        image: clock,
        background: '#14cafc',
        color: 'white'
    },
    {
        name: 'Visits Our Location',
        description: 'Broklyn, New-Work,US',
        image: location,
        background: 'grey',
        color: 'white'
    },
    {
        name: 'Contact us now',
        description: '+8801754659997',
        image: contact,
        background: '#14cafc',
        color: 'white'
    }

]

const Info = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{marginTop: '-50px',marginBottom: '50px'}}>
                {
                        Information.map(info => <SingleInfo
                        info={info}
                        key={info.name}
                        ></SingleInfo>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Info;
// container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}