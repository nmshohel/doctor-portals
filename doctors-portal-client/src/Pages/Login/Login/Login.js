import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Alert, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import login from '../../../images/login.png'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    
    const [loginData, setLoginData]=useState({});
    const {isLoading,user,authError,loginUser}=useAuth();

// form submit
    const handleLoginSubmit=e=>{
        loginUser(loginData.email, loginData.password)
        e.preventDefault();
        
    }
// input field onclick 
    const handleOnchange=(e)=>{
        const field=e.target.name;
        const value=e.target.value;
        console.log(field, value)
        const newLoginData={...loginData}
        newLoginData[field]=value;
        setLoginData(newLoginData)

        // newLoginData={...logindata}

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
                    type="email"
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
                     <Link to="/register" style={{textDecoration:'none'}}>
                     <Button  type="submit" sx={{width:"75%", m:1}} variant="text">New User? Please Register</Button>
                     </Link>
                    </form>

                        {
                        isLoading && <CircularProgress />
                            
                        }
                        {user?.email && <Alert severity="success">Login Successfully</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    
                    </Grid>
                    <Grid item xs={12} md={6}>
                            <img width="100%" src={login} alt=''/>
                    </Grid>


                </Grid>
  
            </Container>
    );
};

export default Login;