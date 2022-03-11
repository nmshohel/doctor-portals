import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whiting from '../../../images/whitening.png'
import Service from '../Service/Service';
const services=[

  {
    name:'fluoride',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
    img: fluoride

  },
  {
    name:'cavity',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
    img: cavity

  },
  {
    name:'whiting',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
    img: whiting

  },
]
const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
         <Container>

        <Typography sx={{color:'success.main', m:2}} variant="h6" component="div">
          Our Services
        </Typography>
        <Typography sx={{fontWeight:600, m:2}} variant="h4" component="div">
          Services we provided
        </Typography>

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
       
              {
                services.map(service=><Service
                key={service.name}
                service={service}
                
                ></Service>)
              }
    
     
        </Grid>
        </Container>
      </Box>
    );
};

export default Services;

