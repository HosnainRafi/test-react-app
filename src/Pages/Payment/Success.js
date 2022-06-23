import React from 'react';
import Typography from '@mui/material/Typography'
import MuiButton from '../../StyledComponent/MuiButton';
import { Link } from 'react-router-dom';
import { textAlign } from '@mui/system';

const Success = () => {
    return (
        <div>
            <Typography textAlign="center" color="goldenrod" variant="h3" >
                Payment Successful.your appointment is confirmed.
            </Typography>
            <Link to="/" style={{textDecoration: "none" ,textAlign:"center", margin:"0 auto"}}><MuiButton>Go home</MuiButton></Link>
        </div>
    );
};

export default Success;