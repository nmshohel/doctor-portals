import React from 'react';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Typography,Container } from '@mui/material';

const bannerBg={
    background:`url(${bg})`,
    
}
const verticalCenter={
    display:'flex',
    alignItems:'center',
    height:300,
   
}

const Baner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item style={{...verticalCenter, textAlign:'left'}} xs={12} md={6}>
            <Box>
            <Typography variant="h3">
                Your New Smile <br/>
                Starts Here
          </Typography>
          <Typography variant="h6" sx={{my:3, fontSize:14, color:'gray', fontWeight:300}}>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam est a ex nam repellat quidem sapiente autem sint dolore adipisci?

          </Typography>
          <Button  style={{backgroundColor:'#5CE7ED'}} variant="contained">Get Appointment</Button>
            </Box>
        
          </Grid>
          <Grid item xs={12} md={6}  style={verticalCenter}>
            <img style={{width:'350px'}} src={chair} alt=""/>
        
          </Grid>

        </Grid>
      </Container>
    );
};

export default Baner;