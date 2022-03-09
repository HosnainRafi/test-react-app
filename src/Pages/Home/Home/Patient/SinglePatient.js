import { CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

const SinglePatient = ({patient}) => {

    const {name,image,description,place} = patient;

    return (
        <Grid item xs={4} sm={4} md={3.8} sx={{m:1, borderRadius: 5}}>
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

export default SinglePatient;