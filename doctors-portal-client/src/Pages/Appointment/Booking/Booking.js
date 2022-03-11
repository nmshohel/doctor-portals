import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import BookingModal from '../BookingModal/BookingModal';
const Booking = ({booking, date}) => {
    const {name, time,space}=booking
    const [bookingOpen, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
        <Grid item xs={12} sm={6} md={4}>
           <Paper elevation={3} sx={{py:5}}>
                <Typography sx={{ color: 'success.main' }} variant="h5" gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant="h5" gutterBottom component="div">
                    {time}
                </Typography>
                <Typography variant="caption" gutterBottom component="div">
                    {space} Space Avaiable
                </Typography>
                <Button onClick={handleBookingOpen} variant="contained">Get Appointment</Button>
           </Paper>
        </Grid>
        <BookingModal date={date} booking={booking} bookingOpen={bookingOpen}  handleBookingClose={handleBookingClose} >

        </BookingModal>
        </>
    );
};

export default Booking;