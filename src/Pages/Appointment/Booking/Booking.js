import { Button, Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import MuiButton from '../../../StyledComponent/MuiButton'
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking,date }) => {
    const { name, time, space } = booking;

    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);

    return (

        <>
        <Grid item xs={12} sm={6} md={4} style={{ textAlign: 'center' }}>
            <Paper elevation={3} sx={{ py: 5 }}>
                <Typography variant="h5" gutterBottom component="div" style={{ color: "#0FCFEC" }} sx={{ fontWeight: '600' }}>{name}</Typography>
                <Typography variant="h6" gutterBottom component="div">{time}</Typography>
                <Typography variant="caption" display="block">{space} spaces available</Typography>
                <br />
                <MuiButton  onClick={handleBookingOpen}>Book Appointment</MuiButton>
                
            </Paper>
        </Grid>
        <BookingModal
            openBooking={openBooking}
            handleBookingClose={handleBookingClose}
            booking ={booking}
            date={date}
        ></BookingModal>
        </>
    );
};

export default Booking;