import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Booking from '../Booking/Booking';
const bookings=[
    {id:1,
    name:'cavity',
    time: '11AM to 12PM-',
    space:5
},
{id:2,
    name:'teach cleaning',
    time: '11AM to 12PM-',
    space:5
},
{id:3,
    name:'filling',
    time: '11AM to 12PM-',
    space:5
},
{id:4,
    name:'cavity',
    time: '11AM to 12PM-',
    space:5
},
{id:5,
    name:'cavity',
    time: '11AM to 12PM-',
    space:5
},
{id:6,
    name:'cavity',
    time: '11AM to 12PM-',
    space:5
},

]

const AvailableAppointment = ({date}) => {
    return (
        <Container>
        <h1>Available Appointment for {date.toDateString()}</h1>
        <Grid container spacing={2}>
                {
                    bookings.map(booking=><Booking
                    key={booking.id}
                    booking={booking}
                    date={date}
                    ></Booking>)
                }
       
        </Grid>
        
        </Container>
    );
};

export default AvailableAppointment;