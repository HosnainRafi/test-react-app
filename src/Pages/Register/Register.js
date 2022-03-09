import React from 'react';
import { CircularProgress, Container, Grid, Paper, Typography } from '@mui/material';
import Navigation from '../Home/Shared/Navigation/Navigation';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import MuiButton from '../../StyledComponent/MuiButton';
import { Link } from 'react-router-dom';
import login from '../../images/login.png'
import useAuth from '../../hooks/useAuth';
import Alert from '@mui/material/Alert';
import { useHistory,useLocation } from "react-router-dom";

const Register = () => {

    const history = useHistory();
    const location = useLocation();
    const { user, registerUser, isLoading, authError } = useAuth();
    

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        registerUser(data.name, data.email, data.password,history,location);
        
        reset();
    };

    return (
        <>
            <Navigation></Navigation>
            <Container>
                <Grid container spacing={2} sx={{ mt: 4 }}>
                    <Grid item xs={12} md={6}>

                        {!isLoading && <Paper elevation={3} sx={{ pb: 5, mt: 5, pt: 4, px: 3 }}>
                            <Typography variant="body1" gutterBottom style={{ fontSize: '25px', fontWeight: '600', marginTop: '3%', marginBottom: '5%' }} sx={{ textAlign: 'center' }}>
                                Register
                            </Typography>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <TextField
                                    sx={{ width: '95%', m: 1 }}
                                    id="name"
                                    type="name"
                                    label="User Name"
                                    {...register('name', { required: true, maxLength: 30 }
                                    )}
                                />
                                {errors.name && errors.name.type === "required" && <span>This is required</span>}
                                {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span>}

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
                                <div style={{ marginLeft: '1.5%', marginTop: '1%' }}>
                                    <MuiButton type='submit'>Register</MuiButton>
                                </div>
                            </form>
                            <Link to="/login" style={{ textDecoration: 'none' }}><Typography variant="body1" gutterBottom style={{
                                fontSize: '18px', marginTop: '3%', marginLeft: '1.5%',
                                color: '#2196f3',
                                fontWeight: '500',
                            }}>
                                Existing User?
                                Click Here to Login

                            </Typography>
                            </Link>
                        </Paper>}
                        {
                            isLoading && <div style={{ fontSize: '40px', margin: '0 auto', textAlign: 'center' }}>
                                <CircularProgress />
                            </div>
                        }
                        <div style={{marginTop: '3%'}}> 
                        {
                            user?.email && <Alert severity="success">User created successfully</Alert> 
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

export default Register;