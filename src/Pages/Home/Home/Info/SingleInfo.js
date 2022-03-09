import { Container, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SingleInfo = ({ info }) => {

    const { name, image, description,background,color } = info;

    return (
        <Grid item xs={4} sm={4} md={3.8} sx={{m:1, borderRadius: 5}} style={{background: `${background}`,color: `${color}` }}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <img src={image} alt="" style={{ width: '100px' }} />
                    </Grid>
                    <Grid style={{textAlign: 'start'}} item xs={12} md={7}>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color='text-secondary'>
                        {description}
                    </Typography>
                    </Grid>
                    

                </Grid>
            </CardContent>
        </Grid>
    );
};

export default SingleInfo;
/*
<Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    
                </Grid>
                <Grid item xs={12} md={6}>
                    
                </Grid>

            </Grid>
*/