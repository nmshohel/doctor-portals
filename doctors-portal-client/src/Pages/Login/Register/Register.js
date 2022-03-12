import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Alert, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import login from '../../../images/login.png'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData]=useState({});
    const {registerUser,isLoading,user,authError}=useAuth();

    const handleOnchange=(e)=>{
        const field=e.target.name;
        const value=e.target.value;
        console.log(field, value)
        const newLoginData={...loginData}
        newLoginData[field]=value;
        setLoginData(newLoginData)

    }
    const handleRegistrationSubmit=e=>{
        if(loginData.password !== loginData.passwordtwo)
        {
            alert("password did not match");
            return;
        }
        console.log(loginData)
        // call register user function from useFirebase 
        registerUser(loginData.email, loginData.password);
     
        e.preventDefault();
        
    }

    return (
        <Container>
                   
        <Grid  container spacing={2}>
                      <Grid sx={{mt:5}} item xs={12} md={6}> 
                      <Typography>Registration</Typography>
                        { !isLoading  &&
                        <form onSubmit={handleRegistrationSubmit}>
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
                        <TextField 
                      id="standard-basic"
                      sx={{width:"75%", m:1}}
                      label="Retype Your Password"
                      type="password"
                      name="passwordtwo"
                      variant="standard"
                      onChange={handleOnchange}
                       />
  
  
  
                       <Button type="submit" sx={{width:"75%", m:1}} variant="contained">Register</Button>
                       <Link to="/login" style={{textDecoration:'none'}}>
                       <Button  type="submit" sx={{width:"75%", m:1}} variant="text">Already Register? Please Login</Button>
                       </Link>
                      </form>

                        }
                        {
                            isLoading && <CircularProgress />
                            
                        }
                        {user?.email && <Alert severity="success">Successfully Register user</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                      
                      </Grid>
                      <Grid item xs={12} md={6}>
                              <img width="100%" src={login} alt=''/>
                      </Grid>
  
  
                  </Grid>
    
              </Container>
    );
};

export default Register;