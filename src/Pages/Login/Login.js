import React from 'react';
import { CircularProgress, Container, Grid, Paper, Typography } from '@mui/material';
import login from '../../images/login.png';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import MuiButton from '../../StyledComponent/MuiButton';
import Navigation from '../Home/Shared/Navigation/Navigation';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Alert from '@mui/material/Alert';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';

const Login = () => {

    const {user, loginUser, isLoading, authError, googleSignIn} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const handleGoogleSignIn = () => {
        googleSignIn(location,history);
    }
    const onSubmit = (data) => {
        console.log(data);
        loginUser(data.email ,data.password, location, history);
        reset();
    };


    return (
        <>
        <Navigation></Navigation>
        <Container>
            <Grid container spacing={2} sx={{ mt: 4 }}>
                <Grid item xs={12} md={6}>

                    <Paper elevation={3} sx={{ pb: 5 , mt: 5,pt: 4, px: 3}}>
                        <Typography variant="body1" gutterBottom style={{ fontSize: '25px', fontWeight: '600', marginTop: '3%', marginBottom: '5%' }} sx={{ textAlign: 'center' }}>
                            Login
                        </Typography>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                                sx={{ width: '95%', m: 1 }}
                                id="email"
                                type="email"
                                label="Email"
                                {...register("email", {
                                    required: "required",
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "Entered value does not match email format"
                                    }
                                })}
                            />
                            {errors.email && <span role="alert">{errors.email.message}</span>}
                            <TextField
                                sx={{ width: '95%', m: 1 }}
                                id="password"
                                type="password"
                                label="Password"
                                {...register("password", {
                                    required: "required",
                                    minLength: {
                                        value: 6,
                                        message: "min length is 6"
                                    }
                                })}
                            />
                            {errors.password && <span role="alert">{errors.password.message}</span>}
                            <div style={{ marginLeft: '1.5%',marginTop: '1%' }}>
                                <MuiButton type='submit'>Login</MuiButton>
                            </div>
                        </form>
                        <p>--------------------------------------------------------------</p>
                        <Button onClick={handleGoogleSignIn} style={{backgroundColor: '#4885ed', color: 'white', padding: '2%'}}><GoogleIcon></GoogleIcon>Sign In</Button>
                        
                        <Link to="/register" style={{textDecoration: 'none' }}><Typography variant="body1" gutterBottom style={{ fontSize: '18px', marginTop: '3%', marginLeft: '1.5%',
                        color: '#2196f3',
                        fontWeight: '500',
                    }}>
                            New User? 
                            Click Here to Register
                            
                        </Typography>
                        </Link>
                    </Paper>

                    {
                            isLoading && <div style={{ fontSize: '40px', margin: '0 auto', textAlign: 'center' }}>
                                <CircularProgress />
                            </div>
                        }

                    <div style={{marginTop: '3%'}}> 
                        {
                            user?.email && <Alert severity="success">Login user successfully</Alert> 
                        }

                        {
                            authError && <Alert severity="error">{authError}</Alert>
                        }
                        </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} alt="" width="100%" />
                </Grid>
            </Grid>
        </Container>
        </>
    );
};

export default Login;