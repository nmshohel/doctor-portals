import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, TextField, Typography } from '@mui/material';
import login from '../../../images/login.png'

const Login = () => {
    
    const [loginData, setLoginData]=useState({});


    const handleLoginSubmit=e=>{
        alert("hellow")
        e.preventDefault();
        
    }
    const handleOnchange=(e)=>{
        const field=e.target.name;
        const value=e.target.value;
        console.log(field, value)

    }
    return (
            <Container>
                   
      <Grid  container spacing={2}>
                    <Grid sx={{mt:5}} item xs={12} md={6}> 
                    <Typography>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                    <TextField 
                    id="standard-basic"
                    sx={{width:"75%", m:1}}
                    label="Your Email"
                    variant="standard"
                    name="email"
                    onChange={handleOnchange}
                       />
                    <TextField 
                    id="standard-basic"
                    sx={{width:"75%", m:1}}
                    label="Your Password"
                    type="password"
                    name="password"
                    variant="standard"
                    onChange={handleOnchange}
                     />
                     <Button type="submit" sx={{width:"75%", m:1}} variant="contained">Login</Button>

                    </form>
                    
                    </Grid>
                    <Grid item xs={12} md={6}>
                            <img width="100%" src={login} alt=''/>
                    </Grid>


                </Grid>
  
            </Container>
    );
};

export default Login;