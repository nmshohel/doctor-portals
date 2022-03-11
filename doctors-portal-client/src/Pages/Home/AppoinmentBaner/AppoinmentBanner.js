import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const appointmentBG={
    background:`url(${bg})`,
    marginTop:175,
    backgroundColor:'rgba(45,58,74, 0.9)',
    backgroundBlendMode:'darken, luminosity',
}
const AppoinmentBanner = () => {
    return (
        <Box style={appointmentBG} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
                <img src={doctor} alt='' style={{width:400, marginTop:-110}}/>
          </Grid>
          <Grid item xs={12} md={6} sx={{
            display:'flex',
           justifyContent:'flex-start',
           alignItems:'center',
           textAlign:'left'
           }}>
                    <Box>
                    <Typography variant="h6" style={{color:'#5CE7ED'}}>Appointment</Typography>
                    <Typography variant="h4" sx={{marginY:5}} style={{color:'white'}}>Make and appointment today</Typography>
                    <Typography variant="h6" style={{color:'white', fontSize:14, fontWeight:300}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                    <Button sx={{mt:5}} variant="contained">Lern More</Button>
                    </Box>
          </Grid>


        </Grid>
      </Box>
    );
};

export default AppoinmentBanner;