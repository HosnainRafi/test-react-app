import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        price: 20,
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        price: 34,
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        price: 14,
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        price: 18,
        space: 5,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        price: 22,
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        price: 29,
        space: 10,
    },
]

const AvailableAppointment = ({ date }) => {

    return (
        <>
        <Container sx={{mb: 5}}>
            <Box sx={{ mt: 10 }}>
            <h2 style={{ margin: '0 auto', textAlign: 'center', color: '#0FCFEC' ,marginBottom: '2%'}}>Available Appointment on {date.toDateString()}</h2>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking booking={booking}
                    key={booking.id}
                    date={date}
                    ></Booking> 
                    )
                }
               
            </Grid>
        </Box>
        </Container>
        </>
    );
};

export default AvailableAppointment;